const mongoose = require('mongoose');


const TechnologyUsedSchema = new mongoose.Schema({
  memberName: { type: String, trim: true, default: '' },
  role: { type: String, trim: true, default: '' }
}, { _id: false });


const StudentInternshipSchema = new mongoose.Schema({

  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StudentProfile',
  },
  internshipId: {
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
  companyName: {
    type: String,
    required: true
  },
  internshipRole: {
    type: String,
    required: true
  },
  modeOfInternship: {
    type: String,
    enum: ['Online', 'Offline', 'Hybrid'],
    required: true
  },
  stipend: {
    type: Number
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  fileId: {
    type: String // File path or URL
  },
  technologyUsed: {
    type: [TechnologyUsedSchema] // Array of technologies
  },
  projectName: {
    type: String
  },
  projectDescription: {
    type: String
  },
  companyLocation: {
    type: String
  },
  areaOfWork: {
    type: String // e.g., Web Development, Data Science
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('StudentInternship', StudentInternshipSchema);
