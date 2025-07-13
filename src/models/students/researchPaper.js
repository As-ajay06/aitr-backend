const mongoose = require('mongoose');

const StudentResearchPaperSchema = new mongoose.Schema({
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
  doiOrIsbn: {
    type: String // DOI or ISBN identifier
  },
  titleOfPaper: {
    type: String,
    required: true
  },
  publicationDate: {
    type: Date,
    required: true
  },
  journalOrConferenceName: {
    type: String,
    required: true
  },
  coAuthors: {
    type: [String] // list of co-author names
  },
  indexing: {
    type: [String], // e.g., ["Scopus", "SCI"]
    enum: ['Scopus', 'SCI', 'UGC', 'Web of Science', 'Others']
  },
  fileId: {
    type: String // File path or URL
  },
  facultyGuide: {
    type: String // Name of the faculty mentor/guide
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('StudentResearchPaper', StudentResearchPaperSchema);
