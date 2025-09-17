const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const fileSchema = require("../../models/fileModel")

const StudentProfileSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true // Assuming ID is unique
  },
  name: {
    type: String,
    required: true
  },
  enrollmentNumber: {
    type: String,
    required: true,
    unique: true
  },
  branch: {
    type: String,
    required: true
  },
  batch: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  year: {
    type: Number
  },
  course: {
    type: String,
    required: true
  },
  cgpa: {
    type: Number,
    min: 0,
    max: 10
  },
  dateOfBirth: {
    type: Date
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other']
  },
  category: {
    type: String // e.g., SC/ST/OBC/General
  },
  yearOfAdmission: {
    type: Number
  },
  yearOfGraduationStatus: {
    type: String // or Date, depending on how you handle "status"
  },
  status: {
    type: String,
    enum: ['Pursuing', 'Graduated', 'Dropped', 'Suspended']
  },
  githubLink: {
    type: String
  },
  linkedinProfileLink: {
    type: String
  },
  guardianContactNumber: {
    type: String
  },
  guardianName: {
    type: String
  },
  address: {
    type: String
  }
}, {
  timestamps: true // Adds createdAt and updatedAt
});


module.exports = mongoose.model('StudentProfile', StudentProfileSchema);
