require('dotenv').config()
// middleware/auth.js
const jwt = require("jsonwebtoken");


exports.protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Not authorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Allow only specific roles.
exports.authorizeRoles = (req, res ,next) => {

  try {
    const token = req.headers.authorization;
    console.log(token);
    console.log(process.env.JWT_SECRET)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    // user = { id: objectId , role: 'superadmin' }
    next();
  } catch(err) {
    console.log(err);
    res.status(401).json({ message: "Invalid token" });
  }

  // return (req, res, next) => {
  //   if (!roles.includes(req.user.role)) {
  //     return res.status(403).json({ message: "Forbidden: Access Denied" });
  //   }
  //   sending the user data to the express routes
  //   res.user = res.user
  //   next();
  // };
};
