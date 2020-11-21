import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { activityData, projectData } from "./sampleData.js";

if (localStorage.getItem("daily__activity") === null) {
  localStorage.setItem("daily__activity", JSON.stringify(activityData));
}
if (localStorage.getItem("daily__projects") === null) {
  localStorage.setItem("daily__projects", JSON.stringify(projectData));
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
