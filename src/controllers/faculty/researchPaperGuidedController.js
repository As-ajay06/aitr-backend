const researchPaper = require("../../models/faculty/researchPaperPublication");

exports.createResearchPaper = async (req, res) => {
    const paper = new researchPaper(req.body);
    await paper.save();
    res.json({
        message: "Research paper created successfully"
    });
}   

exports.getAllResearchPapers = async (req, res) => {
    const papers = await researchPaper.find({});
    res.json({
        papers
    });
}

exports.deleteResearchPaperById = async (req, res) => {
    const { id } = req.params;
    const paperData = await researchPaper.findByIdAndDelete(id);
    if (!paperData) {
        return res.status(404).json({ message: "Research paper not found" });
    }
    res.json({
        message: "Research paper deleted successfully"
    });
}   

