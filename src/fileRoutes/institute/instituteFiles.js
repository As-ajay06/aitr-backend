const express = require("express");
const multer = require("multer");
const XLSX = require("xlsx");

const uploadFile = multer({ dest: './fileUploads/institute', storage: multer.memoryStorage() });

const institueFilesRouter = express.Router();

// institute models
const Consultancy = require("../../models/institute/Consultancy");
const EventGrant = require("../../models/institute/EventGrant");
const EventOrganised = require("../../models/institute/EventOrganised");
const Mou = require("../../models/institute/Mou");
const RD = require("../../models/institute/RD");
const InstituteDocuments = require("../../models/institute/InstituteDocuments");

institueFilesRouter.post('/mou', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Map Excel JSON to mou model
    const mappedData = jsonData.map((row, index) => ({
      agencyName: row["Agency Name"]?.trim() || null,
      date: row["Date"] ? new Date(row["Date"]) : null,
      duration: row["Duration"]?.trim() || null,
      description: row["Description"]?.trim() || "",
      funding: row["Funding"] ? Number(row["Funding"]) : null,
      fileId: row["File ID"]?.trim() || "",
      __rowIndex: index + 2 // Track Excel row number for errors
    }));

    // Save to MongoDB
    const savedData = await Mou.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

institueFilesRouter.post('/consultancy', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer , { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Map Excel JSON to Consultancy model
    const mappedData = jsonData.map((row, index) => ({
      agencyName: row["Agency Name"]?.trim() || null,
      date: row["Date"] ? new Date(row["Date"]) : null,
      duration: row["Duration"]?.trim() || null,
      description: row["Description"]?.trim() || null,
      funding: row["Funding"] ? Number(row["Funding"]) : null,
      fileId: row["File ID"]?.trim() || null,
    }));

    // Save to MongoDB
    const savedData = await Consultancy.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

institueFilesRouter.post('/rnd', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer , { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Map Excel JSON to RND(Reasearch n devlopment) model
    const mappedData = jsonData.map((row, index) => ({
      agencyName: row["Agency Name"]?.trim() || null,
      date: row["Date"] ? new Date(row["Date"]) : null,
      duration: row["Duration"]?.trim() || null,
      description: row["Description"]?.trim() || "",
      funding: row["Funding"] ? Number(row["Funding"]) : null,
      fileId: row["File ID"]?.trim() || "",
    }));

    // Save to MongoDB
    const savedData = await RD.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

institueFilesRouter.post('/event_grant', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer , { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Map Excel JSON to EventGrant model
    const mappedData = jsonData.map((row, index) => ({
      eventName: row["Event Name"]?.trim() || null,
      eventType: row["Event Type"]?.trim() || null,
      agencyName: row["Agency Name"]?.trim() || null,
      date: row["Date"] ? new Date(row["Date"]) : null,
      duration: row["Duration"]?.trim() || null,
      description: row["Description"]?.trim() || null,
      funding: row["Funding"] ? Number(row["Funding"]) : null,
      fileId: row["File ID"]?.trim() || null,
    }));

    // Save to MongoDB
    const savedData = await EventGrant.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

institueFilesRouter.post('/event_organised', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer , { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Map Excel JSON to EventOrganised model
    const mappedData = jsonData.map((row, index) => ({
      eventName: row["Event Name"]?.trim() || null,
      eventType: row["Event Type"]?.trim() || null,
      agencyName: row["Agency Name"]?.trim() || null,
      category: row["Category"]?.trim() || null,
      numberOfParticipants: row["Number of Participants"] ? Number(row["Number of Participants"]) : null,
      date: row["Date"] ? new Date(row["Date"]) : null,
      duration: row["Duration"]?.trim() || null,
      description: row["Description"]?.trim() || null,
      funding: row["Funding"] ? Number(row["Funding"]) : null,
      fileId: row["File ID"]?.trim() || null,
    }));

    // Save to MongoDB
    const savedData = await EventOrganised.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

institueFilesRouter.post('/institute_documents', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer , { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Map Excel JSON to StudentHackathon model
    const mappedData = jsonData.map((row, index) => ({
      aicteAffiliationPdf: row["AICTE Affiliation PDF"]?.trim() || null,
      rgpvPdf: row["RGPV PDF"]?.trim() || null,
      societyPdf: row["Society PDF"]?.trim() || null,
      byLawsPdf: row["By-Laws PDF"]?.trim() || null,
    }));

    // Save to MongoDB
    const savedData = await InstituteDocuments.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

module.exports = institueFilesRouter; 