const mongoose = require("mongoose");

const researchPaperGuided = new mongoose.Schema({
  projectTitle: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  studentNames: {
    type: [String], // list of student names
    required: true
  },
  outcome: {
    type: [String], // multiple outcomes possible
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("facultyReasearchPaper", researchPaperGuided);
