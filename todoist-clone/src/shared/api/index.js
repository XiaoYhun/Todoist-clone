import axios from "axios";

const baseOrigin = "http://localhost:5050/api";
const taskUrl = `${baseOrigin}/tasks`;
export const getTasks = () => axios.get(taskUrl);
export const createTask = (taskData) => axios.post(taskUrl, taskData);
export const createSubTask = (taskData, parentId) =>
    axios.post(`${taskUrl}/${parentId}/subtask`, taskData);
export const saveTasksOrder = (tasks) =>
    axios.put(`${taskUrl}/updateOrder`, tasks);
export const updateTask = (task) => axios.put(`${taskUrl}/updateTask`, task);
export const deleteTask = (taskId) => axios.delete(`${taskUrl}/${taskId}`);

const projectUrl = `${baseOrigin}/projects`;
export const getProjects = () => axios.get(projectUrl);
export const addProject = (projectData) => axios.post(projectUrl, projectData);
export const updateProject = (projectData) =>
    axios.put(projectUrl, projectData);
