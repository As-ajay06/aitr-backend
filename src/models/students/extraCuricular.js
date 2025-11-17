const mongoose = require('mongoose');

const extraCurricular = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true // Assuming ID is unique
  },
  eventParticipationId: {
    type: String,
    required: true,
    unique: true
  },
  studentName: {
    type: String,
    required: true
  },
  enrollmentNumber: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  batch: {
    type: String,
    required: true
  },
  year: {
    type: Number
  },
  eventName: {
    type: String,
    required: true
  },
  eventDate: {
    type: Date,
    required: true
  },
  eventLevel: {
    type: String,
    required: true
  },
  eventLocation: {
    type: String
  },
  position: {
    type: String // e.g., 1st, Runner-Up, Participation
  },
  fileId: {
    type: String // file path or URL
  },
  organizer: {
    type: String
  },
  coachName: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('StudentExtraCurricular', extraCurricular);