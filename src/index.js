import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ScubaProvider } from "./context";

ReactDOM.render(
  <ScubaProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ScubaProvider>,
  document.getElementById("root")
);

reportWebVitals();
