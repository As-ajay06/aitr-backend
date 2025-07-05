const reasearchProject = require('../../models/faculty/reasearchProjectGuided');

exports.createResearchProjectGuided = async (req, res) => {
    const researchProjectGuided = new reasearchProject(req.body);
    await researchProjectGuided.save();
    res.json({
        message: 'Research project guided created successfully'
    });
}

exports.getAllResearchProjectsGuided = async (req, res) => {
    const researchProjects = await reasearchProject.find({});
    res.json({
        researchProjects
    });
}

exports.deleteResearchProjectGuidedById = async (req, res) => {
    const { id } = req.params;
    const researchProjectData = await reasearchProject.findByIdAndDelete(id);
    if (!researchProjectData) {
        return res.status(404).json({ message: 'Research project guided not found' });
    }
    res.json({
        message: 'Research project guided deleted successfully'
    });
}
