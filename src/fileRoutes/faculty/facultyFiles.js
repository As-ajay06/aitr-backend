const express = require("express");
const multer = require("multer");
const XLSX = require("xlsx");

const uploadFile = multer({ dest: './fileUploads/faculty', storage: multer.memoryStorage() });
const facultyFilesRouter = express.Router();

const acadmicQualificationDiscipline = require("../../models/faculty/acadmicQualificationDiscipline");
const booksChapterAuthored = require("../../models/faculty/booksChapterAuthored");
const facultyAwardsandRecognisation = require("../../models/faculty/facultyAwardsandRecognisation");
const facultyDevlopmentProgram = require("../../models/faculty/facultyDevlopmentProgram");
const invitedTalks = require("../../models/faculty/invitedTalks");
const memerbershipBodies = require("../../models/faculty/memerbershipBodies");
const patentGranted = require("../../models/faculty/patentGranted");
const patentPublished = require("../../models/faculty/patentPublished");
const phDSupervision = require("../../models/faculty/phDSupervision");
const professionalCertificates = require("../../models/faculty/professionalCertificates");
const profile = require("../../models/faculty/profile");
const reasearchProjectGuided = require("../../models/faculty/reasearchProjectGuided");
const researchPaperPublication = require("../../models/faculty/researchPaperPublication");


facultyFilesRouter.post('/profile', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file from buffer
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0]; // First sheet
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Map Excel JSON to profile model
    const mappedData = jsonData.map((row, index) => ({
      facultyId: row["Faculty ID"]?.trim() || null,
      name: row["Name"]?.trim() || null,
      email: row["Email"]?.trim()?.toLowerCase() || null,
      qualification: row["Qualification"]?.trim() || null,
      department: row["Department"]?.trim() || null,
      mobileNumber: row["Mobile Number"]?.toString().trim() || null,
      category: row["Category"]?.trim() || null,
      teachingExperience: row["Teaching Experience"] ? Number(row["Teaching Experience"]) : null,
      industrialExperience: row["Industrial Experience"] ? Number(row["Industrial Experience"]) : null,
      designation: row["Designation"]?.trim() || null,
    }));

    // Save to MongoDB
    const savedData = await profile.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

facultyFilesRouter.post('/research_paper_publication', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');
    // Read Excel file from buffer
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0]; // First sheet
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    console.log("here", jsonData)

    // Map Excel JSON to researchPaperPublication model
     const mappedData = jsonData.map((row, index) => ({
      facultyId: row["Faculty ID"]?.trim() || null,
      facultyName: row["Faculty Name"]?.trim() || null,
      titleOfPaper: row["Title of Paper"]?.trim() || null,
      publicationDate: row["Publication Date"] ? new Date(row["Publication Date"]) : null,
      journalOrConferenceName: row["Journal/Conference Name"]?.trim() || null,
      coAuthors: row["Co-Authors"] ? row["Co-Authors"].split(",").map(s => s.trim()) : [],
      indexing: row["Indexing"]?.trim() || null,
      fileId: row["File ID"]?.trim() || null,
      issnNumber: row["ISSN Number"]?.trim() || null,
      doiLink: row["DOI Link"]?.trim() || null,
      authors: row["Authors"] ? row["Authors"].split(",").map(s => s.trim()) : [],
      issnOrIsbn: row["ISSN/ISBN"]?.trim() || null,
      department: row["Department"]?.trim() || null,
    }));

    // Save to MongoDB
    const savedData = await researchPaperPublication.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

facultyFilesRouter.post('/faculty_awards_recognition', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file from buffer
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0]; // First sheet
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    console.log("here", jsonData)

    // Mapping function for FacultyAwardsRecognition model
    const mappedData = (jsonData) => {
      return jsonData.map(row => ({
        recipientId: row['Recipient ID'] || '',
        recipientName: row['Recipient Name'] || '',
        department: row['Department'] || '',
        awardName: row['Award Name'] || '',
        issuingOrganization: row['Issuing Organization'] || '',
        date: row['Date'] || '',
        category: row['Category'] || '',
        eventName: row['Event Name'] || '',
        description: row['Description'] || '',
        fileId: row['File ID'] || '',
        titleOfAward: row['Title Of Award'] || '',
        level: row['Level'] || ''
      }));
    };
    // Save to MongoDB
    const savedData = await facultyAwardsandRecognisation.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

