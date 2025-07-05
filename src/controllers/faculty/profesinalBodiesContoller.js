const professionalBodiesCeritificate = require("../../models/faculty/professionalCertificates");

exports.createProfessionalBodiesCertificate = async (req, res) => {
    const certificate = new professionalBodiesCeritificate(req.body);
    await certificate.save();
    res.json({
        message: "Professional Bodies Certificate created successfully"
    });
}

exports.getAllProfessionalBodiesCertificates = async (req, res) => {
    const certificates = await professionalBodiesCeritificate.find({});
    res.json({
        certificates
    });
}

exports.deleteProfessionalBodiesCertificateById = async (req, res) => {
    const { id } = req.params;
    const certificateData = await professionalBodiesCeritificate.findByIdAndDelete(id);
    if (!certificateData) {
        return res.status(404).json({ message: "Professional Bodies Certificate not found" });
    }
    res.json({
        message: "Professional Bodies Certificate deleted successfully"
    });
}