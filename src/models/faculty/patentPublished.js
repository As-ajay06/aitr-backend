const mongoose = require("mongoose");

const FacultyPatentSchema = new mongoose.Schema({
  facultyId: {
    type: String,
    required: true
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
    enum: ['Published', 'Under Review'],
    required: true
  },
  coInventors: {
    type: [String] // Array of co-inventor names
  },
  country: {
    type: String,
    required: true
  },
  category: {
    type: String // e.g., Mechanical, Electrical, CS, etc.
  },
  certificatePdfUrl: {
    type: String // File path or URL to patent document
  },
  patentTitle: {
    type: String,
    required: true
  },
  inventors: {
    type: [String], // All inventors, including faculty
    required: true
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

module.exports = mongoose.model("FacultyPatent", FacultyPatentSchema);