facultyFilesRouter.post('/faculty_devlopment_program', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file from buffer
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0]; // First sheet
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    console.log("here", jsonData)

    // Mapping function for FacultyFdp model
    const mappedData = (jsonData) => {
      return jsonData.map(row => ({
        facultyId: row['Faculty ID'] || '',
        facultyName: row['Faculty Name'] || '',
        department: row['Department'] || '',
        fdpTitle: row['FDP Title'] || '',
        programName: row['Program Name'] || '',
        organizingInstitute: row['Organizing Institute'] || '',
        startDate: row['Start Date'] ? new Date(row['Start Date']) : null,
        endDate: row['End Date'] ? new Date(row['End Date']) : null,
        programType: row['Program Type'] || '',
        mode: ['Online', 'Offline', 'Hybrid'].includes(row['Mode']) ? row['Mode'] : 'Offline',
        location: row['Location'] || '',
        numberOfDays: row['Number Of Days'] ? Number(row['Number Of Days']) : 0,
        fileId: row['File ID'] || '',
        outcomeHighlights: row['Outcome Highlights'] || ''
      }));
    };

    // Save to MongoDB
    const savedData = await facultyDevlopmentProgram.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});


facultyFilesRouter.post('/patent_published', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file from buffer
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0]; // First sheet
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Mapping function for Patent Published model
    const mappedData = jsonData.map(row => ({
      facultyId: row['Faculty ID'] || '',
      facultyName: row['Faculty Name'] || '',
      department: row['Department'] || '',
      title: row['Title'] || '',
      applicant: row['Applicant'] || '',
      applicationNumber: row['Application Number'] || '',
      applicationDate: row['Application Date'] ? new Date(row['Application Date']) : null,
      status: row['Status'] || '',
      coInventors: row['Co-Inventors']
        ? row['Co-Inventors'].split(',').map(name => ({ memberName: name.trim() }))
        : [],
      country: row['Country'] || '',
      category: row['Category'] || '',
      fileId: row['File ID'] || '',
      patentTitle: row['Patent Title'] || '',
      patentType: row['Patent Type'] || '',
      inventors: row['Inventors']
        ? row['Inventors'].split(',').map(name => name.trim())
        : [],
      publicationDate: row['Publication Date'] ? new Date(row['Publication Date']) : null,
      abstract: row['Abstract'] || ''
    }));

    // Save to MongoDB
    const savedData = await patentPublished.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});


facultyFilesRouter.post('/patent_granted', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file from buffer
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0]; // First sheet
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Mapping function for patentsGranted model
    const mappedData = jsonData.map(row => ({
      patentTitle: row['Patent Title'] || '',
      inventors: row['Inventors']
        ? row['Inventors'].split(',').map(name => ({ memberName: name.trim() }))
        : [],
      grantNumber: row['Grant Number'] || '',
      dateOfGrant: row['Date Of Grant'] ? new Date(row['Date Of Grant']) : null,
      countryOfGrant: row['Country Of Grant'] || '',
      applicationNumber: row['Application Number'] || '',
      file: row['File'] || null // Assuming file info is already structured or can be handled separately
    }));

    // Save to MongoDB
    const savedData = await patentGranted.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});


facultyFilesRouter.post('/professional_certification_earned', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file from buffer
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0]; // First sheet
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Mapping function for FacultyProffessionalCertification model
    const mappedData = jsonData.map(row => ({
      facultyName: row['Faculty Name'] || '',
      certificationName: row['Certification Name'] || '',
      issuingBody: row['Issuing Body'] || '',
      certificationLevel: row['Certification Level'] || '',
      validityPeriod: row['Validity Period'] || '',
      domain: row['Domain'] || '',
      fileId: row['File ID'] || '' // optional, can be empty string if missing
    }));

    // Save to MongoDB
    const savedData = await professionalCertificates.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});


