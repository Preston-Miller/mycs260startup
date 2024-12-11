const express = require('express');
const uuid = require('uuid');
const app = express();

// The scores and activity log are saved in memory and disappear whenever the service is restarted.
let users = {};
let activity_log = [];

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

app.get('*', (_req, res) => {
  res.send({ msg: 'Startup service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});