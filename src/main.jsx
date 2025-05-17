// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
if (window.Kakao && !window.Kakao.isInitialized()) {
  window.Kakao.init("79c34c7b328cdbd4b3565f3034a8d7b9");
  console.log("Kakao SDK initialized");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
