const mou = require("../../models/institute/Mou");

exports.createMou = async (req, res) => {
    try {
        const mouData = new mou(req.body);
        await mouData.save();
        res.status(201).json({
            message: "MOU created successfully",
            mou: mouData
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating MOU",
            error: error.message
        });
    }
}

exports.getAllMous = async (req, res) => {
    try {
        const mous = await mou.find({});
        res.status(200).json({
            mous
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching MOUs",
            error: error.message
        });
    }
}

exports.deleteMouById = async (req, res) => {
    try {
        const { id } = req.params;
        const mouData = await mou.findByIdAndDelete(id);
        if (!mouData) {
            return res.status(404).json({ message: "MOU not found" });
        }
        res.status(200).json({
            message: "MOU deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting MOU",
            error: error.message
        });
    }
}

