const cookieParser = require('cookie-parser');
const express = require('express');
const uuid = require('uuid');
const app = express();

// The scores and activity log are saved in memory and disappear whenever the service is restarted.
let users = {};
let activity_log = []; // Array to store activity log entries

// The service port. In production, the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.getUser(req.body.email)) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = await DB.createUser(req.body.email, req.body.password);
  
      // Set the cookie
      setAuthCookie(res, user.token);
  
      res.send({
        id: user._id,
      });
    }
  });

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = users[req.body.email];
    if (user) {
        if (req.body.password === user.password) {
            user.token = uuid.v4();

            // Add an activity log entry
            activity_log.push({
                type: 'logged_in',
                email: req.body.email,
                timestamp: new Date().toISOString(),
            });

            res.send({ token: user.token });
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

// secureApiRouter verifies credentials for endpoints
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
    const authToken = req.cookies[authCookieName];
    const user = await DB.getUserByToken(authToken);
    if (user) {
      next();
    } else {
      res.status(401).send({ msg: 'Unauthorized' });
    }
  });

// Endpoint to get the activity log
apiRouter.get('/activity', async (req, res) => {
    res.send(activity_log); // Send the entire activity log
});

// Default error handler
app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
  });

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
  }

// Start the server
const httpService = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });