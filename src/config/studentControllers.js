import {
    StudentMembership, 
    StudentHigherEducation,
    StudentHackathon,
    StudentStartup, 
    StudentProject, 
    StudentExtraCurricular,
    StudentSportsEvent, 
    StudentPublication,
    StudentInternship, 
    StudentPlacement,
    StudentCompetition,
    StudentCertificate,
    StudentProfile, 
} from "../models/Students"

const { default: mongoose } = require("mongoose");
const StudentMembership = require("../models/StudentMembership");
const StudentHigherEducation = require("../models/StudentHigherEducation");
const StudentHackathon = require("../models/StudentHackathon");
const StudentStartup = require("../models/StudentStartup");
const StudentProject = require("../models/StudentProject");
const StudentExtraCurricular = require("../models/StudentExtraCurricular");
const StudentSportsEvent = require("../models/StudentSportsEvent");
const StudentPublication = require("../models/StudentPublication");
const StudentInternship = require("../models/StudentInternship");
const StudentPlacement = require("../models/StudentPlacement");
const StudentCompetition = require("../models/StudentCompetition");
const StudentCertificate = require("../models/StudentCertificate");
const StudentProfile = require("../models/StudentProfile");

// Generic CRUD generator
const createCrudController = (Model, modelName) => {
  return {
    [`create${modelName}`]: async (req, res) => {
      try {
        const item = new Model(req.body);
        await item.save();
        res.status(201).json(item);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    },

    [`getAll${modelName}s`]: async (req, res) => {
      try {
        const items = await Model.find();
        res.status(200).json(items);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },

    [`get${modelName}ById`]: async (req, res) => {
      try {
        const item = await Model.findById(req.params.id);
        if (!item) return res.status(404).json({ error: `${modelName} not found` });
        res.status(200).json(item);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },

    [`update${modelName}`]: async (req, res) => {
      try {
        const item = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) return res.status(404).json({ error: `${modelName} not found` });
        res.status(200).json(item);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    },

    [`delete${modelName}`]: async (req, res) => {
      try {
        const item = await Model.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ error: `${modelName} not found` });
        res.status(200).json({ message: `${modelName} deleted successfully` });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    }
  };
};

// Export all controllers
module.exports = {
  ...createCrudController(StudentMembership, "StudentMembership"),
  ...createCrudController(StudentHigherEducation, "StudentHigherEducation"),
  ...createCrudController(StudentHackathon, "StudentHackathon"),
  ...createCrudController(StudentStartup, "StudentStartup"),
  ...createCrudController(StudentProject, "StudentProject"),
  ...createCrudController(StudentExtraCurricular, "StudentExtraCurricular"),
  ...createCrudController(StudentSportsEvent, "StudentSportsEvent"),
  ...createCrudController(StudentPublication, "StudentPublication"),
  ...createCrudController(StudentInternship, "StudentInternship"),
  ...createCrudController(StudentPlacement, "StudentPlacement"),
  ...createCrudController(StudentCompetition, "StudentCompetition"),
  ...createCrudController(StudentCertificate, "StudentCertificate"),
  ...createCrudController(StudentProfile, "StudentProfile"),
};
