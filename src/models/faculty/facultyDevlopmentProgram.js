const mongoose = require("mongoose");

const FacultyFdpSchema = new mongoose.Schema({
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
  fdpTitle: {
    type: String,
    required: true
  },
  organizingInstitute: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  programType: {
    type: String, // e.g., Short Term Training Program, Refresher Course
    required: true
  },
  mode: {
    type: String,
    enum: ['Online', 'Offline', 'Hybrid'],
    required: true
  },
  location: {
    type: String // Optional if online
  },
  numberOfDays: {
    type: Number,
    required: true
  },
  certificatePdfUrl: {
    type: String // file path or cloud storage URL
  },
  outcomeHighlights: {
    type: String // Outcome or key learnings
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("FacultyFdp", FacultyFdpSchema);
