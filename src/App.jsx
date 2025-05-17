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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div
        className={`transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {currentPage === "start" && <StartPage />}
        {currentPage === "question" && <QuestionPage />}
        {currentPage === "result" && <ResultPage />}
      </div>

      {/* 숲 배경 요소 (장식) - pointer-events-none 추가 */}
      <div className="fixed bottom-0 left-0 w-full h-24 bg-green-900/10 z-0 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-full h-16 bg-green-800/10 z-0 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-full h-8 bg-green-700/10 z-0 pointer-events-none"></div>

      {/* 숲 데코레이션 요소 - pointer-events-none 추가 */}
      <div className="fixed top-10 left-10 text-5xl opacity-20 z-0 pointer-events-none">
        🌳
      </div>
      <div className="fixed top-40 right-20 text-5xl opacity-10 z-0 pointer-events-none">
        🌲
      </div>
      <div className="fixed bottom-20 left-40 text-5xl opacity-15 z-0 pointer-events-none">
        🌿
      </div>
      <div className="fixed bottom-40 right-10 text-5xl opacity-10 z-0 pointer-events-none">
        🍃
      </div>

      {/* 푸터 - pointer-events-none 추가 */}
      <div className="fixed bottom-2 w-full text-center text-gray-400 text-xs pointer-events-none">
        © 2025 어느 당도 아닌 동물입니다만? | 정치심리테스트 저작권 - 송혁규
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
