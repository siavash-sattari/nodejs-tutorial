const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({
    status: true,
    message: 'Showing the index page',
    request: req.hostname
    // request: req.ip,
    // request: req.method,
    // request: req.path,
    // request: req.url,
    // request: req.params,
    // request: req.query,
    // request: req.headers
    // request: req.xml,
    // request: req.secure,
  });
});

const startApplication = () => {
  app.listen(3000, () => {
    console.log('Application is running on port 3000');
  });
};

module.exports = startApplication;
