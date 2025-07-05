const consultancy = require("../../models/institute/Consultancy");

exports.createConsultancy = async (req, res) => {
    try {
        const consultancyData = new consultancy(req.body);
        await consultancyData.save();
        res.status(201).json({
            message: "Consultancy created successfully",
            consultancy: consultancyData
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating consultancy",
            error: error.message
        });
    }
}

exports.getAllConsultancies = async (req, res) => {
    try {
        const consultancies = await consultancy.find({});
        res.status(200).json({
            consultancies
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching consultancies",
            error: error.message
        });
    }
}

exports.deleteConsultancyById = async (req, res) => {
    try {
        const { id } = req.params;
        const consultancyData = await consultancy.findByIdAndDelete(id);
        if (!consultancyData) {
            return res.status(404).json({ message: "Consultancy not found" });
        }
        res.status(200).json({
            message: "Consultancy deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting consultancy",
            error: error.message
        });
    }
}