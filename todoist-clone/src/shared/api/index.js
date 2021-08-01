import axios from "axios";

const url = "http://localhost:5050/api/tasks";
export const getTasks = () => axios.get(url);
export const createTask = (taskData) => axios.post(url, taskData);
export const createSubTask = (taskData, parentId) =>
    axios.post(`${url}/${parentId}/subtask`, taskData);
export const saveTasksOrder = (tasks) => axios.put(`${url}/updateOrder`, tasks);
export const updateTask = (task) => axios.put(`${url}/updateTask`, task);
export const deleteTask = (taskId) => axios.delete(`${url}/${taskId}`);
