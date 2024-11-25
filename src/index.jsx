import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/custom.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<BrowserRouter>
    <App />
  </BrowserRouter>

);

reportWebVitals();


