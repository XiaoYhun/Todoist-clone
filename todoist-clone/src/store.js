import taskReducer from "./slices/tasksSlice";
import projectReducer from "./slices/projectsSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: { tasks: taskReducer, projects: projectReducer },
    devTools: true,
});
export default store;
