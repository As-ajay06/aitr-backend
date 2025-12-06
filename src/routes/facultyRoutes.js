const express = require('express');
const facultyRouter = express.Router();
const { authorizeRoles } = require('../midldeware/auth')


// Import and define routes for acedminc qualification
const { createAcademicQualification, getAllAcademicQualifications, deleteAcademicQualificationById, addExelData } = require('../controllers/faculty/acadmicQualification');
facultyRouter.post('/academic-qualification', createAcademicQualification);
facultyRouter.get('/academic-qualifications', getAllAcademicQualifications);
facultyRouter.delete('/academic-qualification/:id', deleteAcademicQualificationById);
facultyRouter.post('/upload-excel', addExelData)



// Import and define routes for faculty award recognition
const { createFacultyAwardRecognition, getAllFacultyAwardsRecognitions, deleteFacultyAwardRecognitionById } = require('../controllers/faculty/facultyAwardsRecognitionControllers');
facultyRouter.post('/award-recognition', createFacultyAwardRecognition);
facultyRouter.get('/award-recognitions', getAllFacultyAwardsRecognitions);
facultyRouter.delete('/award-recognition/:id', deleteFacultyAwardRecognitionById);


// Import and define routes for books authored
const { createBooksAuthored, getAllBooksAuthored, deleteBooksAuthoredById } = require('../controllers/faculty/booksAuthoredControllers');
facultyRouter.post('/book-authored', createBooksAuthored);
facultyRouter.get('/books-authored', getAllBooksAuthored);
facultyRouter.delete('/book-authored/:id', deleteBooksAuthoredById); 

// Import and define routes for devlopment programmes 
// todo: program spelling is wrong
const { createFacultyDevelopmentProgram, getAllFacultyDevelopmentPrograms, deleteFacultyDevelopmentProgramById } = require('../controllers/faculty/facultyDevlopmentProgramcontroller');
facultyRouter.post('/development-programme', createFacultyDevelopmentProgram);
facultyRouter.get('/development-programmes', getAllFacultyDevelopmentPrograms);
facultyRouter.delete('/development-programme/:id', deleteFacultyDevelopmentProgramById);

// Import and define routes for Invited talks
const { createInvitedTalk, getAllInvitedTalks, deleteInvitedTalkById } = require('../controllers/faculty/invitedTalksController');
facultyRouter.post('/invited-talk', createInvitedTalk);
facultyRouter.get('/invited-talks', getAllInvitedTalks);
facultyRouter.delete('/invited-talk/:id', deleteInvitedTalkById);

// Import and define route
// s for patent Granted 
const { createPatentGranted, getAllPatentsGranted, deletePatentGrantedById } = require('../controllers/faculty/patentsGrantedControllers');
facultyRouter.post('/patent-granted', createPatentGranted);
facultyRouter.get('/patents-granted', getAllPatentsGranted);
facultyRouter.delete('/patent-granted/:id', deletePatentGrantedById);   

// Import and define routes for patent published
const { createPatentPublished, getAllPatentsPublished, deletePatentPublishedById } = require('../controllers/faculty/patentsPublishedControllers');
facultyRouter.post('/patent-published', createPatentPublished);
facultyRouter.get('/patents-published', getAllPatentsPublished);
facultyRouter.delete('/patent-published/:id', deletePatentPublishedById);   

// Import and define routes for phD supervised
const { createPhdSupervision, getAllPhdSupervisions, deletePhdSupervisionById } = require('../controllers/faculty/phDSupervisionController');
facultyRouter.post('/phd-supervised', createPhdSupervision);
facultyRouter.get('/phd-superviseds', getAllPhdSupervisions);
facultyRouter.delete('/phd-supervised/:id', deletePhdSupervisionById);

// Import and define routes for proffesional certificate earned
const { createProfessionalCertificateEarned, getAllProfessionalCertificatesEarned, deleteProfessionalCertificateEarnedById } = require('../controllers/faculty/professionalCertificatesEarned');
facultyRouter.post('/professional-certificate', createProfessionalCertificateEarned);
facultyRouter.get('/professional-certificates', getAllProfessionalCertificatesEarned);
facultyRouter.delete('/professional-certificate/:id', deleteProfessionalCertificateEarnedById);   

// Import and define routes for profile
const { createFacultyProfile, getAllFacultyProfiles, deleteFacultyProfileById } = require('../controllers/faculty/profileControllers');
facultyRouter.post('/profile', createFacultyProfile);
facultyRouter.get('/profiles', authorizeRoles, getAllFacultyProfiles);
facultyRouter.delete('/profile/:id', deleteFacultyProfileById);    

// Import and define routes for research papers
const { createResearchPaper, getAllResearchPapers, deleteResearchPaperById } = require('../controllers/faculty/researchPaperGuidedController');
facultyRouter.post('/research-paper', createResearchPaper);
facultyRouter.get('/research-papers', getAllResearchPapers);
facultyRouter.delete('/research-paper/:id', deleteResearchPaperById);   

// Import and define routes for research projects guided
const { createResearchProjectGuided, getAllResearchProjectsGuided, deleteResearchProjectGuidedById } = require('../controllers/faculty/researchProjectsController');
facultyRouter.post('/research-project-guided', createResearchProjectGuided);
facultyRouter.get('/research-projects-guided', getAllResearchProjectsGuided);
facultyRouter.delete('/research-project-guided/:id', deleteResearchProjectGuidedById);


const { createFacultyMembership, getAllFacultyMembership, deleteFacultyMembership } = require("../controllers/faculty/facultyMembershipController");
facultyRouter.post('/faculty-membership', createFacultyMembership);
facultyRouter.get('/faculty-membership', getAllFacultyMembership);
facultyRouter.delete('/faculty-membership/:id', deleteFacultyMembership);

module.exports = facultyRouter;

// todo : maybe there is research - paper publication tab is missing.