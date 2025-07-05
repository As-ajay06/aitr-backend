const startups = require("../../models/students/startups");

exports.createStartup = async (req, res) => {
    const startupData = new startups(req.body);
    await startupData.save();
    res.json({
        message: "Startup created successfully"
    });
}

exports.getAllStartups = async (req, res) => {
    const startupsData = await startups.find({});
    res.json({
        startupsData
    });
}

exports.deleteStartupById = async (req, res) => {
    const { id } = req.params;
    const startupData = await startups.findByIdAndDelete(id);
    if (!startupData) {
        return res.status(404).json({ message: "Startup not found" });
    }
    res.json({
        message: "Startup deleted successfully"
    });
}
