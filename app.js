const express = require('express');
const body_parser = require('body-parser');
const userRoute = require('./route/user.route')
const otpController = require('./controller/otp.controller');


const app = express();

app.use(body_parser.json());

app.use('/' , userRoute);
app.post('/send-otp', otpController.sendOTP);
app.post('/verify-otp', otpController.verifyOTP);

module.exports = app;
