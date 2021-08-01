/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { cssColorPurple, cssFlexColumn } from "../../style/patterns";
import logo from "./logo.svg";

const cssColorBeige = "rgba(253, 229, 220, 1)";
const cssColorBeigeLight = "rgba(253, 229, 220, 0.5)";
const cssNavigation = css`
  ${cssFlexColumn};
  margin-top: 1rem;
  flex-grow: 1;
`;
const cssNavigationItem = (active) => css`
  display: flex;
  padding: 0.25rem 0.75rem;
  color: ${active ? cssColorBeige : cssColorBeigeLight};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${cssColorBeige};
  }
`;

function Sidebar() {
  const location = useLocation();
  let history = useHistory();
  return (
    <div
      css={css`
        ${cssFlexColumn};
        position: fixed;
        align-items: center;
        padding: 1rem 0;
        height: 100vh;
        width: 8rem;
        background-color: ${cssColorPurple};
      `}
    >
      <img
        src={logo}
        css={css`
          height: 2rem;
        `}
        alt="logo"
      />
      <div css={cssNavigation}>
        <Link to="/" css={cssNavigationItem(location.pathname === "/")}>
          Tracker
        </Link>

        <Link
          to="/clients"
          css={cssNavigationItem(location.pathname === "/clients")}
        >
          Clients
        </Link>

        {/* <div className="navigation-item"><Link to="/insight">Insight</Link></div> */}
      </div>
      <div
        css={cssNavigationItem()}
        onClick={() => {
          localStorage.removeItem("daily__token");
          history.push("/");
        }}
      >
        Log Out
      </div>
    </div>
  );
}

export default Sidebar;
