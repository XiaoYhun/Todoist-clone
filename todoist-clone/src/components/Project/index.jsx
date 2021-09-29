import React from "react";
import { ProjectWrapper } from "./Styles";
import Header from "./Header";
import ProjectContent from "./ProjectContent";
import AddTaskSection from "./AddTaskSection";
import { useSelector, useDispatch } from "react-redux";
import { getOverdueTasks, getTodayTasks } from "slices/tasksSlice";
import { projectsSelectors } from "slices/projectsSlice";
import { Route, useRouteMatch, useHistory } from "react-router-dom";
import TaskDetailModal from "components/TaskDetailModal";
function Project(props) {
    const overdueTasks = useSelector(getOverdueTasks);
    const todayTasks = useSelector(getTodayTasks);

    const match = useRouteMatch();
    const history = useHistory();
    const isToday = !match.params.projectId;
    const project = useSelector((state) =>
        projectsSelectors.selectById(state, match.params.projectId)
    );

    return (
        <ProjectWrapper>
            <Header project={project}></Header>

            <ProjectContent
                project={project}
                isToday={isToday}
                overdueTasks={overdueTasks}
                todayTasks={todayTasks}
            ></ProjectContent>

            <Route
                path={`${match.path}/task/:id`}
                render={(routeProps) => {
                    return (
                        <TaskDetailModal
                            isOpen={true}
                            taskId={routeProps.match.params.id}
                            onClose={() => history.push(match.url)}
                        ></TaskDetailModal>
                    );
                }}
            />
        </ProjectWrapper>
    );
}

Project.propTypes = {};

export default Project;
