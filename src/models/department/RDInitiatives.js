const mongoose = require("mongoose");

const RDInitiavites = new mongoose.Schema({
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
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  funding: {
    type: String // or Number (e.g., "₹20,00,000")
  },
  pdfUrl: {
    type: String // Path or link to uploaded project PDF
  },
  projectTitle: {
    type: String,
    required: true
  },
  fundingAgency: {
    type: String,
    required: true
  },
  principalInvestigator: {
    type: String,
    required: true
  },
  coInvestigator: {
    type: String // or Array if multiple
  },
  budget: {
    type: String // or Number
  },
  output: {
    type: String // could be publication link, patent details, etc.
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("RDinitiavtives", RDInitiavites);
