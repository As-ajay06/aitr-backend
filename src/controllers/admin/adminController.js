const PersonalInfo = require("../../models/admin/adminProfile");

// Create
exports.createPersonalInfo = async (req, res) => {
  try {
    const newRecord = await PersonalInfo.create(req.body);
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All
exports.getAllPersonalInfo = async (req, res) => {
  try {
    const allRecords = await PersonalInfo.find();
    res.status(200).json(allRecords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get By ID
exports.getPersonalInfoById = async (req, res) => {
  try {
    const record = await PersonalInfo.findById(req.params.id);
    if (!record) return res.status(404).json({ error: "Record not found" });
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
exports.updatePersonalInfo = async (req, res) => {
  try {
    const updated = await PersonalInfo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Record not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete
exports.deletePersonalInfo = async (req, res) => {
  try {
    const deleted = await PersonalInfo.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Record not found" });
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
