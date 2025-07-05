const mongoose = require('mongoose');

const StudentPlacementSchema = new mongoose.Schema({
  placementId: {
    type: String,
    required: true,
    unique: true
  },
  studentName: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  companyLocation: {
    type: String
  },
  roleOffered: {
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
  placementType: {
    type: String,
    enum: ['On Campus', 'Off Campus'],
    required: true
  },
  package: {
    type: Number // e.g., LPA or annual salary
  },
  joiningDate: {
    type: Date
  },
  offerLetterPDF: {
    type: String // URL or local path to the file
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('StudentPlacement', StudentPlacementSchema);
