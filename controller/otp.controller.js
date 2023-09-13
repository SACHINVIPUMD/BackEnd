const otpService = require('../services/email.service');

function sendOTP(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  otpService.sendOTP(email)
    .then(() => {
      res.json({ message: 'OTP sent successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error sending OTP email' });
    });
}

function verifyOTP(req, res) {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ error: 'Email and OTP are required' });
  }

  otpService.verifyOTP(email, otp)
    .then((isValid) => {
      if (isValid) {
        res.json({ message: 'OTP is valid' });
      } else {
        res.status(400).json({ error: 'Invalid OTP' });
      }
    });
}

module.exports = {
  sendOTP,
  verifyOTP,
};
