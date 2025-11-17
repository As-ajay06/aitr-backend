const mongoose = require("mongoose");

const fileSchema = require("../fileModel")

const CoIntentorSchema = new mongoose.Schema({
  memberName: { type: String, trim: true, default: '' },
}, { _id: false });

const patentsGranted = new mongoose.Schema({
  facultyId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'FacultyProfile'
  },
  patentTitle: {
    type: String,
    required: true
  },
  inventors: {
    type: [CoIntentorSchema], // All inventors' names
    required: true
  },
  grantNumber: {
    type: String,
    required: true,
    unique: true
  },
  dateOfGrant: {
    type: Date,
    required: true
  },
  countryOfGrant: {
    type: String,
    required: true
  },
  applicationNumber: {
    type: String,
    required: true
  },
  // fileId: {
  //   type: String // File path or cloud URL of the PDF
  // }
  // todo
  file: {  // name it *certificate* in future
    type: fileSchema
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("patentsGranted", patentsGranted);
