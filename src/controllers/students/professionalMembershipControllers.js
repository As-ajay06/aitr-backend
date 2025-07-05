const membershipCertificate = require("../../models/students/professionalMembership");


exports.createMembershipCertificate = async (req, res) => {
    const membershipCert = new membershipCertificate(req.body);
    await membershipCert.save();
    res.json({
        message: "Membership Certificate created successfully"
    });
}  

exports.getAllMembershipCertificates = async (req, res) => {
    const membershipCertificates = await membershipCertificate.find({});
    res.json({
        membershipCertificates
    });
}

exports.deleteMembershipCertificateById = async (req, res) => {
    const { id } = req.params;
    const membershipCertData = await membershipCertificate.findByIdAndDelete(id);
    if (!membershipCertData) {
        return res.status(404).json({ message: "Membership Certificate not found" });
    }
    res.json({
        message: "Membership Certificate deleted successfully"
    });
}