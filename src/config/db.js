
require("dotenv").config();
const mongoose = require("mongoose")


const dbConnect = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database connected! ");
    })
    .catch((err) => {
      console.error(`Failed to connect database: ${err}`.red.bold);
    });
};
dbConnect();


const fileSchema = new mongoose.Schema({
  name: String,
  data: String, // base64 string
  mimetype: String,
  size: Number,
  uploadedAt: { type: Date, default: Date.now },
});



// const ExcelDataSchema = new mongoose.Schema({}, { strict: false });

// const ExcelModel = mongoose.model('ExcelData', ExcelDataSchema);
// // const UserSchema = new mongoose.Schema({
// //   name: String,
// //   email: String,
// //   mobile_no : Number,
// //   department: String,
// //   designation : String,
// //   years_Of_Experience: String,
// //   fileId : { type: Schema.Types.ObjectId, ref : "File"}
// // })


// const UserModel = mongoose.model("users", UserSchema);
const FileModel = mongoose.model("File", fileSchema);

module.exports = FileModel;