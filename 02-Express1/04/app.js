const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { logger } = require('./middleware');

// Middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger);

app.get('/', (req, res) => {
  res.sendFile(path.dirname(__filename) + '/views/index.html');
});

app.get('/auth/login', (req, res) => {
  res.sendFile(path.dirname(__filename) + '/views/auth/login.html');
});

app.post('/auth/login', (req, res) => {
  res.send(req.body);
});

const startApplication = () => {
  app.listen(3000, () => {
    console.log('Application is running on port 3000');
  });
};

module.exports = startApplication;
