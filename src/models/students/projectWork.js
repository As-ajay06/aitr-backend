const mongoose = require('mongoose');

const IndustryMentorSchema = new mongoose.Schema({
  memberName: { type: String, trim: true, default: '' },
}, { _id: false });

const StudentProjectSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StudentProfile',
  },
  projectTitle: {
    type: String,
    required: true
  },
  teamMembers: {
    type: [String], // List of student names or enrollment numbers
    required: true
  },
  guideName: {
    type: String,
    required: true
  },
  semester: {
    type: String // Example: "6th", "Spring 2025", etc.
  },
  industryMentor: {
    type: Array // Optional
  },
  projectOutcome: {
    type: [String], // e.g., ["Prototype", "Patent", "Paper"]
    enum: ['Prototype', 'Patent', 'Paper', 'Product', 'None']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('StudentProject', StudentProjectSchema);
