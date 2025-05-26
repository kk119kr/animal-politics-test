import { useTest } from "../contexts/TestContext";
import { useState, useEffect } from "react";

const QuestionPage = () => {
  const {
    currentQuestionIndex,
    totalQuestions,
    getCurrentQuestion,
    answerQuestion,
  } = useTest();

  const [animateOptions, setAnimateOptions] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageError, setImageError] = useState(false);

  const question = getCurrentQuestion();

  // 진행률 계산 (%)
  const progressPercent = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  // 새 질문이 나올 때마다 애니메이션 리셋
  useEffect(() => {
    // 상태 초기화를 명확히 분리하여 처리
    setSelectedOption(null);
    setAnimateOptions(true);
    setIsTransitioning(false);
    setImageError(false); // 이미지 오류 상태도 리셋
  }, [currentQuestionIndex]); // currentQuestionIndex가 변경될 때만 실행

  // 옵션 선택 처리
  const handleOptionClick = (optionId) => {
    if (isTransitioning) return; // 전환 중에는 추가 클릭 방지

    setSelectedOption(optionId);
    setIsTransitioning(true);

    // 약간의 지연 후 다음 질문으로 이동
    setTimeout(() => {
      // 다음 질문으로 넘어가기 전에 상태 리셋 (완료 콜백 보장)
      const nextQuestion = () => {
        answerQuestion(optionId);
      };
      
      nextQuestion();
    }, 300);
  };

  // 선택지 개수에 따른 그리드 스타일 결정
  const getOptionsGridStyle = () => {
    // 5개 선택지가 있으므로 스택 형태로 표시
    return "space-y-4";
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full forest-card">
      {/* 진행 상태 표시 */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span className="font-medium">
            질문 {currentQuestionIndex + 1} / {totalQuestions}
          </span>
          <span>{Math.round(progressPercent)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* 질문 영역 */}
      <div className="mb-6">
        <h2 className="text-xl font-normal text-gray-800 mb-6 leading-relaxed whitespace-pre-line text-center">
          {question.question}
        </h2>

        {/* 이미지 영역 */}
        <div className="mb-6 flex justify-center">
          <img
            src={`/images/${question.imageFile}`}
            alt={`질문 ${currentQuestionIndex + 1} 이미지`}
            className="rounded-lg w-full object-contain"
            style={{ maxWidth: "800px", maxHeight: "300px" }}
            onError={(e) => {
              console.error("이미지 로드 실패:", question.imageFile);
              setImageError(true);
            }}
          />
        </div>
      </div>

      {/* 선택지 영역 - 5점 척도 */}
      <div className={getOptionsGridStyle()}>
        {question.options.map((option, index) => (
          <button
            key={`${currentQuestionIndex}-${option.id}`} // 고유 키 개선
            className={`w-full transition-all duration-150 ${
              selectedOption === option.id
                ? "bg-blue-100 border-blue-500 shadow-md"
                : "bg-gray-50 border-gray-300 hover:border-blue-300 hover:bg-blue-50 hover:shadow-sm"
            } border-2 text-gray-800 py-4 px-4 rounded-lg text-left option-card ${
              // 중간 선택지(C)에 대한 스타일 강조
              option.id === "C"
                ? "border-dashed border-blue-300"
                : ""
            }`}
            onClick={() => handleOptionClick(option.id)}
            disabled={selectedOption !== null}
          >
            <div className="flex items-start">
              <span
                className={`font-medium mr-3 ${
                  selectedOption === option.id
                    ? "text-blue-600"
                    : option.id === "A" || option.id === "E" 
                      ? "text-purple-500" 
                      : option.id === "C" 
                        ? "text-green-500"
                        : "text-blue-500"
                }`}
              >
                {option.text}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* 진행 상태 표시 (하단 점) */}
      <div className="mt-8 flex justify-center">
        {Array.from({ length: totalQuestions }).map((_, index) => (
          <div
            key={index}
            className={`mx-1 w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentQuestionIndex
                ? "bg-blue-600"
                : index < currentQuestionIndex
                ? "bg-blue-300"
                : "bg-gray-200"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default QuestionPage;