const mous = require("../../models/department/Mous");

exports.createMou = async (req, res) => {
    const mou = new mous(req.body);
    await mou.save();
    res.json({
        message: "MOU created successfully"
    });
}

exports.getAllMous = async (req, res) => {
    const mousList = await mous.find({});
    res.json({
        mous: mousList
    });
}

exports.deleteMouById = async (req, res) => {
    const { id } = req.params;
    const mouData = await mous.findByIdAndDelete(id);
    if (!mouData) {
        return res.status(404).json({ message: "MOU not found" });
    }
    res.json({
        message: "MOU deleted successfully"
    });
}   
