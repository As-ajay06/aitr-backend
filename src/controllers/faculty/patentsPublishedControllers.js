const patentsPublished = require("../../models/faculty/patentPublished");

exports.createPatentPublished = async (req, res) => {
    const patent = new patentsPublished(req.body);
    await patent.save();
    res.json({
        message: "Patent published created successfully"
    });
}

exports.getAllPatentsPublished = async (req, res) => {
    const patents = await patentsPublished.find({});
    res.json({
        patents
    });
}

exports.deletePatentPublishedById = async (req, res) => {
    const { id } = req.params;
    const patentData = await patentsPublished.findByIdAndDelete(id);
    if (!patentData) {
        return res.status(404).json({ message: "Patent published not found" });
    }
    res.json({
        message: "Patent published deleted successfully"
    });
}
