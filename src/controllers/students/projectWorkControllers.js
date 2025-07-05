const projectWork = require("../../models/students/projectWork");

exports.createProjectWork = async (req, res) => {
    const projectWorkData = new projectWork(req.body);
    await projectWorkData.save();
    res.json({
        message: "Project work created successfully"
    });
}

exports.getAllProjectWorks = async (req, res) => {
    const projectWorks = await projectWork.find({});
    res.json({
        projectWorks
    });
}   

exports.deleteProjectWorkById = async (req, res) => {
    const { id } = req.params;
    const projectWorkData = await projectWork.findByIdAndDelete(id);
    if (!projectWorkData) {
        return res.status(404).json({ message: "Project work not found" });
    }
    res.json({
        message: "Project work deleted successfully"
    });
}
