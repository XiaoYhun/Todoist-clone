import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import Project from "components/Project";
const Routes = () => {
    return (
        <Switch>
            <Redirect from="/" exact to="/today" />
            <Route path="/today" component={Project} />
            <Route path="/project/:projectId" component={Project} />
        </Switch>
    );
};
export default Routes;
