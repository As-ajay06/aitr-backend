const mongoose = require('mongoose');

const StudentStartupSchema = new mongoose.Schema({
  startupName: {
    type: String,
    required: true
  },
  domain: {
    type: String, // e.g., EdTech, HealthTech, AI, FinTech
    required: true
  },
  incubationSupport: {
    type: String // Name of incubator or support organization
  },
  currentStatus: {
    type: String,
    required: true
  },
  websiteOrLink: {
    type: String // Optional project/startup link
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('StudentStartup', StudentStartupSchema);
