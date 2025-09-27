const mongoose = require("mongoose");

const professionalCertificate = new mongoose.Schema({
  facultyName: {
    type: String,
    required: true
  },
  certificationName: {
    type: String,
    required: true
  },
  issuingBody: {
    type: String,
    required: true
  },
  certificationLevel: {
    type: String, // e.g., Beginner, Intermediate, Advanced
    required: true
  },
  validityPeriod: {
    type: String, // e.g., "2 years", "Lifetime"
    required: true
  },
  domain: {
    type: String, // e.g., "AI/ML", "Cybersecurity", etc.
    required: true
  },
  fileId: {
    type: String // Path or URL to uploaded certificate PDF
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("FacultyCertification", professionalCertificate);
