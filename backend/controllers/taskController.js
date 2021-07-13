import Task from "../models/taskModel.js";

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
        console.log(newTask);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log(error.message);
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
        const a = await Task.deleteOne({ _id: req.params.id });
        res.status(200).json("Delete done!");
    } catch (error) {}
};

export const updateTask = async (req, res) => {
    try {
        let task = req.body;
        console.log(task);
        task = await Task.updateOne({ _id: task._id }, { ...task });

        res.status(200).json(task);
    } catch (error) {
        res.status(404).json(error.message);
    }
};
