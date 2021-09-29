import {
    createEntityAdapter,
    createAsyncThunk,
    createSlice,
    current,
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
export const updateProject = createAsyncThunk(
    "projects/updateProject",
    async (arg, { rejectWithValue }) => {
        try {
            const res = await api.updateProject(arg);
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
        [updateProject.pending]: (state, { meta: { arg } }) => {
            projectsAdapter.upsertOne(state, arg);
        },
        "tasks/addTask/fulfilled": (state, { payload }) => {
            let project = projectsAdapter
                .getSelectors()
                .selectById(state, payload.project);
            projectsAdapter.updateOne(state, {
                id: project._id,
                changes: {
                    ...project,
                    tasks: [...project.tasks, payload._id],
                },
            });
        },
        "tasks/updateTask/pending": (state, { meta: { arg } }) => {
            let project = projectsAdapter
                .getSelectors()
                .selectAll(state)
                .filter((p) => p.tasks.includes(arg._id))[0];
            if (project && project._id !== arg.project) {
                projectsAdapter.updateOne(state, {
                    id: project._id,
                    changes: {
                        tasks: project.tasks.filter((t) => t !== arg._id),
                    },
                });
                let newProject = projectsAdapter
                    .getSelectors()
                    .selectById(state, arg.project);
                projectsAdapter.updateOne(state, {
                    id: arg.project,
                    changes: { tasks: [...newProject.tasks, arg._id] },
                });
            }
            if (!project && arg.project) {
                let newProject = projectsAdapter
                    .getSelectors()
                    .selectById(state, arg.project);
                projectsAdapter.updateOne(state, {
                    id: arg.project,
                    changes: { tasks: [...newProject.tasks, arg._id] },
                });
            }
        },
    },
});

export default projectsSlice.reducer;
export const projectsSelectors = projectsAdapter.getSelectors(
    (state) => state.projects
);

export const getProject = (state, id) => {
    const project = projectsSelectors.selectById(state, id);
    return project;
};
