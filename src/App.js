/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignIn,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { PrivateRoute } from "./router";
// import LoginPageContainer from "./containers/login-page-container";
import TrackerPageContainer from "./containers/tracker-page-container";
import ClientPageContainer from "./containers/client-page-container";

export default function App() {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  console.log(user)

  return authState === AuthState.SignedIn && user ? (
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
          {/* <Route exact path="/login">
            <LoginPageContainer />
          </Route> */}
          <PrivateRoute exact path="/">
            <TrackerPageContainer />
          </PrivateRoute>
          <PrivateRoute exact path="/clients">
            <ClientPageContainer user={user} />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[{ type: "email" }, { type: "password" }]}
      />
      <AmplifySignIn slot="sign-in" usernameAlias="email" />
    </AmplifyAuthenticator>
  );
}
