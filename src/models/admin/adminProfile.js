const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  department: {
    type: String,
    required: function () { return this.role === 'admin'; }, // Required only for admin, not superadmin
    trim: true
  },
  role: {
    type: String,
    enum: ["superadmin", "admin"],
    default: "admin",
  },
});

module.exports = mongoose.model("admin", adminSchema);
