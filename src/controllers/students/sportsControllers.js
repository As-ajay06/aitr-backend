const sports = require("../../models/students/sports");

exports.createSports = async (req, res) => {
    const sportsData = new sports(req.body);
    await sportsData.save();
    res.json({
        message: "Sports data created successfully"
    });
}

exports.getAllSports = async (req, res) => {
    const sportsData = await sports.find({});
    res.json({
        sportsData
    });
}

exports.deleteSportsById = async (req, res) => {
    const { id } = req.params;
    const sportsData = await sports.findByIdAndDelete(id);
    if (!sportsData) {
        return res.status(404).json({ message: "Sports data not found" });
    }
    res.json({
        message: "Sports data deleted successfully"
    });
}
