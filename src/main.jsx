// src/main.jsx - 개선된 버전
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
        // Kakao SDK 초기화 (앱 키는 Kakao Developers에서 확인)
        window.Kakao.init("79c34c7b328cdbd4b3565f3034a8d7b9");
        console.log("Kakao SDK initialized");
        
        // 카카오링크 공유 설정
        if (window.Kakao.Share) {
          // 기본 공유 이미지 및 설명 설정
          window.Kakao.Share.createDefaultButton({
            container: '#kakao-share-btn',
            objectType: 'feed',
            content: {
              title: '어느 당도 아닌 동물입니다만? - 정치성향테스트',
              description: '나는 어떤 정치 성향의 동물일까? 지금 테스트해보세요!',
              imageUrl: `${window.location.origin}/images/main.png`,
              link: {
                mobileWebUrl: window.location.origin,
                webUrl: window.location.origin,
              },
            },
            buttons: [
              {
                title: '테스트 시작하기',
                link: {
                  mobileWebUrl: window.location.origin,
                  webUrl: window.location.origin,
                },
              },
            ],
          });
        }
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

// 전역 변수로 초기화 함수 노출
window.initKakao = initKakao;

// 페이지 로드 후 카카오 SDK 초기화
document.addEventListener("DOMContentLoaded", () => {
  // DOM이 로드된 후 실행
  setTimeout(initKakao, 500); // 약간의 지연 후 초기화 시도
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);