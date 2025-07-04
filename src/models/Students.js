// Defining student schema

import mongoose, { Schema } from "mongoose";

// student profile schema
const StudentProfileSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true // Assuming ID is unique
  },
  name: {
    type: String,
    required: true
  },
  enrollmentNumber: {
    type: String,
    required: true,
    unique: true
  },
  branch: {
    type: String,
    required: true
  },
  batch: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  year: {
    type: Number
  },
  course: {
    type: String,
    required: true
  },
  cgpa: {
    type: Number,
    min: 0,
    max: 10
  },
  dateOfBirth: {
    type: Date
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other']
  },
  category: {
    type: String // e.g., SC/ST/OBC/General
  },
  yearOfAdmission: {
    type: Number
  },
  yearOfGraduationStatus: {
    type: String // or Date, depending on how you handle "status"
  },
  status: {
    type: String,
    enum: ['Active', 'Graduated', 'Dropped', 'Suspended']
  },
  githubLink: {
    type: String
  },
  linkedinProfileLink: {
    type: String
  },
  guardianContactNumber: {
    type: String
  },
  guardianName: {
    type: String
  },
  address: {
    type: String
  }
}, {
  timestamps: true // Adds createdAt and updatedAt
});

// student certificate
const StudentCertificateSchema = new mongoose.Schema({
  certificateId: {
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
  courseName: {
    type: String,
    required: true
  },
  issuingOrganization: {
    type: String,
    required: true
  },
  issueDate: {
    type: Date,
    required: true
  },
  validityPeriod: {
    type: String // You can also use Date if it is an expiry date
  },
  gradeOrScore: {
    type: String // Can be string/number based on actual use
  },
  certificateDescription: {
    type: String
  },
  modeOfLearning: {
    type: String, // e.g., Online, Offline, Hybrid
    enum: ['Online', 'Offline', 'Hybrid']
  },
  courseDuration: {
    type: String // e.g., "6 weeks", "3 months"
  },
  rankOrPosition: {
    type: String
  },
  certificatePDF: {
    type: String // URL or filename
  },
  relevanceToProgramOrBranch: {
    type: String
  }
}, {
  timestamps: true
});


// technical - non technical competition
const TechnicalNonTechnicalCompetition = new mongoose.Schema({
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

// placement schema
const StudentPlacementSchema = new mongoose.Schema({
  placementId: {
    type: String,
    required: true,
    unique: true
  },
  studentName: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  companyLocation: {
    type: String
  },
  roleOffered: {
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
  placementType: {
    type: String,
    enum: ['On Campus', 'Off Campus'],
    required: true
  },
  package: {
    type: Number // e.g., LPA or annual salary
  },
  joiningDate: {
    type: Date
  },
  offerLetterPDF: {
    type: String // URL or local path to the file
  }
}, {
  timestamps: true
});

// student internship file requires
const StudentInternshipSchema = new mongoose.Schema({
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
  certificateOrReport: {
    type: String // File path or URL
  },
  technologyUsed: {
    type: [String] // Array of technologies
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

const StudentPublicationSchema = new mongoose.Schema({
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
  paperPDF: {
    type: String // File path or URL
  },
  facultyGuide: {
    type: String // Name of the faculty mentor/guide
  }
}, {
  timestamps: true
});

// sport event schema - file required
const StudentSportsEventSchema = new mongoose.Schema({
  sportsEventId: {
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
  sportsName: {
    type: String,
    required: true
  },
  eventDate: {
    type: Date,
    required: true
  },
  eventName: {
    type: String,
    required: true
  },
  eventLevel: {
    type: String,
    enum: ['Institute', 'State', 'National', 'International']
  },
  eventLocation: {
    type: String
  },
  position: {
    type: String // e.g., "1st", "Runner-up", "Participation"
  },
  certificatePDF: {
    type: String // file path or URL
  },
  coachName: {
    type: String
  },
  organizer: {
    type: String
  }
}, {
  timestamps: true
});

// extra curricular file required
const StudentExtraCurricularSchema = new mongoose.Schema({
  eventParticipationId: {
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
  eventName: {
    type: String,
    required: true
  },
  eventDate: {
    type: Date,
    required: true
  },
  eventLevel: {
    type: String,
    enum: ['Institute', 'State', 'National', 'International'],
    required: true
  },
  eventLocation: {
    type: String
  },
  position: {
    type: String // e.g., 1st, Runner-Up, Participation
  },
  certificatePDF: {
    type: String // file path or URL
  },
  organizer: {
    type: String
  },
  coachName: {
    type: String
  }
}, {
  timestamps: true
});


const StudentProjectSchema = new mongoose.Schema({
  projectTitle: {
    type: String,
    required: true
  },
  teamMembers: {
    type: [String], // List of student names or enrollment numbers
    required: true
  },
  guideName: {
    type: String,
    required: true
  },
  semester: {
    type: String // Example: "6th", "Spring 2025", etc.
  },
  industryMentor: {
    type: String // Optional
  },
  projectOutcome: {
    type: [String], // e.g., ["Prototype", "Patent", "Paper"]
    enum: ['Prototype', 'Patent', 'Paper', 'Product', 'None']
  }
}, {
  timestamps: true
});

const StudentStartupSchema = new mongoose.Schema({
  startupName: {
    type: String,
    required: true
  },
  domain: {
    type: String, // e.g., EdTech, HealthTech, AI, FinTech
    required: true
  },
  incubationSupport: {
    type: String // Name of incubator or support organization
  },
  currentStatus: {
    type: String,
    enum: ['Idea', 'Prototype', 'Registered'],
    required: true
  },
  websiteOrLink: {
    type: String // Optional project/startup link
  }
}, {
  timestamps: true
});


const StudentHackathonSchema = new mongoose.Schema({
  hackathonName: {
    type: String,
    required: true
  },
  organizer: {
    type: String,
    required: true
  },
  teamDetails: {
    type: [String], // Array of team member names or IDs
    required: true
  },
  result: {
    type: String,
    enum: ['Selected', 'Winner', 'Finalist', 'Participant'],
    required: true
  },
  eventDate: {
    type: Date,
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
    type: [String] // Array of technologies like ["React", "Node.js"]
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


const StudentHigherEducationSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true
  },
  scholarship: {
    type: String // Optional (e.g., "Erasmus+", "Fulbright")
  },
  instituteName: {
    type: String,
    required: true
  },
  city: {
    type: String
  },
  country: {
    type: String,
    required: true
  },
  programDuration: {
    type: String // e.g., "1 year", "2 years"
  },
  admissionYear: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});



const StudentProfessionalMembershipSchema = new mongoose.Schema({
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



// models
module.exports = mongoose.model('StudentMembership', StudentProfessionalMembershipSchema);
module.exports = mongoose.model('StudentHigherEducation', StudentHigherEducationSchema);
module.exports = mongoose.model('StudentHackathon', StudentHackathonSchema);
module.exports = mongoose.model('StudentStartup', StudentStartupSchema);
module.exports = mongoose.model('StudentProject', StudentProjectSchema);
module.exports = mongoose.model('StudentExtraCurricular', StudentExtraCurricularSchema);
module.exports = mongoose.model('StudentSportsEvent', StudentSportsEventSchema);
module.exports = mongoose.model('StudentPublication', StudentPublicationSchema);
module.exports = mongoose.model('StudentInternship', StudentInternshipSchema);
module.exports = mongoose.model('StudentPlacement', StudentPlacementSchema);
module.exports = mongoose.model('StudentCompetition', TechnicalNonTechnicalCompetition);
module.exports = mongoose.model('StudentCertificate', StudentCertificateSchema);
module.exports = mongoose.model('StudentProfile', StudentProfileSchema);
