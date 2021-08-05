import express from "express";
import {
    getProjects,
    createProject,
} from "../controllers/projectController.js";

const projectRouter = express.Router();

//localhost:5050/api/tasks

projectRouter.get("/", getProjects);
projectRouter.post("/", createProject);

export default projectRouter;
