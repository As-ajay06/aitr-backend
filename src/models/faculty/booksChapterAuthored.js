const mongoose = require("mongoose");

const booksChapterdAuthored = new mongoose.Schema({
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

module.exports = mongoose.model("FacultyPublicationBook", booksChapterdAuthored);
