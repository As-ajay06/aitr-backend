const counsultancyProjects = require("../../models/department/consultancyProjects");

exports.uploadFile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }
        // Assuming you have a File model to save the file details
        const { originalname, mimetype, size, buffer } = req.file;
        const base64Data = buffer.toString("base64");

        const savedFile = new FileModel({
            name: originalname,
            data: base64Data,
            mimetype,
            size,
        });

        await savedFile.save();
        res.json({ message: "File uploaded successfully", fileId: savedFile._id });
        } catch (err) {
        console.error("❌ File Upload Error:", err);
        res.status(500).json({ error: "Failed to upload file" });
        }
    }

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

