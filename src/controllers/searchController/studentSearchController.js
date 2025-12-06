


// models

const Certificates = require("../../models/students/studentCertification")
const Hackathon = require("../../models/students/hackathons")
const HigherStudies = require("../../models/students/higherStudies")
const Internship = require("../../models/students/internship")
const Placement = require("../../models/students/placement")
const Membership = require("../../models/students/professionalMembership")
const ProjectWork = require("../../models/students/projectWork")
const ResearchPaper = require("../../models/students/researchPaper")
const Sports = require("../../models/students/sports")
const Startups = require("../../models/students/startups")
const ExtraCurricular = require("../../models/students/extraCuricular")
const Profile = require("../../models/students/studentProfile")
const TechnicalNonTechinal = require("../../models/students/technicalCertification")


const studentSearchController = {
    getInfo: async (req, res) => {
        let studentId = req.params.studentId;

        let certificates = await Certificates.findOne({ studentId })
        let hackathons = await Hackathon.findOne({ studentId })
        let higherStudies = await HigherStudies.findOne({ studentId })
        let internship = await Internship.findOne({ studentId })
        let placement = await Placement.findOne({ studentId })
        let membership = await Membership.findOne({ studentId })
        let projectWork = await ProjectWork.findOne({ studentId })
        let researchPaper = await ResearchPaper.findOne({ studentId })
        let sports = await Sports.findOne({ studentId })
        let startups = await Startups.findOne({ studentId })
        let extraCurricular = await ExtraCurricular.findOne({ studentId })
        let profile = await Profile.findOne({ _id:studentId })
        let techicalNontechnical = await TechnicalNonTechinal.findOne({ studentId })

        res.json({
            profile: profile,
            certificates: certificates,
            higherStudies: higherStudies,
            hackathons: hackathons,
            internship: internship,
            placement: placement,
            membership: membership,
            projectWork: projectWork,
            researchPaper: researchPaper,
            sports: sports,
            startups: startups,
            extraCurricular: extraCurricular,
            profile: profile,
            techicalNontechnical: techicalNontechnical
        })
    }
}

module.exports = studentSearchController ;