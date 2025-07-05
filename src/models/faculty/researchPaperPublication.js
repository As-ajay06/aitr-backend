const mongoose = require("mongoose");

const FacultyPublicationSchema = new mongoose.Schema({
  facultyId: {
    type: String,
    required: true
  },
  facultyName: {
    type: String,
    required: true
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
    type: [String] // list of names
  },
  indexing: {
    type: String, // e.g., "SCI", "SCOPUS", "UGC", etc.
  },
  paperPdfUrl: {
    type: String // URL or file path to PDF
  },
  issnNumber: {
    type: String
  },
  doiLink: {
    type: String
  },
  authors: {
    type: [String] // all authors, including faculty and others
  },
  issnOrIsbn: {
    type: String
  },
  department: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("FacultyPublication", FacultyPublicationSchema);
