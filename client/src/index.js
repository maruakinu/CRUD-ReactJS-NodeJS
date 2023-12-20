import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";

const rootDiv = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(rootDiv);

reactRoot.render(
  <Router>
    <App />
  </Router>
);
