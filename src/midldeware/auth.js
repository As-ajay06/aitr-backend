require('dotenv').config()
// middleware/auth.js
const jwt = require("jsonwebtoken");


exports.protect = (req, res, next) => {
  const token = req.headers.authorization;
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
exports.authorizeRoles = (req, res, next) => {

  try {
    const token = req.headers.authorization;
    console.log(token);
    console.log(process.env.JWT_SECRET)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    // user = { id: objectId , role: 'superadmin' }
    next();
  } catch (err) {
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

/**
 * Role-based data filter middleware
 * - Superadmin: Can see all data (no filter applied)
 * - Admin: Can see only their department/branch data (e.g., CSE admin sees CSE students/faculty)
 * - Faculty: Can only see their own data (filtered by userId or createdBy)
 * 
 * This middleware attaches a `dataFilter` object to `req` which should be used
 * in controllers when querying the database.
 * 
 * Usage in controllers:
 *   const data = await Model.find(req.dataFilter || {});
 * 
 * @param {Object} options - Configuration options
 * @param {string} options.ownerField - Field to filter faculty's own data (default: 'createdBy')
 * @param {string} options.departmentField - Field to filter admin's department data (default: 'department')
 */
exports.roleBasedDataFilter = (options = {}) => {
  const {
    ownerField = 'createdBy',
    departmentField = 'department'
  } = typeof options === 'string' ? { ownerField: options } : options;

  return (req, res, next) => {
    try {
      // Ensure user is authenticated (should be called after protect middleware)
      if (!req.user) {
        return res.status(401).json({ message: "Not authorized. Please login first." });
      }

      const { role, id, department } = req.user;

      // Superadmin can see all data - no filter applied
      if (role === 'superadmin') {
        req.dataFilter = {};
        req.userRole = 'superadmin';
        console.log('Superadmin access: No filter applied');
        return next();
      }

      // Admin can see only their department/branch data
      if (role === 'admin') {
        if (!department) {
          return res.status(403).json({
            message: "Admin department not configured. Please contact superadmin."
          });
        }
        req.dataFilter = { [departmentField]: department };
        req.userRole = 'admin';
        req.userDepartment = department;
        console.log(`Admin access: Filtering by ${departmentField}=${department}`);
        return next();
      }

      // Faculty can only see their own data
      if (role === 'faculty') {
        req.dataFilter = { [ownerField]: id };
        req.userRole = 'faculty';
        console.log(`Faculty access: Filtering by ${ownerField}=${id}`);
        return next();
      }

      // For any other role, deny access
      return res.status(403).json({
        message: "Forbidden: You don't have permission to access this resource"
      });

    } catch (err) {
      console.error('Role-based filter error:', err);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
};

/**
 * Restrict access to specific roles only
 * @param  {...string} allowedRoles - Roles that are allowed to access the route
 */
exports.restrictTo = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Not authorized. Please login first." });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: `Forbidden: Access denied. Allowed roles: ${allowedRoles.join(', ')}`
      });
    }

    next();
  };
};
