const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new mongoose.Schema({
  name: String,
  data: String, // base64 string
  mimetype: String,
  size: Number,
  uploadedAt: { type: Date, default: Date.now },
});

const FileModel = mongoose.model('Files', fileSchema);

module.exports = FileModel