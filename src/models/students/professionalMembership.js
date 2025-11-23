const mongoose = require('mongoose');

const StudentMembershipSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StudentProfile',
  },
  organizationName: {
    type: String,
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
  membershipStatus: {
    type: String,
    enum: ['Active', 'Expired', 'Pending', 'Cancelled'],
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('StudentMembership', StudentMembershipSchema);
