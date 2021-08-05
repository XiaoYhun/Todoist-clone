import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    priority: { type: Number },
    text: { type: String, required: true },
    date: { type: String },
    order: { type: Number, required: true },
    done: { type: Boolean, default: false },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    children: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
