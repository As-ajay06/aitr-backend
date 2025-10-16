const express = require("express");

const studentRouter = express.Router();

// Define routes for student profiles
const { createStudentProfile, getAllStudentProfiles, deleteStudentProfile } = require("../controllers/students/studentProfile.controller");
studentRouter.post("/profile" , createStudentProfile);
studentRouter.get("/profiles" , getAllStudentProfiles);
studentRouter.delete("/profile/:id" , deleteStudentProfile);

// Import and define routes for startups
const { createStartup, getAllStartups, deleteStartupById } = require("../controllers/students/startupsControllers");
studentRouter.post("/startup", createStartup);
studentRouter.get("/startups", getAllStartups);
studentRouter.delete("/startup/:id", deleteStartupById);

// Import and define routes for sports
const { createSports, getAllSports, deleteSportsById } = require("../controllers/students/sportsControllers");
studentRouter.post("/sports", createSports);
studentRouter.get("/sports", getAllSports);
studentRouter.delete("/sports/:id", deleteSportsById);  

// Import and define routes for certificates
const { createCretificate, getAllCertificates, deleteCertificateById } = require("../controllers/students/certificateControllers");
studentRouter.post("/certificate", createCretificate);
studentRouter.get("/certificates", getAllCertificates);
studentRouter.delete("/certificate/:id", deleteCertificateById);

// Import and define routes for student projects

const { createProjectWork, getAllProjectWorks , deleteProjectWorkById } = require("../controllers/students/projectWorkControllers");
studentRouter.post("/project", createProjectWork);
studentRouter.get("/projects", getAllProjectWorks);
studentRouter.delete("/project/:id", deleteProjectWorkById);    

// Import and define routes for research papers
const { createResearchPaper, getAllResearchPapers, deleteResearchPaperById } = require("../controllers/students/researchPaperControllers");
studentRouter.post("/research-paper", createResearchPaper);
studentRouter.get("/research-papers", getAllResearchPapers);
studentRouter.delete("/research-paper/:id", deleteResearchPaperById);

// Import and define routes for student placements
const { createPlacement, getAllPlacements, deletePlacementById } = require("../controllers/students/placementControllers");
studentRouter.post("/placement", createPlacement);
studentRouter.get("/placements", getAllPlacements); 
studentRouter.delete("/placement/:id", deletePlacementById);

// Import and define routes for student hackathons
const { createHackathon, getAllHackathons, deleteHackathonById } = require("../controllers/students/hackathonsControllers");
studentRouter.post("/hackathon", createHackathon);
studentRouter.get("/hackathons", getAllHackathons);
studentRouter.delete("/hackathon/:id", deleteHackathonById);

// Import and define routes for student higher studies
const { createHigherStudies, getAllHigherStudies, deleteHigherStudiesById } = require("../controllers/students/higherStudiesControllers");
studentRouter.post("/higher-study", createHigherStudies);
studentRouter.get("/higher-studies", getAllHigherStudies);
studentRouter.delete("/higher-study/:id", deleteHigherStudiesById);

// Import and define routes for student profession memberships
const { createMembershipCertificate, getAllMembershipCertificates, deleteMembershipCertificateById } = require("../controllers/students/professionalMembershipControllers");
studentRouter.post("/membership", createMembershipCertificate);
studentRouter.get("/memberships", getAllMembershipCertificates);
studentRouter.delete("/membership/:id", deleteMembershipCertificateById);

// Import and define routes for student extracurricular activities
const { createExtraCurricular, getAllExtraCurriculars, deleteExtraCurricularById } = require("../controllers/students/studentExtraCurriculat.controller");
studentRouter.post("/extracurricular", createExtraCurricular);
studentRouter.get("/extracurriculars", getAllExtraCurriculars);
studentRouter.delete("/extracurricular/:id", deleteExtraCurricularById);

// Import and define routes for student techinical-Non technical skills
const { createTechnicalNonTechnical, getTechnicalNonTechnical, deleteTechnicalNonTechnicalById } = require("../controllers/students/technicalControllers");
studentRouter.post("/technicalNontechnical", createTechnicalNonTechnical);
studentRouter.get("/technicalNontechnical", getTechnicalNonTechnical);
studentRouter.delete("/technicalNontechnical/:id", deleteTechnicalNonTechnicalById);

// todo : to create route for the capstone project
// todo : to create route for internship

module.exports = studentRouter ;