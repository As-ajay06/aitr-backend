const studenProfile = require('../../models/students/studentProfile')

exports.createStudentProfile = async (req, res) => {

    const profile = new studenProfile(req.body);
    await profile.save();
    res.json({
        meg: "created profile"
    })
}

exports.getAllStudentProfiles = async (req, res) => {
    // Use dataFilter from roleBasedDataFilter middleware
    // Superadmin: {} (all data), Faculty: { createdBy: facultyId }
    const filter = req.dataFilter || {};
    const profiles = await studenProfile.find(filter);
    res.json({
        profiles
    })
}

exports.deleteStudentProfile = async (req, res) => {
    const { id } = req.params;
    console.log("deleting this id : ", id)
    const profile = await studenProfile.findById(id);
    if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
    }

    await profile.deleteOne({ _id: id });
    res.json({
        "message": "succesfully deleted !"
    })
}


exports.updateStudentProfile = async (req, res) => {
    const { id } = req.params;
    console.log("i am editing ", id)
    try {
        const profile = await studenProfile.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }
        res.json({
            message: "Profile updated successfully!",
            profile
        });
    } catch (err) {
        res.status(500).json({ message: err.message || "Failed to update profile" });
    }
}