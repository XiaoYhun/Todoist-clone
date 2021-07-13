import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    priority: { type: Number },
    text: { type: String, required: true },
    date: { type: String, required: true },
    order: { type: Number, required: true },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
