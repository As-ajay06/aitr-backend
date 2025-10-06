const mongoose = require("mongoose");


const InstituteDocumentSchema = new mongoose.Schema({
  aicteAffiliationPdf: {
    type: String, // file path or cloud URL
    required: true
  },
  rgpvPdf: {
    type: String,
    required: true
  },
  societyPdf: {
    type: String,
    required: true
  },
  byLawsPdf: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("InstituteDocument", InstituteDocumentSchema);
