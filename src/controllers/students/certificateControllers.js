const certificate = require('../../models/students/studentCertification')


exports.createCretificate = async (req, res) => {
    const studentCertificate = new certificate(req.body);
    await studentCertificate.save();
    res.json({
        message: "Certificate created successfully"
    });

}

exports.getAllCertificates = async (req, res) => {
    const certificates = await certificate.find({});
    res.json({
        certificates
    });
}

exports.deleteCertificateById = async (req, res) => {
    const { id } = req.params;
    const certificateData = await certificate.findByIdAndDelete(id);
    if (!certificateData) {
        return res.status(404).json({ message: "Certificate not found" });
    }
    res.json({
        certificate: "deleted successfully"
    });
}