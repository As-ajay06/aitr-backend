const mongoose = require("mongoose");

const FacultyProfileSchema = new mongoose.Schema({
  facultyId: {
    type: String,
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  qualification: String,
  department: {
    type: String,
    required: true,
    trim: true
  },
  mobileNumber: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/,
  },
  category: String,
  teachingExperience: {
    type: Number,
    required: true,
    min: 0
  },
  industrialExperience: {
    type: Number,
    min: 0
  },
  designation: {
    type: String,
    required: true,
    trim: true
  }
}, { timestamps: true });

module.exports = mongoose.model("FacultyProfile", FacultyProfileSchema);
