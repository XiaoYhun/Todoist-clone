import Task from "../models/taskModel.js";
import Project from "../models/projectModel.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createTask = async (req, res) => {
    try {
        const task = req.body;
        const test = await Task.findOne().sort("-order").exec();
        task.order = test.order + 1;
        const newTask = new Task(task);

        await newTask.save();
        if (req.params.taskId) {
            Task.findById(req.params.taskId).then((task) => {
                task.children.push(newTask);
                task.save();
            });
        }
        if (newTask.project) {
            Project.findById(newTask.project).then((project) => {
                project.tasks.push(newTask);
                project.save();
            });
        }

        res.status(201).json(newTask);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateOrder = async (req, res) => {
    try {
        const newTaskOrder = req.body;

        newTaskOrder.forEach(async (item) => {
            await Task.updateOne({ _id: item._id }, { order: item.order });
        });

        res.status(200).json("Update done!");
    } catch (error) {
        res.status(404).json(error.message);
    }
};

export const deleteTask = async (req, res) => {
    try {
        let task = await Task.findOne({ _id: req.params.id });
        Task.deleteMany({ _id: { $in: task.children } });
        Task.deleteOne({ _id: req.params.id });
        Task.findOne({ children: req.params.id }).then((task) => {
            if (task) {
                task.children.remove(req.params.id);
                task.save();
            }
        });
        Project.findOne({ tasks: req.params.id }).then((project) => {
            if (project) {
                project.tasks.remove(req.params.id);
                project.save();
            }
        });
        res.status(200).json("Delete done!");
    } catch (error) {
        res.status(404).json(error.message);
    }
};

export const updateTask = async (req, res) => {
    try {
        let task = req.body;
        let oldTask = await Task.findOne({ _id: task._id });
        if (typeof task.priority !== "undefined") {
            oldTask.priority = task.priority;
        }
        if (typeof task.text !== "undefined") {
            oldTask.text = task.text;
        }
        if (typeof task.date !== "undefined") {
            oldTask.date = task.date;
        }
        if (typeof task.order !== "undefined") {
            oldTask.order = task.order;
        }
        if (typeof task.done !== "undefined") {
            oldTask.done = task.done;
        }
        if (oldTask.project && !oldTask.project.equals(task.project)) {
            const project = await Project.findById(task.project);
            if (project) {
                Project.findOne({ _id: oldTask.project }).then((p) => {
                    if (p) {
                        p.tasks.remove(task._id);
                        p.save();
                    }
                });
                project.tasks.push(task._id);
                project.save();
            }
        }
        oldTask.project = task.project;
        await oldTask.save();

        res.status(200).json(oldTask);
    } catch (error) {
        res.status(404).json(error.message);
    }
};
