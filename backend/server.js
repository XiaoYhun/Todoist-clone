import express from "express";
import mongoose from "mongoose";
import taskRouter from "./routers/taskRouter.js";
import projectRouter from "./routers/projectRouter.js";
import Task from "./models/taskModel.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
mongoose.connect(
    process.env.MONGODB_URL || "mongodb://localhost:27017/todoist",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
);

app.listen(5050, () => {
    console.log("listening on 5050");
});

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.use("/api/tasks", taskRouter);
app.use("/api/projects", projectRouter);
