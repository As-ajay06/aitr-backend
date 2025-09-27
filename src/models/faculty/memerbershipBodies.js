const mongoose = require("mongoose");

const FacultyMembershipSchema = new mongoose.Schema({
  facultyName: {
    type: String,
    required: true
  },
  organizationName: {
    type: String, // e.g., IEEE, ISTE, ACM
    required: true
  },
  membershipType: {
    type: String,
    enum: ['Life', 'Annual', 'Student', 'Professional', 'Other'],
    required: true
  },
  membershipId: {
    type: String,
    required: true,
    unique: true
  },
  dateOfJoining: {
    type: Date,
    required: true
  },
  currentStatus: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("FacultyMembership", FacultyMembershipSchema);
