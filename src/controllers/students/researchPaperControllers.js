const researchPaper = require("../../models/students/researchPaper");

exports.createResearchPaper = async (req, res) => {
    const researchPaperData = new researchPaper(req.body);
    await researchPaperData.save();
    res.json({
        message: "Research paper created successfully"
    });
}   

exports.getAllResearchPapers = async (req, res) => {
    const researchPapers = await researchPaper.find({});
    res.json({
        researchPapers
    });
}

exports.deleteResearchPaperById = async (req, res) => {
    const { id } = req.params;
    const researchPaperData = await researchPaper.findByIdAndDelete(id);
    if (!researchPaperData) {
        return res.status(404).json({ message: "Research paper not found" });
    }
    res.json({
        message: "Research paper deleted successfully"
    });
}

