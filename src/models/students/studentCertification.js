const mongoose = require('mongoose');

const StudentCertificateSchema = new mongoose.Schema({
  certificateId: {
    type: String,
    required: true,
    unique: true
  },
  studentName: {
    type: String,
    required: true
  },
  enrollmentNumber: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  batch: {
    type: String,
    required: true
  },
  year: {
    type: Number
  },
  courseName: {
    type: String,
    required: true
  },
  issuingOrganization: {
    type: String,
    required: true
  },
  issueDate: {
    type: Date,
    required: true
  },
  validityPeriod: {
    type: String // You can also use Date if it is an expiry date
  },
  gradeOrScore: {
    type: String // Can be string/number based on actual use
  },
  modeOfLearning: {
    type: String, // e.g., Online, Offline, Hybrid
    enum: ['Online', 'Offline', 'Hybrid']
  },
  courseDuration: {
    type: String // e.g., "6 weeks", "3 months"
  },
  rankOrPosition: {
    type: String
  },
  certificateDescription: {
    type: String
  },
  relevanceToProgramOrBranch: {
    type: String
  },
  fileId: {
    type: String // URL or filename
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('StudentCertificate', StudentCertificateSchema);
