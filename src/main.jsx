import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// React 앱 렌더링만 처리
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);