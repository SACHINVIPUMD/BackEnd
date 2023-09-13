// models/document.model.js
const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    originalName: String,
    path: String,
    contentType: String, // Store the content type (e.g., 'application/pdf' or 'application/msword')
});

module.exports = mongoose.model('Document', documentSchema);
