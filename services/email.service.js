const nodemailer = require('nodemailer');
const randomstring = require('randomstring');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'mail@gmail.com',
    pass: 'password',
  },
});

const otpStorage = {};

function generateOTP() {
  return randomstring.generate({
    length: 6, 
    charset: 'numeric',
  });
}


function sendOTP(email) {
  return new Promise((resolve, reject) => {
    const otp = generateOTP();
    otpStorage[email] = otp;

    const mailOptions = {
      from: 'sandhanakrishnansakthivel@gmail.com',
      to: email,
      subject: 'OTP Verification',
      text: `Your OTP to verify on SAMADHANMITRA is: ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

function verifyOTP(email, userOTP) {
  return new Promise((resolve) => {
    const storedOTP = otpStorage[email];
    const isValid = storedOTP === userOTP;
    resolve(isValid);
  });
}

module.exports = {
  sendOTP,
  verifyOTP,
};
