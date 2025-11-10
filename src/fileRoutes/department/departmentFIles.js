const express = require("express");

const multer = require("multer");
const XLSX = require("xlsx");

const uploadFile = multer({ dest: './fileUploads/department/', storage: multer.memoryStorage() });
const departmentFilesRouter = express.Router();

// import all the models
const Mous = require("../../models/department/Mous");
const consultancyProjects = require("../../models/department/consultancyProjects");
const RDInitiatives = require("../../models/department/RDInitiatives");
const eventGrantReceived = require("../../models/department/eventGrantReceived");

departmentFilesRouter.post('/mous', uploadFile.single('file'), async (req, res) => {
  try {
     // Read Excel file from buffer
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0]; // First sheet
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    // 2️⃣ Map Excel JSON to MoU model
    const mappedData = jsonData.map((row) => ({
      departmentName: row["Department Name"] || "",
      agencyName: row["Agency Name"] || "",
      date: row["Date"] ? new Date(row["Date"]) : null,
      duration: row["Duration"] || "",
      description: row["Description"] || "",
      funding: row["Funding"] || "",
      fileId: row["File ID"] || "",
      titleOfMoU: row["Title of MoU"] || "",
      organizationName: row["Organization Name"] || "",
      dateOfSigning: row["Date of Signing"] ? new Date(row["Date of Signing"]) : null,
      validityPeriod: row["Validity Period"] || "",
      purposeObjectives: row["Purpose/Objectives"] || "",
      fundSupportReceived: row["Fund/Support Received"] || ""
    }));

    // 3️⃣ Filter out incomplete rows (optional)
    const validData = mappedData.filter(item =>
      item.departmentName && item.agencyName && item.titleOfMoU
    );

    // 4️⃣ Insert into MongoDB
    const result = await Mous.insertMany(validData);
    console.log(`✅ Inserted ${result.length} MoUs successfully`);
  } catch (error) {
    console.error("❌ Error importing MoUs:", error);
  } finally {
    mongoose.connection.close();
  }
});

departmentFilesRouter.post('/consultancy_projects', uploadFile.single('file'), async (req, res) => {
  try {
    // 1️⃣ Read Excel file

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    // Read Excel file from buffer
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0]; // First sheet
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    console.log("here", jsonData)
    

    // Map Excel JSON → ConsultancyProject model
    const mappedData = jsonData.map((row, index) => ({
      departmentName: row["Department Name"] || null,
      agencyName: row["Agency Name"] || null,
      date: row["Date"],
      duration: row["Duration"] || null,
      description: row["Description"] || null,
      funding: row["Funding"] || null,
      pdfUrl: row["PDF File ID"] || null,
      titleOfConsultancy: row["Title of Consultancy"] || null,
      clientOrIndustryPartner: row["Client/Industry Partner"] || null,
      facultyLead: row["Faculty Lead"] || null,
      amountSanctioned: row["Amount Sanctioned"] || null,
      supportingDocumentsUrl: row["Supporting Documents URL"] || null,
    }));

    // 4️⃣ Insert into MongoDB
    const result = await consultancyProjects.insertMany(mappedData);
    console.log(`✅ Inserted ${result.length} consultancy projects successfully`);

    // Save to MongoDB
    // const savedData = await StudentHackathon.insertMany(hackathonData);
    // res.status(200).json({ message: 'Data saved successfully', data: savedData });

    res.json({
      message: `Inserted ${result.length} consultancy projects successfully`
    })
  } catch (error) {
    console.error("❌ Error importing consultancy data:", error);
  }
});


departmentFilesRouter.post('/rnd_initiatives', uploadFile.single('file'), async (req, res) => {
  try {
    // 1️⃣ Read Excel file
  // Read Excel file from buffer
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0]; // First sheet
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    // 2️⃣ Map Excel JSON → Mongoose model
    const mappedData = jsonData.map((row) => ({
      departmentName: row["Department Name"] || "",
      agencyName: row["Agency Name"] || "",
      date: row["Date"] ? new Date(row["Date"]) : null,
      duration: row["Duration"] || "",
      description: row["Description"] || "",
      funding: row["Funding"] || "",
      fileId: row["File ID"] || "",
      projectTitle: row["Project Title"] || "",
      fundingAgency: row["Funding Agency"] || "",
      principalInvestigator: row["Principal Investigator"] || "",
      coInvestigator: parseCoInvestigators(row["Co-Investigators"]),
      budget: row["Budget"] || "",
      output: row["Output"] || ""
    }));

    // 3️⃣ Optional validation — skip empty ones
    const validData = mappedData.filter(item =>
      item.departmentName && item.projectTitle && item.principalInvestigator
    );

    // 4️⃣ Insert into MongoDB
    const result = await RDInitiatives.insertMany(validData);
    console.log(`✅ Inserted ${result.length} R&D initiatives successfully`);
  } catch (error) {
    console.error("❌ Error importing R&D initiatives:", error);
  } finally {
    mongoose.connection.close();
  }
});

departmentFilesRouter.post('/event_grant_received', uploadFile.single('file'), async (req, res) => {
  try {
    // Read Excel file from buffer
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0]; // First sheet
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    // 2️⃣ Map Excel JSON → Mongoose model
    const mappedData = jsonData.map((row) => ({
      typeOfEvent: row["Type of Event"] || "",
      departmentName: row["Department Name"] || "",
      grantingAgency: row["Granting Agency"] || "",
      category: row["Category"] || "",
      numberOfParticipants: Number(row["Number of Participants"]) || 0,
      dateOfApproval: row["Date of Approval"] ? new Date(row["Date of Approval"]) : null,
      duration: row["Duration"] || "",
      description: row["Description"] || "",
      funding: row["Funding"] || "",
      fileId: row["File ID"] || "",
      eventTitle: row["Event Title"] || "",
      grantAmount: row["Grant Amount"] || "",
      facultyCoordinator: row["Faculty Coordinator"] || "",
      purpose: row["Purpose"] || "",
      utilizationSummary: row["Utilization Summary"] || ""
    }));

    // 3️⃣ Filter out invalid or incomplete entries
    const validData = mappedData.filter(item =>
      item.typeOfEvent && item.departmentName && item.eventTitle
    );

    // 4️⃣ Insert into MongoDB
    const result = await eventGrantReceived.insertMany(validData);
    console.log(`✅ Inserted ${result.length} event grants successfully`);
  } catch (error) {
    console.error("❌ Error importing event grants:", error);
  }
});


module.exports = departmentFilesRouter; 