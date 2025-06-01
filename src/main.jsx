import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";  // ✅ If App.jsx is inside /components
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
