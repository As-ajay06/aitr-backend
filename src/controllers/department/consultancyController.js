const counsultancyProjects = require("../../models/department/consultancyProjects");

exports.createConsultancyProject = async (req, res) => {
    const consultancyProject = new counsultancyProjects(req.body);
    await consultancyProject.save();
    res.json({
        message: "Consultancy project created successfully"
    });
}

exports.getAllConsultancyProjects = async (req, res) => {
    const projects = await counsultancyProjects.find({});
    res.json({
        projects
    });
}   

exports.deleteConsultancyProjectById = async (req, res) => {
    const { id } = req.params;
    const projectData = await counsultancyProjects.findByIdAndDelete(id);
    if (!projectData) {
        return res.status(404).json({ message: "Consultancy project not found" });
    }
    res.json({
        message: "Consultancy project deleted successfully"
    });
}

