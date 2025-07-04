
import mongoose from "mongoose";
const Schema = mongoose.Schema;




const fileSchema = new mongoose.Schema({
  name: String,
  data: String, // base64 string
  mimetype: String,
  size: Number,
  uploadedAt: { type: Date, default: Date.now },
});

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile_no : Number,
  department: String,
  designation : String,
  years_Of_Experience: String,
  fileId : { type: Schema.Types.ObjectId, ref : "File"}
})


export const UserModel = mongoose.model("users", UserSchema);
export const FileModel = mongoose.model("File", fileSchema);