const mongoose = require("mongoose");

const PhdSupervisionSchema = new mongoose.Schema({
  facultyId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'FacultyProfile'
  },
  facultyName: {
    type: String,
    required: true
  },
  phdScholarName: {
    type: String,
    required: true
  },
  universityAffiliation: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  researchTopic: {
    type: String,
    required: true
  },
  // registrationDate: {
  //   type: Date,
  //   required: function () {
  //     return this.status === 'Ongoing';
  //   }
  // },
  completionDate: {
    type: Date,
    required: function () {
      return this.status === 'Completed';
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("PhdSupervision", PhdSupervisionSchema);
