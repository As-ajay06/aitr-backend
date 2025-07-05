const express = require("express");
const instituteRouter = express.Router();  

// Import and define routes for institute mous
const { createMou, getAllMous, deleteMouById } = require("../controllers/Institute/MouController");
instituteRouter.post("/mou", createMou);
instituteRouter.get("/mous", getAllMous);
instituteRouter.delete("/mou/:id", deleteMouById);

// Import and define routes for institute consultancies
const { createConsultancy, getAllConsultancies, deleteConsultancyById } = require("../controllers/Institute/counsultancyController");
instituteRouter.post("/consultancy", createConsultancy);
instituteRouter.get("/consultancies", getAllConsultancies);
instituteRouter.delete("/consultancy/:id", deleteConsultancyById);

// Import and define routes for institute events grants
const { createEventGrant, getAllEventGrants, deleteEventGrantById } = require("../controllers/Institute/eventGrantController");
instituteRouter.post("/event-grant", createEventGrant);
instituteRouter.get("/event-grants", getAllEventGrants);
instituteRouter.delete("/event-grant/:id", deleteEventGrantById);   

// Import and define routes for institute events organised
const { createEventOrganised, getAllEventOrganised, deleteEventOrganisedById } = require("../controllers/Institute/eventOrganisedController");
instituteRouter.post("/event-organised", createEventOrganised);
instituteRouter.get("/events-organised", getAllEventOrganised);
instituteRouter.delete("/event-organised/:id", deleteEventOrganisedById);

// Import and define routes for institute documents
const { createInstituteDocument, getAllInstituteDocuments, deleteInstituteDocumentById } = require("../controllers/Institute/instituteDocumentsController");
instituteRouter.post("/document", createInstituteDocument);
instituteRouter.get("/documents", getAllInstituteDocuments);
instituteRouter.delete("/document/:id", deleteInstituteDocumentById);

// Import and define routes for institute R and D
const { createRD, getAllRDs, deleteRDById } = require("../controllers/Institute/RDController");
instituteRouter.post("/rnd", createRD);
instituteRouter.get("/rnds", getAllRDs);
instituteRouter.delete("/rnd/:id", deleteRDById);

module.exports = instituteRouter;