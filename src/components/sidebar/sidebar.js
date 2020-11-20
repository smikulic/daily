import logo from "./logo.svg";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={logo} className="logo" alt="logo" />
      <div className="navigation">
        <div className="navigation-item active">Tracker</div>
        <div className="navigation-item">Projects</div>
        <div className="navigation-item">Clients</div>
        <div className="navigation-item">Insight</div>
      </div>
    </div>
  );
}

export default Sidebar;
