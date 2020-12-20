/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./router";
import TrackerPageContainer from "./containers/tracker-page-container";
import LoginPageContainer from "./containers/login-page-container";
import ProjectPage from "./pages/project-page";

export default function App() {
  return (
    <Router>
      <div
        css={css`
          display: flex;
        `}
      >
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/login">
            <LoginPageContainer />
          </Route>
          <PrivateRoute exact path="/">
            <TrackerPageContainer />
          </PrivateRoute>
          <Route path="/projects">
            <ProjectPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
