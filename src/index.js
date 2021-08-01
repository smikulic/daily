import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloLink,
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import Amplify from "aws-amplify";
import { createAuthLink } from "aws-appsync-auth-link";
import awsconfig from "./aws-exports";
import App from "./App";
import { activityData, projectData } from "./sampleData.js";
import "./index.css";

Amplify.configure(awsconfig);

if (localStorage.getItem("daily__activity") === null) {
  localStorage.setItem("daily__activity", JSON.stringify(activityData));
}
if (localStorage.getItem("daily__projects") === null) {
  localStorage.setItem("daily__projects", JSON.stringify(projectData));
}

const url = awsconfig.aws_appsync_graphqlEndpoint;
const region = awsconfig.aws_appsync_region;
const auth = {
  type: awsconfig.aws_appsync_authenticationType,
  apiKey: awsconfig.aws_appsync_apiKey,
};

const httpLink = new HttpLink({
  uri: url,
  headers: {
    Authorization: localStorage.getItem('CognitoIdentityServiceProvider.b4p03uvdhsqt38hm1n9dbrati.LastAuthUser') || 'gg'
  }
});

const link = ApolloLink.from([createAuthLink({ url, region, auth }), httpLink]);

const client = new ApolloClient({
  link: link,
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
