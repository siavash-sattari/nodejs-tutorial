const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({
    status: true,
    message: 'Showing the index page'
  });
});

app.get('/auth/login', (req, res) => {
  res.send({
    status: true,
    message: 'Showing the login page'
  });
});

app.get('/profile/:userId', (req, res) => {
  res.send({
    status: true,
    message: 'Showing the profile page',
    user_id: req.params.userId
  });
});

app.get('/profile/:userId/addresses/:addressId', (req, res) => {
  res.send({
    status: true,
    message: 'Showing the profile page',
    user_id: req.params.userId,
    address_id: req.params.addressId
  });
});

const startApplication = () => {
  app.listen(3000, () => {
    console.log('Application is running on port 3000');
  });
};

module.exports = startApplication;
