import Project from "../models/projectModel.js";
export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
export const createProject = async (req, res) => {
    try {
        const project = req.body;
        const newProject = new Project(project);
        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
export const updateProject = async (req, res) => {
    try {
        let project = req.body;
        let oldProject = await Project.findOne({ _id: project._id });
        console.log(project);
        if (typeof project.name !== "undefined") {
            oldProject.name = project.name;
        }
        if (typeof project.color !== "undefined") {
            oldProject.color = project.color;
        }
        await oldProject.save();
        res.status(200).json(oldProject);
    } catch (error) {
        res.status(404).json(error.message);
    }
};
export const deleteProject = async (req, res) => {
    let project = await Project.findOne({ _id: req.params.id });
};
