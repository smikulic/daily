/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Route, Redirect } from "react-router-dom";
import Sidebar from "./components/sidebar";

const cssMainContainer = css`
  margin-left: 8rem;
  width: 100%;
`;

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={
        ({ location }) =>
          localStorage.getItem("daily__token") || null ? (
            <>
              <Sidebar />
              <div css={cssMainContainer}>{children}</div>
            </>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        // localStorage.getItem("daily__token") || null ? (
        //   <>
        //     <Sidebar />
        //     <div css={cssMainContainer}>{children}</div>
        //   </>
        // ) : (
        //   <Redirect
        //     to={{
        //       pathname: "/login",
        //       state: { from: location },
        //     }}
        //   />
        // )
      }
    />
  );
}
