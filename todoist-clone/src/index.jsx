import React from "react";
import ReactDom from "react-dom";
import App from "App";
import { Provider } from "react-redux";
import store from "./store";
import { fetchTasks } from "slices/tasksSlice";
import { getProjects } from "slices/projectsSlice";
store.dispatch(fetchTasks());
store.dispatch(getProjects());

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
