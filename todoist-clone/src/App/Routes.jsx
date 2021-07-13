import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import Project from "components/Project";
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect from="/" exact to="/project" />
                <Route path="/project" component={Project} />
            </Switch>
        </BrowserRouter>
    );
};
export default Routes;
