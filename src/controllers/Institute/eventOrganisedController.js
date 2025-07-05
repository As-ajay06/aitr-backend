const eventOrganised = require("../../models/institute/EventOrganised");

exports.createEventOrganised = async (req, res) => {
    try {
        const eventOrganisedData = new eventOrganised(req.body);
        await eventOrganisedData.save();
        res.status(201).json({
            message: "Event Organised created successfully",
            eventOrganised: eventOrganisedData
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating Event Organised",
            error: error.message
        });
    }
}

exports.getAllEventOrganised = async (req, res) => {
    try {
        const eventOrganisedList = await eventOrganised.find({});
        res.status(200).json({
            eventOrganised: eventOrganisedList
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching Event Organised",
            error: error.message
        });
    }
}

exports.deleteEventOrganisedById = async (req, res) => {
    try {
        const { id } = req.params;
        const eventOrganisedData = await eventOrganised.findByIdAndDelete(id);
        if (!eventOrganisedData) {
            return res.status(404).json({ message: "Event Organised not found" });
        }
        res.status(200).json({
            message: "Event Organised deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting Event Organised",
            error: error.message
        });
    }
}

