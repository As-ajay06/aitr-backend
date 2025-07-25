const mongoose = require("mongoose");

const InstituteCosultancy = new mongoose.Schema({
  agencyName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  duration: {
    type: String, // e.g., "1 year", "6 months"
    required: true
  },
  description: {
    type: String
  },
  funding: {
    type: Number // e.g., 50000 or 1e5
  },
  fileId: {
    type: String // Path or URL to the uploaded PDF
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("InstituteCosultancy", InstituteCosultancy);
