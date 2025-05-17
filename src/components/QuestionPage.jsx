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
    setSelectedOption(null);
    setAnimateOptions(true);
    setIsTransitioning(false);
    setImageError(false); // 이미지 오류 상태도 리셋
  }, [currentQuestionIndex]);

  // 옵션 선택 처리
  const handleOptionClick = (optionId) => {
    if (isTransitioning) return; // 전환 중에는 추가 클릭 방지

    setSelectedOption(optionId);
    setIsTransitioning(true);

    // 약간의 지연 후 다음 질문으로 이동
    setTimeout(() => {
      answerQuestion(optionId);
    }, 300);
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
        <h2 className="text-xl font-semibold text-gray-800 mb-6 leading-relaxed">
          {question.question}
        </h2>

        {/* 이미지 영역 - 테두리와 테스트 글씨 제거 */}
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

      {/* 선택지 영역 - 음영 처리 추가 */}
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={option.id}
            className={`w-full transition-all duration-150 ${
              selectedOption === option.id
                ? "bg-blue-100 border-blue-500 shadow-md"
                : "bg-gray-50 border-gray-300 hover:border-blue-300 hover:bg-blue-50 hover:shadow-sm"
            } border-2 text-gray-800 py-4 px-4 rounded-lg text-left option-card`}
            onClick={() => handleOptionClick(option.id)}
            disabled={selectedOption !== null}
          >
            <div className="flex items-start">
              <span
                className={`font-medium mr-3 ${
                  selectedOption === option.id
                    ? "text-blue-600"
                    : "text-blue-500"
                }`}
              >
                {option.id}
              </span>
              <span className="text-gray-700">{option.text}</span>
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
