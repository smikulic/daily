import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloLink,
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  concat,
} from "@apollo/client";
import App from "./App";
import { activityData, projectData } from "./sampleData.js";
import Amplify from 'aws-amplify';
import config from './aws-exports';
import "./index.css";

Amplify.configure(config);

if (localStorage.getItem("daily__activity") === null) {
  localStorage.setItem("daily__activity", JSON.stringify(activityData));
}
if (localStorage.getItem("daily__projects") === null) {
  localStorage.setItem("daily__projects", JSON.stringify(projectData));
}

const httpLink = new HttpLink({
  uri: "http://localhost:4000",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("daily__token") || null}`,
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
