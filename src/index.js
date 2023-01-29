// import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css"

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

const AppDisplay = <App />;

root.render(AppDisplay);