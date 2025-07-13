const mongoose = require("mongoose");

const FacultyProfileSchema = new mongoose.Schema({
  facultyId: {
    type: String,
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
  },
  department: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: Number,
    required: true
  },
  category: {
    type: String, // e.g., General, SC, ST, OBC
  },
  teachingExperience: {
    type: String, // in years
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
