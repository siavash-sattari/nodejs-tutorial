const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.dirname(__filename) + '/views/index.html');
});

app.get('/auth/login', (req, res) => {
  res.sendFile(path.dirname(__filename) + '/views/auth/login.html');
});

app.get('/download', (req, res) => {
  res.download(path.dirname(__filename) + '/downloads/siavash.jpg');
});

app.get('/404', (req, res) => {
  res.status(400).send({
    status: true,
    message: 'Showing the 404 page'
  });
});

const startApplication = () => {
  app.listen(3000, () => {
    console.log('Application is running on port 3000');
  });
};

module.exports = startApplication;
