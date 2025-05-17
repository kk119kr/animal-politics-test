// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// 카카오 SDK 초기화 함수
function initKakao() {
  // window.Kakao 객체가 있는지 확인
  if (window.Kakao) {
    // 이미 초기화되었는지 확인
    if (!window.Kakao.isInitialized()) {
      try {
        // Kakao SDK 초기화
        window.Kakao.init("79c34c7b328cdbd4b3565f3034a8d7b9");
        console.log("Kakao SDK initialized");
      } catch (error) {
        console.error("Kakao SDK 초기화 실패:", error);
      }
    } else {
      console.log("Kakao SDK already initialized");
    }
  } else {
    console.warn(
      "Kakao SDK not found. Check if the script is included in index.html"
    );
  }
}

// 페이지 로드 후 카카오 SDK 초기화
setTimeout(initKakao, 500); // 약간의 지연 후 초기화 시도

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
