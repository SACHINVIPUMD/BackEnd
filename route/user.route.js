const router = require('express').Router();
const userController = require('../controller/user.controller.js');
const otpController = require('../controller/otp.controller.js');

router.post('/registration' , userController.register);
router.post('/login' , userController.login);
router.post('/send-otp', otpController.sendOTP);
router.post('/verify-otp', otpController.verifyOTP);

module.exports = router;