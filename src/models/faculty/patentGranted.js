const mongoose = require("mongoose");

const patentsGranted = new mongoose.Schema({
  patentTitle: {
    type: String,
    required: true
  },
  inventors: {
    type: [String], // All inventors' names
    required: true
  },
  grantNumber: {
    type: String,
    required: true,
    unique: true
  },
  dateOfGrant: {
    type: Date,
    required: true
  },
  countryOfGrant: {
    type: String,
    required: true
  },
  applicationNumber: {
    type: String,
    required: true
  },
  fileId: {
    type: String // File path or cloud URL of the PDF
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("patentsGranted", patentsGranted);
