const mongoose = require("mongoose");

const eventGrantReceived = new mongoose.Schema({
  typeOfEvent: {
    type: String,
    required: true
  },
  departmentName: {
    type: String,
    required: true
  },
  grantingAgency: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  numberOfParticipants: {
    type: Number,
    required: true
  },
  dateOfApproval: {
    type: Date,
    required: true
  },
  duration: {
    type: String, // e.g., "3 days"
    required: true
  },
  description: {
    type: String,
    required: true
  },
  funding: {
    type: String // or Number
  },
  pdfUrl: {
    type: String // uploaded proposal/approval PDF
  },
  eventTitle: {
    type: String,
    required: true
  },
  grantAmount: {
    type: String // or Number
  },
  facultyCoordinator: {
    type: String,
    required: true
  },
  purpose: {
    type: String,
    required: true
  },
  utilizationSummary: {
    type: String // Report summary or uploaded file URL
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("FundedEvent", eventGrantReceived);
