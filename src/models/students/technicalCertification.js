const mongoose = require('mongoose');

const StudentCompetitionSchema = new mongoose.Schema({
  competitionId: {
    type: String,
    required: true,
    unique: true
  },
  studentName: {
    type: String,
    required: true
  },
  enrollmentNumber: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  batch: {
    type: String,
    required: true
  },
  year: {
    type: Number
  },
  competitionName: {
    type: String,
    required: true
  },
  date: {
    type: Date
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
  level: {
    type: String,
    enum: ['Institute', 'State', 'National', 'International']
  },
  organizer: {
    type: String
  },
  venue: {
    type: String
  },
  problemStatement: {
    type: String
  },
  technologyUsed: {
    type: [String] // Array of technologies
  },
  prizeMoney: {
    type: Number
  },
  sponsoringAgency: {
    type: String
  },
  positionSecured: {
    type: String // e.g., "1st", "Runner-up", "Top 10", etc.
  },
  projectGithubLink: {
    type: String
  },
  projectDescription: {
    type: String
  },
  certificatePDF: {
    type: String // URL or path to file
  },
  eventMode: {
    type: String,
    enum: ['Online', 'Offline', 'Hybrid']
  },
  achievement: {
    type: String,
    enum: ['Participation', 'Winner', 'Rank']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('studentTechnicalData', StudentCompetitionSchema);
