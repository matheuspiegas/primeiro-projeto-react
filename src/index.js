import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global-styles.css";
import { Home } from "./components/templates/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home skip={2}/>
  </React.StrictMode>
);
