const mongoose = require("mongoose");

const booksChapterdAuthored = new mongoose.Schema({
  facultyId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'FacultyProfile'
  },
  facultyName: {
    type: String,
    required: true
  },
  title: {
    type: String, // Title of book or chapter
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  yearOfPublication: {
    type: Number,
    required: true
  },
  coAuthors: {
    type: [String] // Optional list of co-authors
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("booksChapterdAuthored", booksChapterdAuthored);
