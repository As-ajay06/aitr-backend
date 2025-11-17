const mongoose = require("mongoose");



const superAdmin = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String
})

// const superAdmin = new mongoose.Schema({
//   fullName: { type: String, required: true },
//   gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
//   dateOfBirth: { type: Date, required: true },
//   age: { type: Number },
//   bloodGroup: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
//   nationality: { type: String },
//   maritalStatus: { type: String, enum: ['Single', 'Married', 'Divorced', 'Widowed'] },
//   contactNumber: { type: String, required: true },
//   alternateContactNumber: { type: String },
//   officialEmail: { type: String },
//   personalEmail: { type: String },
//   residentialAddress: { type: String },
//   emergencyContact: {
//     name: String,
//     phone: String
//   },
//   panNumber: { type: String },
//   aadhaarNumber: { type: String },
//   bankAccountDetails: {
//     accountHolderName: String,
//     accountNumber: String,
//     ifscCode: String,
//     bankName: String,
//     branch: String
//   }
// }, {
//   timestamps: true
// });

module.exports = mongoose.model("superadmin", superAdmin)