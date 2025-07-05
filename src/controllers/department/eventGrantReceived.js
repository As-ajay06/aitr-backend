const eventGrantReceived = require("../../models/department/eventGrantReceived");

exports.createEventGrantReceived = async (req, res) => {
    const eventGrant = new eventGrantReceived(req.body);
    await eventGrant.save();
    res.json({
        message: "Event grant received created successfully"
    });
}

exports.getAllEventGrantsReceived = async (req, res) => {
    const eventGrants = await eventGrantReceived.find({});
    res.json({
        eventGrants
    });
}   

exports.deleteEventGrantReceivedById = async (req, res) => {
    const { id } = req.params;
    const eventGrantData = await eventGrantReceived.findByIdAndDelete(id);
    if (!eventGrantData) {
        return res.status(404).json({ message: "Event grant received not found" });
    }
    res.json({
        message: "Event grant received deleted successfully"
    });
}   

