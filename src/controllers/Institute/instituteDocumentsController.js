const instituteDocuments = require("../../models/institute/InstituteDocuments");

exports.createInstituteDocument = async (req, res) => {
    try {
        const instituteDocumentData = new instituteDocuments(req.body);
        await instituteDocumentData.save();
        res.status(201).json({
            message: "Institute Document created successfully",
            instituteDocument: instituteDocumentData
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating Institute Document",
            error: error.message
        });
    }
}

exports.getAllInstituteDocuments = async (req, res) => {
    try {
        const instituteDocumentsList = await instituteDocuments.find({});
        res.status(200).json({
            instituteDocuments: instituteDocumentsList
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching Institute Documents",
            error: error.message
        });
    }
}

exports.deleteInstituteDocumentById = async (req, res) => {
    try {
        const { id } = req.params;
        const instituteDocumentData = await instituteDocuments.findByIdAndDelete(id);
        if (!instituteDocumentData) {
            return res.status(404).json({ message: "Institute Document not found" });
        }
        res.status(200).json({
            message: "Institute Document deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting Institute Document",
            error: error.message
        });
    }
}

