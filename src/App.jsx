// src/App.jsx 파일 수정
import { TestProvider, useTest } from "./contexts/TestContext";
import StartPage from "./components/StartPage";
import QuestionPage from "./components/QuestionPage";
import ResultPage from "./components/ResultPage";
import { useState, useEffect } from "react";

// 실제 앱 컴포넌트
const AppContent = () => {
  const { page } = useTest();
  const [currentPage, setCurrentPage] = useState(page);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 페이지 변경 시 부드러운 전환 효과
  useEffect(() => {
    if (page !== currentPage) {
      setIsTransitioning(true);

      // 짧은 지연 후 페이지 변경
      const timer = setTimeout(() => {
        setCurrentPage(page);
        setIsTransitioning(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [page, currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50">
      {/* 메인 콘텐츠 영역 */}
      <div className="flex-grow flex items-center justify-center p-4 pb-16">
        <div
          className={`transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {currentPage === "start" && <StartPage />}
          {currentPage === "question" && <QuestionPage />}
          {currentPage === "result" && <ResultPage />}
        </div>
      </div>

      {/* 푸터 - fixed 대신 static 위치로 변경 */}
      <div className="w-full py-3 bg-white bg-opacity-70 text-center text-gray-400 text-xs mt-auto">
        © 2025 정치성향테스트 | 제작: 송혁규, 유혜인
        <br />
        문의: robehk@naver.com | 모든 콘텐츠 및 이미지의 권리는 제작자에게
        있습니다.
      </div>
    </div>
  );
};

// 앱의 루트 컴포넌트
function App() {
  return (
    <TestProvider>
      <AppContent />
    </TestProvider>
  );
}

export default App;