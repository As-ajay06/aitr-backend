const express = require("express");
const multer = require("multer");
const XLSX = require("xlsx");

const uploadFile = multer({ dest: './fileUploads/studnet/', storage: multer.memoryStorage() });
const studentFilesRouter = express.Router();

const extraCuricular = require("../../models/students/extraCuricular");
const hackathons = require("../../models/students/hackathons");
const higherStudies = require("../../models/students/higherStudies");
const placement = require("../../models/students/placement");
const professionalMembership = require("../../models/students/professionalMembership");
const projectWork = require("../../models/students/projectWork");
const researchPaper = require("../../models/students/researchPaper");
const sports = require("../../models/students/sports");
const studentCertification = require("../../models/students/studentCertification");
const studentProfile = require("../../models/students/studentProfile");
const technicalCertification = require("../../models/students/technicalCertification");
const internship = require("../../models/students/internship");
const startups = require("../../models/students/startups");
// todo : see the student internship program

studentFilesRouter.post('/profile', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // mapping the profile data
    const mappedData = data.map(row => ({
      studentId: row.studentId || row.StudentID,
      name: row.name || row.Name,
      enrollmentNumber: row.enrollmentNumber || row.EnrollmentNumber,
      branch: row.branch || row.Branch,
      batch: row.batch || row.Batch,
      email: row.email || row.Email,
      year: row.year || row.Year,
      course: row.course || row.Course,
      cgpa: row.cgpa || row.CGPA,
      dateOfBirth: row.dateOfBirth ? new Date(row.dateOfBirth) : undefined,
      gender: row.gender || row.Gender,
      category: row.category || row.Category,
      yearOfAdmission: row.yearOfAdmission || row.YearOfAdmission,
      graduationStatus: row.graduationStatus || row.YearOfGraduationStatus,
      status: row.status || row.Status,
      githubLink: row.githubLink || row.GitHubLink,
      linkedinProfileLink: row.linkedinProfileLink || row.LinkedInLink,
      guardianContactNumber: row.guardianContactNumber || row.GuardianContactNumber,
      guardianName: row.guardianName || row.GuardianName,
      address: row.address || row.Address,
      fileId: row.fileId || row.FileId
    }));

    // Save to MongoDB
    const savedData = await studentProfile.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

studentFilesRouter.post('/certification', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Map Excel JSON to Student competition model
    // 2️⃣ Map Excel rows to schema fields
    const mappedData = data.map(row => ({
      certificateId: row["Certificate ID"]?.trim() || null,
      studentName: row["Student Name"]?.trim() || null,
      enrollmentNumber: row["Enrollment Number"]?.trim() || null,
      branch: row["Branch"]?.trim() || null,
      batch: row["Batch"]?.trim() || null,
      year: row["Year"] ? Number(row["Year"]) : null,
      courseName: row["Course Name"]?.trim() || null,
      issuingOrganization: row["Issuing Organization"]?.trim() || null,
      issueDate: row["Issue Date"] ? new Date(row["Issue Date"]) : null,
      validityPeriod: row["Validity Period"]?.trim() || "",
      gradeOrScore: row["Grade or Score"]?.trim() || "",
      modeOfLearning: row["Mode of Learning"]?.trim() || "",
      courseDuration: row["Course Duration"]?.trim() || "",
      rankOrPosition: row["Rank or Position"]?.trim() || "",
      certificateDescription: row["Certificate Description"]?.trim() || "",
      relevanceToProgramOrBranch: row["Relevance to Program or Branch"]?.trim() || "",
      fileId: row["File ID"]?.trim() || ""
    }));

    // Save to MongoDB
    const savedData = await studentCertification.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

studentFilesRouter.post('/technical_non_technical', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer , { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Map Excel JSON to techinal non technical model
    const mappedData = data.map(row => ({
      competitionId: row["Competition ID"]?.trim() || null,
      studentName: row["Student Name"]?.trim() || null,
      enrollmentNumber: row["Enrollment Number"]?.trim() || null,
      branch: row["Branch"]?.trim() || null,
      batch: row["Batch"]?.trim() || null,
      year: row["Year"] ? Number(row["Year"]) : null,
      competitionName: row["Competition Name"]?.trim() || null,
      date: row["Date"] ? new Date(row["Date"]) : null,
      teamName: row["Team Name"]?.trim() || null,
      teamSize: row["Team Size"] ? Number(row["Team Size"]) : null,
      mentorName: row["Mentor Name"]?.trim() || null,
      level: row["Level"]?.trim() || null,
      organizer: row["Organizer"]?.trim() || null,
      venue: row["Venue"]?.trim() || null,
      problemStatement: row["Problem Statement"]?.trim() || null,
      technologyUsed: row["Technology Used"]
        ? row["Technology Used"].split(',').map(t => ({ technologyUsed: t.trim() }))
        : [],
      prizeMoney: row["Prize Money"] ? Number(row["Prize Money"]) : null,
      sponsoringAgency: row["Sponsoring Agency"]?.trim() || null,
      positionSecured: row["Position Secured"]?.trim() || null,
      projectGithubLink: row["Project Github Link"]?.trim() || null,
      projectDescription: row["Project Description"]?.trim() || null,
      certificatePDF: row["Certificate PDF"]?.trim() || null,
      eventMode: row["Event Mode"]?.trim() || null,
      achievement: row["Achievement"]?.trim() || null
    }));


    // Save to MongoDB
    const savedData = await technicalCertification.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

studentFilesRouter.post('/placement', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer , { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Map Excel JSON to placement model
    const mappedData = jsonData.map((row, index) => ({
      placementId: row["Placement ID"]?.trim() || null,
      studentName: row["Student Name"]?.trim() || null,
      companyName: row["Company Name"]?.trim() || null,
      companyLocation: row["Company Location"]?.trim() || "",
      roleOffered: row["Role Offered"]?.trim() || null,
      branch: row["Branch"]?.trim() || null,
      batch: row["Batch"]?.trim() || null,
      year: row["Year"] ? Number(row["Year"]) : null,
      placementType: row["Placement Type"]?.trim() || null,
      package: row["Package"] ? Number(row["Package"]) : null,
      joiningDate: row["Joining Date"] ? new Date(row["Joining Date"]) : null,
      fileId: row["File ID"]?.trim() || "",
      positionSecured: row['Position Secured'] || ''
    }));

    // Save to MongoDB
    const savedData = await placement.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

studentFilesRouter.post('/internship', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer , { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Map Excel JSON to internship model
    const mappedData = jsonData.map((row, index) => {
      // Convert technologies if provided as a comma-separated string
      let technologyUsed = [];
      if (row["Technology Used"]) {
        technologyUsed = String(row["Technology Used"])
          .split(",")
          .map(item => ({ memberName: item.trim(), role: "" }));
      }

      return {
        internshipId: row["Internship ID"]?.trim() || null,
        studentName: row["Student Name"]?.trim() || null,
        enrollmentNumber: row["Enrollment Number"]?.trim() || null,
        branch: row["Branch"]?.trim() || null,
        batch: row["Batch"]?.trim() || null,
        year: row["Year"] ? Number(row["Year"]) : null,
        companyName: row["Company Name"]?.trim() || null,
        internshipRole: row["Internship Role"]?.trim() || null,
        modeOfInternship: row["Mode of Internship"]?.trim() || null,
        stipend: row["Stipend"] ? Number(row["Stipend"]) : null,
        startDate: row["Start Date"] ? new Date(row["Start Date"]) : null,
        endDate: row["End Date"] ? new Date(row["End Date"]) : null,
        fileId: row["File ID"]?.trim() || "",
        technologyUsed,
        projectName: row["Project Name"]?.trim() || "",
        projectDescription: row["Project Description"]?.trim() || "",
        companyLocation: row["Company Location"]?.trim() || "",
        areaOfWork: row["Area of Work"]?.trim() || "",
      }
    });


    // Save to MongoDB
    const savedData = await internship.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

studentFilesRouter.post('/research_paper', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer , { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Map Excel JSON to research-paper model

    const mappedData = jsonData.map((row, index) => {
      // Co-Authors
      const coAuthors = row["Co-Authors"]
        ? String(row["Co-Authors"])
          .split(",")
          .map(name => ({ memberName: name.trim() }))
          .filter(a => a.memberName)
        : [];

      // Faculty Guide(s)
      const facultyGuide = row["Faculty Guide"]
        ? String(row["Faculty Guide"])
          .split(",")
          .map(name => ({ memberName: name.trim() }))
          .filter(a => a.memberName)
        : [];

      // Indexing (multiple possible)
      const indexing = row["Indexing"]
        ? String(row["Indexing"])
          .split(",")
          .map(i => i.trim())
          .filter(i => i)
        : [];

      return {
        studentName: row["Student Name"]?.trim() || null,
        enrollmentNumber: row["Enrollment Number"]?.trim() || null,
        branch: row["Branch"]?.trim() || null,
        batch: row["Batch"]?.trim() || null,
        doiOrIsbn: row["DOI/ISBN"]?.trim() || "",
        titleOfPaper: row["Title of Paper"]?.trim() || null,
        publicationDate: row["Publication Date"] ? new Date(row["Publication Date"]) : null,
        journalOrConferenceName: row["Journal/Conference Name"]?.trim() || null,
        coAuthors,
        indexing,
        fileId: row["File ID"]?.trim() || "",
        facultyGuide,
      }
    });

    // Save to MongoDB
    const savedData = await researchPaper.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

studentFilesRouter.post('/sports', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer , { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Map Excel JSON to sports model
    const mappedData = jsonData.map((row, index) => ({
      sportsEventId: row["Sports Event ID"]?.trim() || null,
      studentName: row["Student Name"]?.trim() || null,
      enrollmentNumber: row["Enrollment Number"]?.trim() || null,
      branch: row["Branch"]?.trim() || null,
      batch: row["Batch"]?.trim() || null,
      year: row["Year"] ? Number(row["Year"]) : null,
      sportsName: row["Sports Name"]?.trim() || null,
      eventDate: row["Event Date"] ? new Date(row["Event Date"]) : null,
      eventName: row["Event Name"]?.trim() || null,
      eventLevel: row["Event Level"]?.trim() || "",
      eventLocation: row["Event Location"]?.trim() || "",
      position: row["Position"]?.trim() || "",
      fileId: row["File ID"]?.trim() || "",
      coachName: row["Coach Name"]?.trim() || "",
      organizer: row["Organizer"]?.trim() || "",
    }));

    // Save to MongoDB
    const savedData = await sports.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

studentFilesRouter.post('/extra_curricular', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Map Excel JSON → StudentExtraCurricular model
    const mappedData = jsonData.map((row, index) => ({
      eventParticipationId: row["Event Participation ID"]?.trim() || null,
      studentName: row["Student Name"]?.trim() || null,
      enrollmentNumber: row["Enrollment Number"]?.trim() || null,
      branch: row["Branch"]?.trim() || null,
      batch: row["Batch"]?.trim() || null,
      year: row["Year"] ? Number(row["Year"]) : null,
      eventName: row["Event Name"]?.trim() || null,
      eventDate: row["Event Date"] ? new Date(row["Event Date"]) : null,
      eventLevel: row["Event Level"]?.trim() || null,
      eventLocation: row["Event Location"]?.trim() || "",
      position: row["Position"]?.trim() || "",
      fileId: row["File ID"]?.trim() || "",
      organizer: row["Organizer"]?.trim() || "",
      coachName: row["Coach Name"]?.trim() || "",
    }));
    // Save to MongoDB
    const savedData = await extraCuricular.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

studentFilesRouter.post('/project_work', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Map Excel JSON to StudentHackathon model
    const mappedData = jsonData.map((row, index) => {
      // Convert team members to an array
      const teamMembers = row["Team Members"]
        ? String(row["Team Members"])
          .split(",")
          .map((member) => member.trim())
          .filter((m) => m)
        : [];

      // Convert industry mentors (if any)
      const industryMentor = row["Industry Mentor"]
        ? String(row["Industry Mentor"])
          .split(",")
          .map((mentor) => ({ memberName: mentor.trim() }))
          .filter((m) => m.memberName)
        : [];

      // Convert project outcomes
      const projectOutcome = row["Project Outcome"]
        ? String(row["Project Outcome"])
          .split(",")
          .map((outcome) => outcome.trim())
          .filter((o) => o)
        : [];

      return {
        projectTitle: row["Project Title"]?.trim() || null,
        teamMembers,
        guideName: row["Guide Name"]?.trim() || null,
        semester: row["Semester"]?.trim() || "",
        industryMentor,
        projectOutcome,
      }
    });

    // Save to MongoDB
    const savedData = await projectWork.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

studentFilesRouter.post('/startups', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer , { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // 2️⃣ Map Excel startups data to schema fields
    const mappedData = jsonData.map((row, index) => ({
      startupName: row["Startup Name"]?.trim() || null,
      domain: row["Domain"]?.trim() || null,
      incubationSupport: row["Incubation Support"]?.trim() || "",
      currentStatus: row["Current Status"]?.trim() || null,
      websiteOrLink: row["Website or Link"]?.trim() || "",
    }))

    // Save to MongoDB
    const savedData = await startups.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

studentFilesRouter.post('/hackathons', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Map Excel JSON to StudentHackathon model
    const hackathonData = jsonData.map(row => ({
      hackathonName: row['Hackathon Name'] || '',
      organizer: row['Organizer'] || '',
      teamDetails: row['Team Details'] ? JSON.parse(row['Team Details']) : [],
      result: row['Result'] || '',
      eventDate: row['Event Date'] || '',
      teamName: row['Team Name'] || '',
      teamSize: row['Team Size'] || 0,
      mentorName: row['Mentor Name'] || '',
      venue: row['Venue'] || '',
      problemStatement: row['Problem Statement'] || '',
      technologyUsed: row['Technology Used'] ? JSON.parse(row['Technology Used']) : [],
      prizeMoney: row['Prize Money'] || 0,
      positionSecured: row['Position Secured'] || ''
    }));

    // Save to MongoDB
    const savedData = await hackathons.insertMany(hackathonData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

studentFilesRouter.post('/higher_studies', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Map Excel JSON to Higher studies model
    const mappedData = jsonData.map((row, index) => ({
      courseName: row["Course Name"]?.trim() || null,
      scholarship: row["Scholarship"]?.trim() || "",
      instituteName: row["Institute Name"]?.trim() || null,
      city: row["City"]?.trim() || "",
      country: row["Country"]?.trim() || null,
      programDuration: row["Program Duration"]?.trim() || "",
      admissionYear: row["Admission Year"] ? Number(row["Admission Year"]) : null,
    }));

    // Save to MongoDB
    const savedData = await higherStudies.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});


studentFilesRouter.post('/professional_membership', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No file uploaded');

    // Read Excel file
    const workbook = XLSX.read(req.file, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    console.log("here", jsonData)

    // Map Excel JSON to professional membership model
    const mappedData = jsonData.map((row, index) => ({
      organizationName: row["Organization Name"]?.trim() || null,
      membershipId: row["Membership ID"]?.trim() || null,
      dateOfJoining: row["Date of Joining"] ? new Date(row["Date of Joining"]) : null,
      membershipStatus: row["Membership Status"]?.trim() || null,
    }));

    // Save to MongoDB
    const savedData = await  professionalMembership.insertMany(mappedData);
    res.status(200).json({ message: 'Data saved successfully', data: savedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});


module.exports = studentFilesRouter; 