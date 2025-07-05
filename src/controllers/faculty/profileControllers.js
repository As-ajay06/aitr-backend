const facultyProfile = require("../../models/faculty/profile");

exports.createFacultyProfile = async (req, res) => {
    const profile = new facultyProfile(req.body);
    await profile.save();
    res.json({
        message: "Faculty profile created successfully"
    });
}

exports.getAllFacultyProfiles = async (req, res) => {
    const profiles = await facultyProfile.find({});
    res.json({
        profiles
    });
}

exports.deleteFacultyProfileById = async (req, res) => {
    const { id } = req.params;
    const profile = await facultyProfile.findByIdAndDelete(id);
    if (!profile) {
        return res.status(404).json({ message: "Faculty profile not found" });
    }
    res.json({
        message: "Faculty profile deleted successfully"
    });
}

