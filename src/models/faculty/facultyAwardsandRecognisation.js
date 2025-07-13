const mongoose = require("mongoose");
const { type } = require("node:os");

const FacultyAwardsRecognition = new mongoose.Schema({
  recipientId: {
    type: String,
    required: true
  },
  recipientName: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  awardName: {
    type: String,
    required: true
  },
  issuingOrganization: {
    type: String,
    requird: true
  },
  date: {
    type: String,
    required: true
  },
  category: {
    type: String, // e.g., Academic, Innovation, Research
  },
  eventName: {
    type: String
  },
  description: {
    type: String // Description or purpose of the award
  },
  fileId: {
    type: String // Path or URL to certificate PDF
  },
  titleOfAward: {
    type: String
  },
  level: {
    type: String, // e.g., Institute, State, National, International
    enum: ['Institute', 'State', 'National', 'International']
  },
  // supportingDocumentUrl: {
    // type: String // Additional document (optional)
  // },
  fileId: 
    {
      type: String
    } // Additional document (optional)
  
}, {
  timestamps: true
});

module.exports = mongoose.model("FacultyAwardsRecognition", FacultyAwardsRecognition);
