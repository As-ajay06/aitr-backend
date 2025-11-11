 // routes/admin.js
const express = require("express");
const { protect, authorizeRoles } = require("../midldeware/auth")
const adminRouter2 = express.Router();


// below routers are router defined for admin and super user only.

// Super Admin → full access
adminRouter2.delete(
  "/delete/:id",
  protect,
  authorizeRoles("superadmin"),
  (req, res) => {
    res.json({ message: "User deleted successfully (Super Admin only)" });
  }
);

// Admin or Super Admin → create/edit
adminRouter2.post(
  "/create",
  protect,
  authorizeRoles("admin", "superadmin"),
  (req, res) => {
    res.json({ message: "Created successfully" });
  }
);


adminRouter2.put(
  "/edit/:id",
  protect,
  authorizeRoles("admin", "superadmin"),
  (req, res) => {
    res.json({ message: "Edited successfully" });
  }
);

module.exports = adminRouter2;
