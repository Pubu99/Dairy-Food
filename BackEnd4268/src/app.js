const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const createHttpError = require('http-errors');
const cors = require('cors');
const userRouter = require('./routes/user');
const staffRouter = require('./routes/staff');
const productRouter = require('./routes/products');
const orderRouter = require('./routes/orders');
const UserController = require('./controllers/user');
const StaffController = require('./controllers/staff');

app.use(cors());
app.use(express.json());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/staff', staffRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/orders', orderRouter);

app.post('/api/v1/user/signup', UserController.UserSignup);
app.post('/api/v1/user/login', UserController.UserLogin); // Define route for user login
app.post('/api/v1/user/resetpassword', UserController.ResetPassword);

app.post('/api/v1/staff/signup', StaffController.StaffSignup);
app.post('/api/v1/staff/login', StaffController.StaffLogin);
app.post('/api/v1/staff/forgotpassword', StaffController.ForgotPassword);

app.use((err, req, res, next) => {
  console.error(err);
  if (err.status) {
      res.status(err.status).send({ message: err.message });
  } else {
      res.status(500).send({ message: err.message });
  }
});

// Parse JSON bodies
app.use(bodyParser.json());

module.exports = app;
