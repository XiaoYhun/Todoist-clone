import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from "@reduxjs/toolkit";
import * as api from "shared/api";

const tasksAdapter = createEntityAdapter({
    selectId: (model) => model._id,
    sortComparer: (a, b) => a.order - b.order,
});

export const fetchTasks = createAsyncThunk(
    "tasks/fetchTasks",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await api.getTasks();
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const saveTasksOrder = createAsyncThunk(
    "tasks/saveTasksOrder",
    async (tasks, { rejectWithValue }) => {
        try {
            const response = await api.saveTasksOrder(
                tasks.map((item) => {
                    return { _id: item._id, order: item.order };
                })
            );

            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const deleteTask = createAsyncThunk(
    "tasks/deleteTask",
    async (id, { rejectWithValue }) => {
        try {
            const res = await api.deleteTask(id);
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addTask = createAsyncThunk(
    "tasks/addTask",
    async (task, { rejectWithValue }) => {
        try {
            const res = await api.createTask(task);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateTask = createAsyncThunk(
    "tasks/updateTask",
    async (task, { rejectWithValue }) => {
        try {
            const res = await api.updateTask(task);
            return task;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const taskSlice = createSlice({
    name: "tasks",
    initialState: tasksAdapter.getInitialState({
        status: "idle",
        error: null,
    }),
    reducers: {
        updateTasksOrder: tasksAdapter.upsertMany,
    },
    extraReducers: {
        [fetchTasks.fulfilled]: (state, action) => {
            tasksAdapter.setAll(state, action.payload);
        },
        [deleteTask.fulfilled]: (state, { payload }) => {
            tasksAdapter.removeOne(state, payload);
        },
        [addTask.fulfilled]: (state, { payload }) => {
            tasksAdapter.upsertOne(state, payload);
        },
        [updateTask.pending]: (state, { meta: { arg } }) => {
            tasksAdapter.upsertOne(state, arg);
        },
    },
});
export const { updateTasksOrder } = taskSlice.actions;
export default taskSlice.reducer;

export const tasksSelectors = tasksAdapter.getSelectors((state) => state.tasks);
