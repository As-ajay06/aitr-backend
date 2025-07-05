const placementId = require('../../models/students/placement');

exports.createPlacement = async (req, res) => {
    const placementData = new placementId(req.body);
    await placementData.save();
    res.json({
        message: "Data created successfully"
    });
}

exports.getAllPlacements = async (req, res) => {
    const placements = await placementId.find({});
    res.json({
        placements
    });
}   

exports.deletePlacementById = async (req, res) => {
    const { id } = req.params;
    const placementData = await placementId.findByIdAndDelete(id);
    if (!placementData) {
        return res.status(404).json({ message: " data not found" });
    }
    res.json({
        message: " data deleted successfully"
    });
}
