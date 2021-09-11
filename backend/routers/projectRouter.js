import express from "express";
import {
    getProjects,
    createProject,
} from "../controllers/projectController.js";
import Project from "../models/projectModel.js";
const projectRouter = express.Router();

//localhost:5050/api/tasks

projectRouter.get("/", getProjects);
projectRouter.post("/", createProject);

projectRouter.param("project", (req, res, next, id) => {
    Project.findOne({ _id: id })
        .then((project) => {
            if (!project) {
                return res.sendStatus(404);
            }
            req.project = project;
            return next();
        })
        .catch(next);
});
export default projectRouter;
