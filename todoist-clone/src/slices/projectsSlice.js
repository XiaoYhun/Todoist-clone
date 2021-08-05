import {
    createEntityAdapter,
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";
import * as api from "shared/api";
const projectsAdapter = createEntityAdapter({ selectId: (model) => model._id });

export const addProject = createAsyncThunk(
    "projects/addProject",
    async (arg, { rejectWithValue }) => {
        try {
            const res = await api.addProject(arg);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getProjects = createAsyncThunk(
    "projects/getProjects",
    async (arg, { rejectWithValue }) => {
        try {
            const res = await api.getProjects();
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const projectsSlice = createSlice({
    name: "projects",
    initialState: projectsAdapter.getInitialState({
        status: "idle",
        error: null,
    }),
    extraReducers: {
        [getProjects.fulfilled]: (state, action) => {
            projectsAdapter.setAll(state, action.payload);
        },
        [addProject.fulfilled]: (state, action) => {
            projectsAdapter.upsertOne(state, action.payload);
        },
    },
});

export default projectsSlice.reducer;
export const projectsSelectors = projectsAdapter.getSelectors(
    (state) => state.projects
);
