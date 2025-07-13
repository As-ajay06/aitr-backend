const acadmicQualification = require("../../models/faculty/acadmicQualificationDiscipline");

exports.createAcademicQualification = async (req, res) => {
    const qualification = new acadmicQualification(req.body);
    await qualification.save();
    res.json({
        message: "Academic qualification created successfully"
    });
}

exports.getAllAcademicQualifications = async (req, res) => {
    const qualifications = await acadmicQualification.find({});
    res.json({
        qualifications
    });
}

exports.deleteAcademicQualificationById = async (req, res) => {
    const { id } = req.params;
    const qualificationData = await acadmicQualification.findByIdAndDelete(id);
    if (!qualificationData) {
        return res.status(404).json({ message: "Academic qualification not found" });
    }
    res.json({
        message: "Academic qualification deleted successfully"
    });
}

exports.addExelData = async(req, res) => {
      try {
        const jsonData = req.body.data;
        const qualification = new acadmicQualification(jsonData);
        await qualification.save();
        res.status(200).send({ message: 'Data saved to MongoDB!' });
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
      }
}
