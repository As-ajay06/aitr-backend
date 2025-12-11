const facultyProfile = require("../../models/faculty/profile");

exports.createFacultyProfile = async (req, res) => {

    console.log("i am this user", res.user)
    const profile = new facultyProfile(req.body);
    await profile.save();
    res.json({
        message: "Faculty profile created successfully"
    });
}

exports.getAllFacultyProfiles = async (req, res) => {

    const user = req.user;
    // user = { id: objectId , role: 'superadmin' }

    // if(user.role == 'superadmin'){
        const profiles = await facultyProfile.find({});
        res.json({
            profiles
        });
    // }

    res.json({
        message: 'you are not authorized to access the content'
    })
}

exports.deleteFacultyProfileById = async (req, res) => {
    const { id } = req.params;
    const profile = await facultyProfile.findByIdAndDelete(id);
    if (!profile) {
        return res.status(404).json({ message: "Faculty profile not found" });
    }
    res.json({
        message: "Faculty profile deleted successfully"
    });
}

