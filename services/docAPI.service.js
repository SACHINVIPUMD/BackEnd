const multer = require('multer');
const path = require('path');

// Define storage options for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Files will be stored in the 'uploads/' directory
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = path.extname(file.originalname);
        cb(null, uniqueSuffix + fileExtension); 
    },
});

const upload = multer({ storage: storage });

module.exports = upload;
