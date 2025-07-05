const tehnicalController = require("../../models/students/technicalCertification");

exports.createTechnicalNonTechnical = async (req, res) => {
    const technicalData = new tehnicalController(req.body);
    await technicalData.save();
    res.json({
        message: "Technical data created successfully"
    });
}

exports.getTechnicalNonTechnical = async (req, res) => {
    const technicalData = await tehnicalController.find({});
    res.json({
        technicalData
    });
}

exports.deleteTechnicalNonTechnicalById = async (req, res) => {
    const { id } = req.params;
    const technicalData = await tehnicalController.findByIdAndDelete(id);
    if (!technicalData) {
        return res.status(404).json({ message: "Technical data not found" });
    }
    res.json({
        message: "Technical data deleted successfully"
    });
}