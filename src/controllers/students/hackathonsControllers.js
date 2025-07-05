const hackethon = require("../../models/students/hackathons");

exports.createHackathon = async (req, res) => {
    const hackathon = new hackethon(req.body);
    await hackathon.save();
    res.json({
        message: "Hackathon created successfully"
    });
}

exports.getAllHackathons = async (req, res) => {
    const hackathons = await hackethon.find({});
    res.json({
        hackathons
    });
}

exports.deleteHackathonById = async (req, res) => {
    const { id } = req.params;
    const hackathonData = await hackethon.findByIdAndDelete(id);
    if (!hackathonData) {
        return res.status(404).json({ message: "Hackathon not found" });
    }
    res.json({
        message: "Hackathon deleted successfully"
    });
}