import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";  // ✅ If App.jsx is inside /components
import "./index.css";

// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: true,
  duration: 800,
  offset: 100,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
