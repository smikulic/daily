import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

localStorage.setItem("daily__activity", JSON.stringify([
  {
    time: "Fri, 6 Nov",
    totalHours: 10,
    events: [
      {
        description: "Amount and balance formatter fixes",
        hours: 7.5,
        project: {
          name: "Backoffice",
          rate: 60,
          currency: "EUR",
          client: "solarisBank",
        },
      },
      {
        description: "Initialise app",
        hours: 2.5,
        project: {
          name: "side project",
          rate: 20,
          currency: "EUR",
          client: "Code Well Studio",
        },
      },
    ],
  },
  {
    time: "Thu, 5 Nov",
    totalHours: 8,
    events: [
      {
        description: "Retrospective meeting and pairing",
        hours: 8,
        project: {
          name: "PS5 Interface",
          rate: 90,
          currency: "USD",
          client: "Sony",
        },
      },
    ],
  },
]));

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
