// src/main.jsx - 개선된 버전
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

 // main.jsx에서 카카오 SDK 초기화 코드 수정

// 카카오 SDK 초기화 함수
function initKakao() {
  // window.Kakao 객체가 있는지 확인
  if (window.Kakao) {
    // 이미 초기화되었는지 확인
    if (!window.Kakao.isInitialized()) {
      try {
        // Kakao SDK 초기화 (앱 키는 실제 유효한 키로 교체해야 합니다)
        window.Kakao.init("79c34c7b328cdbd4b3565f3034a8d7b9"); // 이 키를 실제 유효한 키로 교체하세요
        console.log("Kakao SDK initialized");
      } catch (error) {
        // 오류 발생 시 상세 정보 기록
        console.error("Kakao SDK 초기화 실패:", error);
      }
    } else {
      console.log("Kakao SDK already initialized");
    }
  } else {
    console.warn(
      "Kakao SDK not found. Make sure it's loaded before calling initKakao()"
    );
    
    // 스크립트가 로드되지 않은 경우 다시 로드 시도
    const script = document.createElement('script');
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    script.onload = function() {
      console.log("Kakao SDK loaded, attempting initialization");
      // 스크립트 로드 후 다시 초기화 시도
      setTimeout(initKakao, 300);
    };
    document.head.appendChild(script);
  }
}

// 전역 변수로 초기화 함수 노출
window.initKakao = initKakao;

// 페이지 로드 후 카카오 SDK 초기화 - DOMContentLoaded 이벤트 사용
document.addEventListener("DOMContentLoaded", () => {
  // DOM이 로드된 후 실행 - 약간의 지연 추가
  setTimeout(initKakao, 1000); // 1초 지연으로 변경
});

  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <App />
    </StrictMode>
  );