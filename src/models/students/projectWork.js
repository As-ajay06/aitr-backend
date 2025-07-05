const mongoose = require('mongoose');

const StudentProjectSchema = new mongoose.Schema({
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
    type: String // Optional
  },
  projectOutcome: {
    type: [String], // e.g., ["Prototype", "Patent", "Paper"]
    enum: ['Prototype', 'Patent', 'Paper', 'Product', 'None']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('StudentProject', StudentProjectSchema);
