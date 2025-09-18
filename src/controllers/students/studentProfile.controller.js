const studenProfile = require('../../models/students/studentProfile')

exports.createStudentProfile = async(req, res) => {
    const profile = new studenProfile(req.body);
    await profile.save();
    res.json({
        meg: "created profile"
    })
}

exports.getAllStudentProfiles = async(req, res) => {
    const profiles = await studenProfile.find({});
    res.json({
        profiles
    })
}

exports.deleteStudentProfile = async(req, res) => {
    const {id} = req.params;
    const profile = await studenProfile.findById(id);
    if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
    }
    res.json({
        "message": "succesfully deleted !"
    })
}