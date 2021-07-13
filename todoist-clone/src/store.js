import taskReducer from "./slices/tasksSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: { tasks: taskReducer },
    devTools: true,
});
export default store;
