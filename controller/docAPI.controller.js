// controllers/document.controller.js
const Document = require('../models/document.model');

// Handle file upload
const uploadFile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const { originalname, path, mimetype } = req.file;

        // Create a new document record in the database
        const newDocument = new Document({
            originalName: originalname,
            path: path,
            contentType: mimetype,
        });

        await newDocument.save();

        return res.status(201).json({ message: 'File uploaded successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    uploadFile,
};
