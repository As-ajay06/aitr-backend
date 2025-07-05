const mongoose = require("mongoose");

const FacultyProfileSchema = new mongoose.Schema({
  facultyId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  qualification: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  category: {
    type: String, // e.g., General, SC, ST, OBC
    required: true
  },
  teachingExperience: {
    type: Number, // in years
    required: true
  },
  industrialExperience: {
    type: Number, // in years
    required: false
  },
  designation: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("FacultyProfile", FacultyProfileSchema);
