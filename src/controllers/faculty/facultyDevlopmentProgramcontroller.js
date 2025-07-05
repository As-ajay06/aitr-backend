const facultyDevlopmentProgram = require("../../models/faculty/facultyDevlopmentProgram");

exports.createFacultyDevelopmentProgram = async (req, res) => {
    const program = new facultyDevlopmentProgram(req.body);
    await program.save();
    res.json({
        message: "Faculty Development Program created successfully"
    });
}

exports.getAllFacultyDevelopmentPrograms = async (req, res) => {
    const programs = await facultyDevlopmentProgram.find({});
    res.json({
        programs
    });
}

exports.deleteFacultyDevelopmentProgramById = async (req, res) => {
    const { id } = req.params;
    const programData = await facultyDevlopmentProgram.findByIdAndDelete(id);
    if (!programData) {
        return res.status(404).json({ message: "Faculty Development Program not found" });
    }
    res.json({
        message: "Faculty Development Program deleted successfully"
    });
}

