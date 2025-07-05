const professionalCertificateEarned = require("../../models/faculty/professionalCertificates");

exports.createProfessionalCertificateEarned = async (req, res) => {
    const certificate = new professionalCertificateEarned(req.body);
    await certificate.save();
    res.json({
        message: "Professional Certificate Earned created successfully"
    });
}

exports.getAllProfessionalCertificatesEarned = async (req, res) => {

    const certificates = await professionalCertificateEarned.find({});
    res.json({
        certificates
    });
}

exports.deleteProfessionalCertificateEarnedById = async (req, res) => {
    const { id } = req.params;
    const certificateData = await professionalCertificateEarned.findByIdAndDelete(id);
    if (!certificateData) {
        return res.status(404).json({ message: "Professional Certificate Earned not found" });
    }
    res.json({
        message: "Professional Certificate Earned deleted successfully"
    });
}