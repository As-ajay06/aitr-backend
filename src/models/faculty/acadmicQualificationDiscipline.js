const mongoose = require("mongoose");

const acadmicQualificationDiscipline = new mongoose.Schema({
  facultyName: {
    type: String,
    required: true
  },
  highestDegree: {
    type: String,
    required: true // e.g., Ph.D., M.Tech, MBA
  },
  universityOrInstitute: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  yearOfCompletion: {
    type: Number,
    required: true
  },
  certificateUrl: {
    type: String // file path or cloud URL
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("acadmicQualificationDiscipline", acadmicQualificationDiscipline);
