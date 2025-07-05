const eventGrant = require("../../models/institute/EventGrant");

exports.createEventGrant = async (req, res) => {
    try {
        const eventGrantData = new eventGrant(req.body);
        await eventGrantData.save();
        res.status(201).json({
            message: "Event Grant created successfully",
            eventGrant: eventGrantData
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating Event Grant",
            error: error.message
        });
    }
}

exports.getAllEventGrants = async (req, res) => {
    try {
        const eventGrants = await eventGrant.find({});
        res.status(200).json({
            eventGrants
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching Event Grants",
            error: error.message
        });
    }
}

exports.deleteEventGrantById = async (req, res) => {
    try {
        const { id } = req.params;
        const eventGrantData = await eventGrant.findByIdAndDelete(id);
        if (!eventGrantData) {
            return res.status(404).json({ message: "Event Grant not found" });
        }
        res.status(200).json({
            message: "Event Grant deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting Event Grant",
            error: error.message
        });
    }
}

