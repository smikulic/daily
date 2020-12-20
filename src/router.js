import { Route, Redirect } from "react-router-dom";
import Sidebar from "./components/sidebar";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("daily__token") || null ? (
          <>
            <Sidebar />
            {children}
          </>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
