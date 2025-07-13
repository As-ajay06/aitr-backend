const mongoose = require("mongoose");

const EventOrganisedSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true
  },
  eventType: {
    type: String, // e.g., Workshop, Seminar, FDP, MOU, etc.
    required: true
  },
  agencyName: {
    type: String,
    required: true
  },
  category: {
    type: String, // e.g., Technical, Non-Technical, Outreach, etc.
    required: true
  },
  numberOfParticipants: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  duration: {
    type: String, // e.g., "3 days", "1 week"
    required: true
  },
  description: {
    type: String
  },
  funding: {
    type: Number // Optional: in ₹ or $
  },
  fileId: {
    type: String // File path or cloud storage URL
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("CollaborativeEvent", EventOrganisedSchema);
