// src/App.jsx - Footer 컴포넌트 통합
import { TestProvider, useTest } from "./contexts/TestContext";
import StartPage from "./components/StartPage";
import QuestionPage from "./components/QuestionPage";
import ResultPage from "./components/ResultPage";
import Footer from "./components/Footer";  // Footer 컴포넌트 import 추가
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

      {/* Footer 컴포넌트 사용 */}
      <Footer />
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