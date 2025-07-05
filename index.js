
const express = require("express")
const multer = require("multer")
const mongoose = require("mongoose")
const { FileModel, UserModel } = require("./src/config/db.js");
const XLSX = require("xlsx")
const cors = require("cors");

const studentRouter = require("./src/routes/studentRoutes.js");
const instituteRouter = require("./src/routes/instituteRoutes.js");
const facultyRouter = require("./src/routes/facultyRoutes.js");

const app = express();
const storage = multer.memoryStorage();
const upload = multer({ storage });

// // ✅ Schema for Excel rows
// const ExcelRowSchema = new mongoose.Schema({}, { strict: false });
// const ExcelRow = mongoose.model("ExcelRow", ExcelRowSchema);

app.use(cors());
app.use(express.json());

app.use("/api/vi/students", studentRouter)
app.use("/api/v1/institute", instituteRouter);
app.use("/api/v1/faculty", facultyRouter);

app.use(express.urlencoded({ extended: true }));


// // ✅ Add faculty
// app.post("/facultydata", async (req, res) => {
//   const { name, email, department, mobile_no, years_of_experience, designation } = req.body;

//   const userData = new UserModel({
//     name,
//     email,
//     department,
//     mobile_no,
//     years_of_experience,
//     designation
//   });

//   await userData.save();
//   res.json({ message: "Faculty added" });
// });

// // ✅ Get all faculty
// app.get("/facultydata", async (req, res) => {
//   const response = await UserModel.find({});
//   res.json({ response });
// });

// // ✅ Upload file as base64
// app.post("/file", upload.single("file"), async (req, res) => {
//   try {
//     const { originalname, mimetype, size, buffer } = req.file;
//     const base64Data = buffer.toString("base64");

//     const savedFile = new FileModel({
//       name: originalname,
//       data: base64Data,
//       mimetype,
//       size,
//     });

//     await savedFile.save();
//     res.json({ message: "File uploaded successfully", fileId: savedFile._id });
//   } catch (err) {
//     console.error("❌ File Upload Error:", err);
//     res.status(500).json({ error: "Failed to upload file" });
//   }
// });

// // ✅ Download file
// app.get("/file/:id", async (req, res) => {
//   try {
//     const file = await FileModel.findById(req.params.id);
//     if (!file) return res.status(404).send("File not found");

//     const buffer = Buffer.from(file.data, "base64");

//     res.set({
//       "Content-Type": file.mimetype,
//       "Content-Disposition": `attachment; filename="${file.name}"`,
//     });

//     res.send(buffer);
//   } catch (err) {
//     console.error("❌ File Download Error:", err);
//     res.status(500).send("Error fetching file");
//   }
// });

// // ✅ Upload Excel and save data
// app.post('/upload-excel', upload.single("file"), async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ error: "No file uploaded" });

//     const file = req.file;
//     console.log(file)
    

//     const workbook = XLSX.read(req.file.buffer, { type: "buffer" });
//     const sheetName = workbook.SheetNames[0];
//     const worksheet = workbook.Sheets[sheetName];
//     const jsonData = XLSX.utils.sheet_to_json(worksheet);

//     console.log("✅ Parsed Excel data:", jsonData);

//     const savedRows = [];
//     for (const row of jsonData) {
//       const newRow = new ExcelRow(row);
//       const saved = await newRow.save();
//       savedRows.push(saved);
//     }

//     res.status(200).json({
//       message: "Excel file uploaded and data saved to MongoDB.",
//       savedData: savedRows,
//     });
//   } catch (error) {
//     console.error("❌ Error processing Excel file:", error);
//     res.status(500).json({ error: "Failed to process Excel file" });
//   }
// });

// // ✅ Fetch saved Excel data
// app.get("/excel-data", async (req, res) => {
//   try {
//     const rows = await ExcelRow.find({});
//     res.status(200).json({ data: rows });
//   } catch (err) {
//     console.error("❌ Error fetching Excel data:", err);
//     res.status(500).json({ error: "Failed to fetch Excel data" });
//   }
// });


// MongoDB connection with fallback
// const mongoURI = process.env.MONGO_URI;
// const port = process.env.PORT;

// mongoose.connect(mongoURI)
//   .then(() => console.log("connected"))

app.listen(3000 , () => console.log("server started on port") )