const mongoose = require("mongoose");

const invitedTalks = new mongoose.Schema({
  facultyName: {
    type: String,
    required: true
  },
  titleOfTalk: {
    type: String,
    required: true
  },
  eventName: {
    type: String,
    required: true
  },
  organizingBody: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  natureOfEngagement: {
    type: String,
    required: true
  },
  fileId: {
    type: String // File path or cloud link to certificate or letter
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("invitedTalks", invitedTalks);
