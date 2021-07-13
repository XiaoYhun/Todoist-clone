import React from "react";
import ReactDom from "react-dom";
import App from "App";
import { Provider } from "react-redux";
import store from "./store";
import { fetchTasks } from "slices/tasksSlice";

store.dispatch(fetchTasks());

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
