const higherStudies = require("../../models/students/higherStudies");

exports.createHigherStudies = async (req, res) => {
    const higherStudiesData = new higherStudies(req.body);
    await higherStudiesData.save();
    res.json({
        message: "Data saved successfully"
    });
}

exports.getAllHigherStudies = async (req, res) => {
    const higherStudiesData = await higherStudies.find({});
    res.json({
        higherStudies: higherStudiesData
    });
}

exports.deleteHigherStudiesById = async (req, res) => {
    const { id } = req.params;
    const higherStudiesData = await higherStudies.findByIdAndDelete(id);
    if (!higherStudiesData) {
        return res.status(404).json({ message: "Higher Studies data not found" });
    }
    res.json({
        message: "Higher Studies data deleted successfully"
    });
}