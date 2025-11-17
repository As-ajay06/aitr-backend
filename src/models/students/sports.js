const mongoose = require('mongoose');

const StudentSportsEventSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true // Assuming ID is unique
  },
  sportsEventId: {
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
  sportsName: {
    type: String,
    required: true
  },
  eventDate: {
    type: Date,
    required: true
  },
  eventName: {
    type: String,
    required: true
  },
  eventLevel: {
    type: String,
  },
  eventLocation: {
    type: String
  },
  position: {
    type: String // e.g., "1st", "Runner-up", "Participation"
  },
  fileId: {
    type: String // file path or URL
  },
  coachName: {
    type: String
  },
  organizer: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('StudentSportsEvent', StudentSportsEventSchema);
