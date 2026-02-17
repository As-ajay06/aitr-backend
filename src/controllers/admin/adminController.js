require('dotenv').config()
// routes/auth.js
const express = require("express");
const jwt = require("jsonwebtoken");
const adminProfile = require('../../models/admin/adminProfile');
const superAdmin = require('../../models/admin/superAdmin');
const adminRouter = express.Router();

const jwt_secret = process.env.JWT_SECRET; // move this to .env

// Register user (SuperAdmin should be created manually once)
adminRouter.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Prevent anyone from creating a superadmin
    if (role === "superadmin") {
      return res.status(403).json({ message: "You cannot create a superadmin" });
    }

    const user = new adminProfile({ name, email, password, role });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// admin login
adminRouter.post("/login", async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // there is some erroe in this place
    // super admin check
    if (role === "superadmin") {
      const user = await superAdmin.findOne({ email , password });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const token = jwt.sign(
        { id: user._id, role: user.role },
        jwt_secret,
        { expiresIn: "7d" }
      );

      res.status(200).json(
        {
          token,
          user: { name: user.name, email: user.email, role: user.role , department: user.department }
        });

    }
    const user = await adminProfile.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });


    // made changes here
    const facultyId = user._id ;

    const token = jwt.sign(
      { id: facultyId , role: user.role },
      jwt_secret,
      { expiresIn: "7d" }
    );

    res.json({ token, user: { name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = adminRouter;
