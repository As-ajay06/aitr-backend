const FacultyMembership = require("../../models/faculty/memerbershipBodies")


// const { createAllFacultyMembership , getAllFacultyMembership, deleteFacultyMembership }  

exports.createFacultyMembership = async (req, res) => {
    try {
        const facultyMembership = new FacultyAwardsRecognition(req.body);
        await facultyMembership.save();
        res.status(201).json({
            message: "Faculty award/recognition created successfully",
            data: facultyMembership
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating faculty award/recognition",
            error: error.message
        });
    }
}


exports.getAllFacultyMembership = async(req, res) => {
    try {
            const facultyMembership = await FacultyMembership.find({});
            if (!facultyMembership) {
                return res.status(404).json({ message: "Faculty award/recognition not found" });
            }
            res.status(200).json({
                message: "Faculty award/recognition",
                facultyMembershipData: facultyMembership
            });
        } catch (error) {
            res.status(500).json({
                message: "Error deleting faculty award/recognition",
                error: error.message
            });
        }
    }   



exports.deleteFacultyMembership = async(req, res) => {
try {
        const { id } = req.params;
        const facultyMembership = await FacultyMembership.findByIdAndDelete(id);
        if (!facultyMembership) {
            return res.status(404).json({ message: "Faculty award/recognition not found" });
        }
        res.status(200).json({
            message: "Faculty award/recognition deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting faculty award/recognition",
            error: error.message
        });
    }
}   