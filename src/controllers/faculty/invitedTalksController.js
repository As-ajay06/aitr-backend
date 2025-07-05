const invitedTalks = require("../../models/faculty/invitedTalks");

exports.createInvitedTalk = async (req, res) => {
    const invitedTalk = new invitedTalks(req.body);
    await invitedTalk.save();
    res.json({
        message: "Invited talk created successfully"
    });
}   

exports.getAllInvitedTalks = async (req, res) => {
    const talks = await invitedTalks.find({});
    res.json({
        talks
    });
}

exports.deleteInvitedTalkById = async (req, res) => {
    const { id } = req.params;
    const talkData = await invitedTalks.findByIdAndDelete(id);
    if (!talkData) {
        return res.status(404).json({ message: "Invited talk not found" });
    }
    res.json({
        message: "Invited talk deleted successfully"
    });
}
