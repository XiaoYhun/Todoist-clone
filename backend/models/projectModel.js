import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
    favorites: { type: Boolean, default: false },
});

const Project = mongoose.model("Project", projectSchema);
export default Project;
