import express from "express";
import {
    getTasks,
    createTask,
    updateOrder,
    deleteTask,
    updateTask,
} from "../controllers/taskController.js";

const taskRouter = express.Router();

//localhost:5050/api/tasks

taskRouter.get("/", getTasks);
taskRouter.post("/", createTask);
taskRouter.post("/:taskId/subtask", createTask);
taskRouter.put("/updateOrder", updateOrder);
taskRouter.put("/updateTask", updateTask);
taskRouter.delete("/:id", deleteTask);
export default taskRouter;
