const mongoose = require('mongoose');



const TeamMemberSchema = new mongoose.Schema({
  memberName: { type: String, trim: true, default: '' },
  role: { type: String, trim: true, default: '' }
}, { _id: false });

const TechnologyUsedSchema = new mongoose.Schema({
  memberName: { type: String, trim: true, default: '' },
  role: { type: String, trim: true, default: '' }
}, { _id: false });

const StudentHackathonSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StudentProfile',
  },
  hackathonName: {
    type: String,
    required: true
  },
  organizer: {
    type: String,
    required: true
  },
  teamDetails: {
    type: [TeamMemberSchema], // Array of team member names or IDs
    required: true
  },
  result: {
    type: String,
    required: true
  },
  eventDate: {
    type: String,
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
    type: [TechnologyUsedSchema] // Array of technologies like ["React", "Node.js"]
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

