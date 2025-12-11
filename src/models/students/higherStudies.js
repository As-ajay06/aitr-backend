const mongoose = require('mongoose');

const StudentHigherEducationSchema = new mongoose.Schema({

  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StudentProfile',
  },
  courseName: {
    type: String,
    required: true
  },
  scholarship: {
    type: String // Optional (e.g., "Erasmus+", "Fulbright")
  },
  instituteName: {
    type: String,
    required: true
  },
  city: {
    type: String
  },
  country: {
    type: String,
    required: true
  },
  programDuration: {
    type: String // e.g., "1 year", "2 years"
  },
  admissionYear: {
    type: Number,
    required: true
  },
  admissionDate: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('StudentHigherEducation', StudentHigherEducationSchema);
