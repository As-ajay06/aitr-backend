
const express = require("express")
const multer = require("multer")
const FileModel = require("./src/config/db.js");
const XLSX = require("xlsx")
const cors = require("cors");
const ExcelModel = require("./src/config/db.js")


const studentRouter = require("./src/routes/studentRoutes.js");
const instituteRouter = require("./src/routes/instituteRoutes.js");
const facultyRouter = require("./src/routes/facultyRoutes.js");
const departmentRouter = require("./src/routes/departmentRoutes.js");
const adminRouter = require("./src/routes/adminRoutes.js");
const studentProfile = require("./src/models/students/studentProfile.js");
const app = express();
const storage = multer.memoryStorage();
const upload = multer({ storage });
const uploadFile = multer({ dest: './fileUploads/student/hackathon' }); // temporary storage

// // ✅ Schema for Excel rows
// const ExcelRowSchema = new mongoose.Schema({}, { strict: false });
// const ExcelRow = mongoose.model("ExcelRow", ExcelRowSchema);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/students", studentRouter)
app.use("/api/v1/institute", instituteRouter);
app.use("/api/v1/faculty", facultyRouter);
app.use("/api/v1/department", departmentRouter);

const StudentHackathon = require("./src/models/students/hackathons.js")
const fs = require("fs")


app.post('/upload/hackathon', uploadFile.single('file'), async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

        // read Excel file
        const workbook = XLSX.readFile(req.file.path);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // convert sheet to JSON
        const data = XLSX.utils.sheet_to_json(sheet);

        // optional: transform fields if needed (e.g., teamDetails JSON)
        const transformed = data.map((item) => {
            if (item.teamDetails && typeof item.teamDetails === 'string') {
                try {
                    item.teamDetails = JSON.parse(item.teamDetails); // if stored as JSON string in Excel
                } catch {
                    item.teamDetails = [];
                }
            }
            // convert numbers
            if (item.teamSize) item.teamSize = Number(item.teamSize) || 0;
            if (item.prizeMoney) item.prizeMoney = Number(item.prizeMoney) || 0;
            if (item.eventDate) item.eventDate = new Date(item.eventDate);

            return item;
        });

        // insert into MongoDB
        const inserted = await StudentHackathon.insertMany(transformed);

        // remove uploaded file
        fs.unlinkSync(req.file.path);

        return res.status(201).json({ insertedCount: inserted.length, inserted });
    } catch (err) {
        console.error('uploadHackathons error:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }

});






// ✅ Upload file as base64
app.post("/file", upload.single("file"), async (req, res) => {

  try {

    console.log(req.file)
    const { originalname, mimetype, size, buffer } = req.file;
    const base64Data = buffer.toString("base64");

    const savedFile = new FileModel({
      name: originalname,
      data: base64Data,
      mimetype,
      size,
    });

    await savedFile.save();
    res.json({ message: "File uploaded successfully", fileId: savedFile._id });
  } catch (err) {
    console.error("❌ File Upload Error:", err);
    res.status(500).json({ error: "Failed to upload file" });
  }
});

// // ✅ Download file
app.get("/file/:id", async (req, res) => {

  const id = req.params.id;
  console.log(id)
  try {
     const file = await FileModel.findById(req.params.id);
     
    if (!file) {
      return res.status(404).send("File not found in database");
    }
    console.log(file)
    const buffer = Buffer.from(file.data, "base64");

    res.set({
      "Content-Type": file.mimetype,
      "Content-Disposition": `attachment; filename="${file.name}"`,
    });

    res.send(buffer);
  } catch (err) {
    console.error("❌ File Download Error:", err);
    res.status(500).send("Error fetching file");
  }
});


app.post('/api/upload-excel', async (req, res) => {
  try {
    const jsonData = req.body.data;
    console.log(jsonData)
    await ExcelModel.insertMany(jsonData);
    res.status(200).send({ message: 'Data saved to MongoDB!' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Server error' });
  }
});


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