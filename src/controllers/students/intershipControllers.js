const internship = require("../../models/students/internship");

exports.createInternship = async (req, res) => {
    const internshipData = new internship(req.body);
    await internshipData.save();
    res.json({
        message: "Internship created successfully"
    });
}

exports.getAllInternships = async (req, res) => {
    const internships = await internship.find({});
    res.json({
        internships
    });
}
exports.deleteInternshipById = async (req, res) => {
    const { id } = req.params;
    const internshipData = await internship.findByIdAndDelete(id);
    if (!internshipData) {
        return res.status(404).json({ message: "Internship not found" });
    }
    res.json({
        message: "data deleted successfully"
    });
}