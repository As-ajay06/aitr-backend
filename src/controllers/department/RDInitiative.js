const RDInitiative = require("../../models/department/RDInitiatives");

exports.createRDInitiative = async (req, res) => {
    try {
        const rdInitiative = new RDInitiative(req.body);
        await rdInitiative.save();
        res.status(201).json({
            message: "R&D Initiative created successfully",
            rdInitiative
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating R&D Initiative",
            error: error.message
        });
    }
}

exports.getAllRDInitiatives = async (req, res) => {
    try {
        const rdInitiatives = await RDInitiative.find({});
        res.status(200).json({
            rdInitiatives
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching R&D Initiatives",
            error: error.message
        });
    }
}   

exports.deleteRDInitiativeById = async (req, res) => {
    try {
        const { id } = req.params;
        const rdInitiativeData = await RDInitiative.findByIdAndDelete(id);
        if (!rdInitiativeData) {
            return res.status(404).json({ message: "R&D Initiative not found" });
        }
        res.status(200).json({
            message: "R&D Initiative deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting R&D Initiative",
            error: error.message
        });
    }
}   

