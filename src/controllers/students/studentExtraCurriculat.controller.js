const extraCurricular = require('../../models/students/extraCuricular')

exports.createExtraCurricular = async (req, res) => {
    const extraCurricularData = new extraCurricular(req.body);
    await extraCurricularData.save();
    res.json({
        message: "Extra Curricular activity created successfully"
    });
}

exports.getAllExtraCurriculars = async (req, res) => {
    const extraCurriculars = await extraCurricular.find({});
    res.json({
        extraCurriculars
    });
}   

exports.deleteExtraCurricularById = async (req, res) => {
    const { id } = req.params;
    const extraCurricularData = await extraCurricular.findByIdAndDelete(id);
    if (!extraCurricularData) {
        return res.status(404).json({ message: "Extra Curricular activity not found" });
    }
    res.json({
        message: "Extra Curricular activity deleted successfully"
    });
}
