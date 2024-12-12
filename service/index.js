const express = require('express');
const { getUser, createUser, getUserByToken } = require('./database'); // Import from database.js
const uuid = require('uuid');
const app = express();

// The service port. In production, the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
    try {
        const existingUser = await getUser(req.body.email);
        if (existingUser) {
            res.status(409).send({ msg: 'Existing user' });
        } else {
            const user = await createUser(req.body.email, req.body.password);
            res.send({ token: user.token });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ msg: 'Error creating user' });
    }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    try {
        const user = await getUser(req.body.email);
        if (user) {
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if (validPassword) {
                user.token = uuid.v4(); // Generate a new token for this session
                await userCollection.updateOne(
                    { email: user.email },
                    { $set: { token: user.token } }
                );

                res.send({ token: user.token });
                return;
            }
        }
        res.status(401).send({ msg: 'Unauthorized' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ msg: 'Error logging in' });
    }
});

// Endpoint to get the activity log
apiRouter.get('/activity', async (req, res) => {
    try {
        const activities = await db.collection('activityLogs').find().sort({ timestamp: -1 }).toArray();
        res.send(activities);
    } catch (err) {
        console.error(err);
        res.status(500).send({ msg: 'Error fetching activity log' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});