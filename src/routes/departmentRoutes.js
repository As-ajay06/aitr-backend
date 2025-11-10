const express = require('express');
const departmentRouter = express.Router();

// Import and define routes for department counsultancy
const { createConsultancyProject, getAllConsultancyProjects, deleteConsultancyProjectById, uploadFile } = require('../controllers/department/consultancyController');
departmentRouter.post('/consultancy', createConsultancyProject);
departmentRouter.get('/consultancies', getAllConsultancyProjects);
departmentRouter.delete('/consultancy/:id', deleteConsultancyProjectById);   


// Import and define routes for department events grant received
const { createEventGrantReceived, getAllEventGrantsReceived, deleteEventGrantReceivedById } = require('../controllers/department/eventGrantReceived');
departmentRouter.post('/event-grant-received', createEventGrantReceived);
departmentRouter.get('/event-grants-received', getAllEventGrantsReceived);
departmentRouter.delete('/event-grant-received/:id', deleteEventGrantReceivedById);



// Import and define routes for department mous
const { createMou, getAllMous, deleteMouById } = require('../controllers/department/mousController');
departmentRouter.post('/mou', createMou);
departmentRouter.get('/mous', getAllMous);
departmentRouter.delete('/mou/:id', deleteMouById);   


// Import and define routes for R and D Initiavtives
const { createRDInitiative, getAllRDInitiatives, deleteRDInitiativeById } = require('../controllers/department/RDInitiative');
departmentRouter.post('/rnd', createRDInitiative);
departmentRouter.get('/rnds', getAllRDInitiatives);
departmentRouter.delete('/rnd/:id', deleteRDInitiativeById);   


module.exports = departmentRouter;