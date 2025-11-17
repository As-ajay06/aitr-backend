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

        try {

            let qualification = await Qalification.findOne({ facultyId: facultyId })
            let booksAuthored = await BooksAuthored.findOne({ facultyId: facultyId })
            let awards = await Awards.findOne({ facultyId: facultyId })
            let facultyDevlopment = await DevlopmentProgram.findOne({ facultyId: facultyId })
            let memberships = await Membership.findOne({ facultyId: facultyId })
            let invitedTalks = await InvitedTalks.findOne({ facultyId: facultyId })
            let patentGuided = await PatentGuided.findOne({ facultyId: facultyId })
            let patentPublished = await PatentPublished.findOne({ facultyId: facultyId })
            let phdSupervision = await PhdSupervision.findOne({ facultyId: facultyId })
            let professionalBodies = await ProfessionalBodies.findOne({ facultyId: facultyId })
            let certificates = await Certificates.findOne({ facultyId: facultyId })
            let profile = await Profile.findOne({ facultyId: facultyId })
            let researchPaper = await ResearchPaper.findOne({ facultyId: facultyId })
            let researchProjects = await ResearchProject.findOne({ facultyId: facultyId })

            res.json({
                profile: profile,
                qualification : qualification,
                booksAuthored: booksAuthored,
                awards: awards,
                facultyDevlopment: facultyDevlopment,
                memberships : memberships,
                invitedTalks: invitedTalks,
                patentGuided: patentGuided,
                patentPublished: PatentPublished,
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