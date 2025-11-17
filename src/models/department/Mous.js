const mongoose = require("mongoose");

const MoUSchema = new mongoose.Schema({
  departmentName: {
    type: String,
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
    type: String, // e.g., "2 years", "5 months"
    required: true
  },
  description: {
    type: String,
    required: true
  },
  funding: {
    type: String // or Number, based on how you want to store currency
  },
  fileId: {
    type: String // file path or cloud link to uploaded PDF
  },
  titleOfMoU: {
    type: String,
    required: true
  },
  organizationName: {
    type: String,
    required: true
  },
  dateOfSigning: {
    type: Date,
    required: true
  },
  validityPeriod: {
    type: String, // e.g., "3 years"
    required: true
  },
  purposeObjectives: {
    type: String,
    required: true
  },
  fundSupportReceived: {
    type: String // tor Number if strictly numeric
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("MoU", MoUSchema);
