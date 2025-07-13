const mongoose = require("mongoose");

const MouSchema = new mongoose.Schema({
  agencyName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  duration: {
    type: String, // e.g., "2 years", "6 months"
    required: true
  },
  description: {
    type: String
  },
  funding: {
    type: Number // in INR or USD
  },
  fileId: {
    type: String // URL or file path to the uploaded PDF
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("MouAgreement", MouSchema);