facultyFilesRouter.post('/membership_proffesional_bodies', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file from buffer
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0]; // First sheet
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    const allowedMembershipTypes = ['Life', 'Annual', 'Student', 'Professional', 'Other'];

    // Mapping function for FacultyMembership model
    const mappedData = jsonData.map(row => ({
      facultyName: row['Faculty Name'] || '',
      organizationName: row['Organization Name'] || '',
      membershipType: allowedMembershipTypes.includes(row['Membership Type'])
        ? row['Membership Type']
        : 'Other',
      membershipId: row['Membership ID'] || '',
      dateOfJoining: row['Date Of Joining'] ? new Date(row['Date Of Joining']) : null,
      currentStatus: row['Current Status'] || ''
    }));

    // Save to MongoDB
    const savedData = await memerbershipBodies.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});


facultyFilesRouter.post('/academic_qualification_discipline', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    console.log("here", jsonData)

    // Map Excel JSON to StudentHackathon model
    const mappedData = jsonData.map(row => ({
      facultyName: row['Faculty Name'] || '',
      highestDegree: row['Highest Degree']
        ? row['Highest Degree'].split(',').map(degree => ({ memberName: degree.trim() }))
        : [],
      universityOrInstitute: row['University/Institute'] || '',
      specialization: row['Specialization'] || '',
      yearOfCompletion: row['Year Of Completion']
        ? Number(row['Year Of Completion'])
        : null,
      fileId: row['File ID'] || ''
    }));

    // Save to MongoDB
    const savedData = await acadmicQualificationDiscipline.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});


facultyFilesRouter.post('/phd_supervision', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Map Excel JSON to StudentHackathon model
    const mappedData = jsonData.map(row => ({
      facultyName: row['Faculty Name'] || '',
      phdScholarName: row['PhD Scholar Name'] || '',
      universityAffiliation: row['University Affiliation'] || '',
      status: row['Status'] || '', // e.g., Ongoing, Completed
      researchTopic: row['Research Topic'] || '',
      completionDate: row['Completion Date'] ? new Date(row['Completion Date']) : null
    }));

    // Save to MongoDB
    const savedData = await phDSupervision.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

facultyFilesRouter.post('/research_projects_guided', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Map Excel JSON to StudentHackathon model
    const mappedData = jsonData.map((row, index) => ({
      projectTitle: row["Project Title"]?.trim() || null,
      level: row["Level"]?.trim() || null,
      studentNames: row["Student Names"] ? row["Student Names"].split(",").map(s => s.trim()) : [],
      outcome: row["Outcome"] ? row["Outcome"].split(",").map(o => o.trim()) : [],
    }));

    // Save to MongoDB
    const savedData = await reasearchProjectGuided.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

facultyFilesRouter.post('/invited_talks', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Mapping function for invitedTalks model
    const mappedData = jsonData.map(row => ({
      facultyName: row['Faculty Name'] || '',
      titleOfTalk: row['Title Of Talk'] || '',
      eventName: row['Event Name'] || '',
      organizingBody: row['Organizing Body'] || '',
      date: row['Date'] ? new Date(row['Date']) : null,
      natureOfEngagement: row['Nature Of Engagement'] || '',
      fileId: row['File ID'] || ''
    }));

    // Save to MongoDB
    const savedData = await invitedTalks.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

facultyFilesRouter.post('/books_chapters_authored', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Map Excel JSON to StudentHackathon model
    const mappedData = jsonData.map(row => ({
      facultyName: row['Faculty Name'] || '',
      title: row['Title'] || '',
      publisher: row['Publisher'] || '',
      isbn: row['ISBN'] || '',
      yearOfPublication: row['Year Of Publication']
        ? Number(row['Year Of Publication'])
        : null,
      coAuthors: row['Co-Authors']
        ? row['Co-Authors'].split(',').map(author => author.trim())
        : []
    }));

    // Save to MongoDB
    const savedData = await booksChapterAuthored.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

module.exports = facultyFilesRouter; 