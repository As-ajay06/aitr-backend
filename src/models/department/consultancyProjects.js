const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConsultancyProjectSchema = new mongoose.Schema({
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
    type: String, // e.g., "6 months", "2 years"
    required: true
  },
  description: {
    type: String,
    required: true
  },
  funding: {
    type: String // or Number if you prefer monetary values
  },
  pdfUrl: {
    type: Schema.Types.ObjectId, ref : "File" // Path to uploaded PDF
  },
  titleOfConsultancy: {
    type: String,
    required: true
  },
  clientOrIndustryPartner: {
    type: String,
    required: true
  },
  facultyLead: {
    type: String,
    required: true
  },
  amountSanctioned: {
    type: String // or Number if numeric
  },
  supportingDocumentsUrl: {
    type: String // optional supporting doc URL or path
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("ConsultancyProject", ConsultancyProjectSchema);
