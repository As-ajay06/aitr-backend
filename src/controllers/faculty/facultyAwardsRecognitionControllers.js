const FacultyAwardsRecognition = require("../../models/faculty/facultyAwardsandRecognisation");



exports.createFacultyAwardRecognition = async (req, res) => {
    try {
        const facultyAwardRecognition = new FacultyAwardsRecognition(req.body);
        await facultyAwardRecognition.save();
        res.status(201).json({
            message: "Faculty award/recognition created successfully",
            data: facultyAwardRecognition
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating faculty award/recognition",
            error: error.message
        });
    }
}

exports.getAllFacultyAwardsRecognitions = async (req, res) => {
    try {
        const facultyAwardsRecognitions = await FacultyAwardsRecognition.find({});
        res.status(200).json({
            data: facultyAwardsRecognitions
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching faculty awards/recognitions",
            error: error.message
        });
    }
}

exports.deleteFacultyAwardRecognitionById = async (req, res) => {
    try {
        const { id } = req.params;
        const facultyAwardRecognition = await FacultyAwardsRecognition.findByIdAndDelete(id);
        if (!facultyAwardRecognition) {
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

