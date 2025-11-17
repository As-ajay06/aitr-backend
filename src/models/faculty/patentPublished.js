const mongoose = require("mongoose");


const CoIntentorSchema = new mongoose.Schema({
  memberName: { type: String, trim: true, default: '' },
}, { _id: false });

const Patentpublished = new mongoose.Schema({
  facultyId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'FacultyProfile'
  },
  facultyName: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  title: {
    type: String, // General title or purpose
    required: true
  },
  applicant: {
    type: String, // Institute, Individual, etc.
    required: true
  },
  applicationNumber: {
    type: String,
    required: true,
    unique: true
  },
  applicationDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  coInventors: {
    type: [CoIntentorSchema] // Array of co-inventor names
  },
  country: {
    type: String,
    required: true
  },
  category: {
    type: String // e.g., Mechanical, Electrical, CS, etc.
  },
  fileId: {
    type: String // File path or URL to patent document
  },
  patentTitle: {
    type: String,
    required: true
  },
  patentType: {
    type: String,
  },
  inventors: {
    type: [String], // All inventors, including faculty

  },
  publicationDate: {
    type: Date
  },
  abstract: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("FacultyPatent", Patentpublished);
