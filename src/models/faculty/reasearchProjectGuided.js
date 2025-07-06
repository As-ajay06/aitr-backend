const mongoose = require("mongoose");

const researchPaperGuided = new mongoose.Schema({
  projectTitle: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum: ['UG', 'PG', 'PhD'],
    required: true
  },
  studentNames: {
    type: [String], // list of student names
    required: true
  },
  outcome: {
    type: [String], // multiple outcomes possible
    enum: ['Publication', 'Patent', 'Prototype', 'Presentation', 'Product', 'Other'],
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("facultyReasearchPaper", researchPaperGuided);
