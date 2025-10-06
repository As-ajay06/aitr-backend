const mongoose = require("mongoose");

const MemberQualificationSchema = new mongoose.Schema({
  memberName: { type: String, trim: true, default: '' },
}, { _id: false });

const acadmicQualificationDiscipline = new mongoose.Schema({
  facultyName: {
    type: String,
    required: true
  },
  highestDegree: {
    type: [MemberQualificationSchema],
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
  fileId: {
    type: String // file path or cloud URL
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("acadmicQualificationDiscipline", acadmicQualificationDiscipline);
