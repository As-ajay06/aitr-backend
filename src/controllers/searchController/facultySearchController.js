const Qalification = require("../../models/faculty/acadmicQualificationDiscipline");
const BooksAuthored = require("../../models/faculty/booksChapterAuthored");
const Awards = require("../../models/faculty/facultyAwardsandRecognisation");
const DevlopmentProgram = require("../../models/faculty/facultyDevlopmentProgram");
const Membership = require("../../models/faculty/memerbershipBodies");
const InvitedTalks = require("../../models/faculty/invitedTalks");
const PatentGuided = require("../../models/faculty/patentGranted");
const PatentPublished = require("../../models/faculty/patentPublished");
const PhdSupervision = require("../../models/faculty/phDSupervision");
const ProfessionalBodies = require("../../models/faculty//memerbershipBodies");
const Certificates = require("../../models/faculty/professionalCertificates");
const Profile = require("../../models/faculty/profile");
const ResearchPaper = require("../../models/faculty/researchPaperPublication");
const ResearchProject = require("../../models/faculty/reasearchProjectGuided");


const SearchController = {
    getInfo: async (req, res) => {

        // given id, get all the data
        const facultyId = req.params.facultyId;
        console.log("this is facultyId" , facultyId)

        try {

            let qualification = await Qalification.findOne({ facultyId })
            let booksAuthored = await BooksAuthored.findOne({ facultyId })
            let awards = await Awards.findOne({ facultyId })
            let facultyDevlopment = await DevlopmentProgram.findOne({ facultyId })
            let memberships = await Membership.findOne({ facultyId })
            let invitedTalks = await InvitedTalks.findOne({ facultyId })
            let patentGuided = await PatentGuided.findOne({ facultyId })
            let patentPublished = await PatentPublished.findOne({ facultyId })
            let phdSupervision = await PhdSupervision.findOne({ facultyId })
            let professionalBodies = await ProfessionalBodies.findOne({ facultyId })
            let certificates = await Certificates.findOne({ facultyId })
            let profile = await Profile.findOne({ facultyId })
            let researchPaper = await ResearchPaper.findOne({ facultyId })
            let researchProjects = await ResearchProject.findOne({ facultyId })

            res.json({
                profile: profile,
                qualification : qualification,
                booksAuthored: booksAuthored,
                awards: awards,
                facultyDevlopment: facultyDevlopment,
                memberships : memberships,
                invitedTalks: invitedTalks,
                patentGuided: patentGuided,
                patentPublished: patentPublished,
                phdSupervision: phdSupervision,
                professionalBodies: professionalBodies,
                certificates: certificates,
                researchPaper: researchPaper,
                researchProjects: researchProjects
            })

        } catch (err) {
            throw err;
        }
    }
}

module.exports = SearchController; 