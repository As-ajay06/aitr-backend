
const express = require("express")
const multer = require("multer")
const FileModel = require("./src/config/db.js");
const XLSX = require("xlsx")
const cors = require("cors");
const ExcelModel = require("./src/config/db.js")


const adminRouter = require("./src/controllers/admin/adminController.js")


const studentRouter = require("./src/routes/studentRoutes.js");
const instituteRouter = require("./src/routes/instituteRoutes.js");
const facultyRouter = require("./src/routes/facultyRoutes.js");
const departmentRouter = require("./src/routes/departmentRoutes.js");
// const adminRouter = require("./src/routes/adminRoutes.js");
const studentProfile = require("./src/models/students/studentProfile.js");
const app = express();
const storage = multer.memoryStorage();
const upload = multer({ storage });
const uploadFile = multer({ dest: './fileUploads/student/hackathon' }); // temporary storage


// file uploading routes

const facultyFilesRouter = require("./src/fileRoutes/faculty/facultyFiles.js");
const institueFilesRouter = require("./src/fileRoutes/institute/instituteFiles.js");
const studentFilesRouter = require("./src/fileRoutes/student/studentFiles.js");
const departmentFilesRouter = require("./src/fileRoutes/department/departmentFIles.js");
const SearchController = require("./src/controllers/searchController/facultySearchController.js");


// // ✅ Schema for Excel rows
// const ExcelRowSchema = new mongoose.Schema({}, { strict: false });
// const ExcelRow = mongoose.model("ExcelRow", ExcelRowSchema);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

// admin routes
app.use("/api/v1/admin" , adminRouter)

// department routes
app.use("/api/v1/students", studentRouter)
app.use("/api/v1/institute", instituteRouter);
app.use("/api/v1/faculty", facultyRouter);
app.use("/api/v1/department", departmentRouter);

// file uploading routes
app.use("/api/v1/upload/deparment" , departmentFilesRouter )
app.use("/api/v1/upload/faculty" , facultyFilesRouter )
app.use("/api/v1/upload/institute" , institueFilesRouter )
app.use("/api/v1/upload/student" , studentFilesRouter )


app.get("/search/:facultyId", SearchController.getInfo)


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


// get every detail of the person from id.



const port = 3000;

app.listen(port, () => console.log(`server started on ${port}`))
