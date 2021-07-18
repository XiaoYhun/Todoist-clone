import React, { createContext } from "react";
import { ProjectWrapper } from "./Styles";
import Header from "./Header";
import ProjectContent from "./ProjectContent";
import AddTaskSection from "./AddTaskSection";
import { useSelector } from "react-redux";
import { tasksSelectors } from "slices/tasksSlice";
import { Route, useRouteMatch, useHistory } from "react-router-dom";
import TaskDetailModal from "components/TaskDetailModal";
function Project(props) {
    const tasks = useSelector(tasksSelectors.selectAll);
    const match = useRouteMatch();
    const history = useHistory();

    return (
        <ProjectWrapper>
            <Header></Header> {/* Done */}
            <ProjectContent tasksList={tasks}></ProjectContent>
            <AddTaskSection />
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
