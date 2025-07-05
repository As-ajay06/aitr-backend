const patentGranted = require("../../models/faculty/patentGranted");

exports.createPatentGranted = async (req, res) => {
    const patent = new patentGranted(req.body);
    await patent.save();
    res.json({
        message: "Patent granted created successfully"
    });
}

exports.getAllPatentsGranted = async (req, res) => {
    const patents = await patentGranted.find({});
    res.json({
        patents
    });
}

exports.deletePatentGrantedById = async (req, res) => {
    const { id } = req.params;
    const patentData = await patentGranted.findByIdAndDelete(id);
    if (!patentData) {
        return res.status(404).json({ message: "Patent granted not found" });
    }
    res.json({
        message: "Patent granted deleted successfully"
    });
}