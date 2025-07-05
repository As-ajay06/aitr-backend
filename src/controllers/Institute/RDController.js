const RD = require("../../models/institute/RD");

exports.createRD = async (req, res) => {
    try {
        const rdData = new RD(req.body);
        await rdData.save();
        res.status(201).json({
            message: "Research and Development record created successfully",
            rd: rdData
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating Research and Development record",
            error: error.message
        });
    }
}

exports.getAllRDs = async (req, res) => {
    try {
        const rds = await RD.find({});
        res.status(200).json({
            rds
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching Research and Development records",
            error: error.message
        });
    }
}

exports.deleteRDById = async (req, res) => {
    try {
        const { id } = req.params;
        const rdData = await RD.findByIdAndDelete(id);
        if (!rdData) {
            return res.status(404).json({ message: "Research and Development record not found" });
        }
        res.status(200).json({
            message: "Research and Development record deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting Research and Development record",
            error: error.message
        });
    }
}

