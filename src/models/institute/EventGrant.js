const mongoose = require("mongoose");

const EventGrant = new mongoose.Schema({
  eventName: {
    type: String,
    required: true
  },
  eventType: {
    type: String, // e.g., Seminar, Workshop, FDP, MOU
    required: true
  },
  agencyName: {
    type: String,
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
    type: Number // Optional: ₹ or $
  },
  pdfUrl: {
    type: String // File path or cloud URL to uploaded PDF
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("ExternalEvent", EventGrant);
