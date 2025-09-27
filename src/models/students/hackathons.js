const mongoose = require('mongoose');

const StudentHackathonSchema = new mongoose.Schema({
  hackathonName: {
    type: String,
    required: true
  },
  organizer: {
    type: String,
    required: true
  },
  teamDetails: {
    type: [String], // Array of team member names or IDs
    required: true
  },
  result: {
    type: String,
    required: true
  },
  eventDate: {
    type: Date,
    required: true
  },
  teamName: {
    type: String
  },
  teamSize: {
    type: Number
  },
  mentorName: {
    type: String
  },
  venue: {
    type: String
  },
  problemStatement: {
    type: String
  },
  technologyUsed: {
    type: [String] // Array of technologies like ["React", "Node.js"]
  },
  prizeMoney: {
    type: Number
  },
  positionSecured: {
    type: String // e.g., "1st", "Top 5", "Runner-up"
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('StudentHackathon', StudentHackathonSchema);

