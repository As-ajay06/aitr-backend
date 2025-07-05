const PhdSupervision = require("../../models/faculty/phDSupervision");

exports.createPhdSupervision = async (req, res) => {
    const phdSupervision = new PhdSupervision(req.body);
    await phdSupervision.save();
    res.json({
        message: "PhD supervision created successfully"
    });
}

exports.getAllPhdSupervisions = async (req, res) => {
    const supervisions = await PhdSupervision.find({});
    res.json({
        supervisions
    });
}

exports.deletePhdSupervisionById = async (req, res) => {
    const { id } = req.params;
    const supervisionData = await PhdSupervision.findByIdAndDelete(id);
    if (!supervisionData) {
        return res.status(404).json({ message: "PhD supervision not found" });
    }
    res.json({
        message: "PhD supervision deleted successfully"
    });
}