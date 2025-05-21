// src/contexts/TestContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import questions from "../data/questions";
import results from "../data/results";
import {
  calculateResult,
  normalizeVectors,
  calculateVectors,
} from "../utils/calculator";

// 테스트 컨텍스트 생성
const TestContext = createContext();

// 테스트 컨텍스트 제공자 컴포넌트
export const TestProvider = ({ children }) => {
  // 현재 페이지 상태 (start, question, result)
  const [page, setPage] = useState("start");

  // 현재 질문 인덱스
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // 사용자 응답 저장 배열
  const [answers, setAnswers] = useState([]);

  // 계산된 결과
  const [result, setResult] = useState(null);

  // 사용자의 벡터 점수
  const [userVectors, setUserVectors] = useState(null);

  // 여기에 새 useEffect 추가
  useEffect(() => {
    // URL에서 result 파라미터 확인
    const urlParams = new URLSearchParams(window.location.search);
    const resultId = urlParams.get("result");

    // 결과 ID가 URL에 있으면 해당 결과 표시
    if (resultId) {
      const matchedResult = results.find((r) => r.id === resultId);
      if (matchedResult) {
        // 결과 설정
        setResult(matchedResult);

        // 벡터값 설정 (기본값으로 설정하거나 결과의 벡터 사용)
        setUserVectors(matchedResult.vectors);

        // 결과 페이지로 이동
        setPage("result");
      }
    }
  }, []); // 컴포넌트 마운트 시 한 번만 실행

  // URL 해시 변경 감지 이벤트
  useEffect(() => {
    const handleHashChange = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const resultId = urlParams.get("result");
      
      if (resultId && page === "result") {
        const matchedResult = results.find((r) => r.id === resultId);
        if (matchedResult) {
          // 결과만 업데이트 (페이지는 이미 result임)
          setResult(matchedResult);
        }
      }
    };
    
    // 이벤트 리스너 등록
    window.addEventListener('popstate', handleHashChange);
    
    // 컴포넌트 언마운트 시 정리
    return () => {
      window.removeEventListener('popstate', handleHashChange);
    };
  }, [page]);

  // 테스트 시작 함수
  const startTest = () => {
    setPage("question");
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
    setUserVectors(null);
    
    // URL 파라미터 제거
    const url = new URL(window.location);
    url.search = '';
    window.history.pushState({}, '', url);
  };

  // 질문에 응답하는 함수
  const answerQuestion = (optionId) => {
    // 새 응답 추가
    const newAnswers = [...answers, optionId];
    setAnswers(newAnswers);

    // 다음 질문으로 이동 또는 결과 계산
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 마지막 질문이면 결과 계산 및 결과 페이지로 이동
      calculateAndShowResult(newAnswers);
    }
  };

  // 결과 계산 및 표시 함수
  const calculateAndShowResult = (answersArray) => {
    // 벡터 계산
    const rawVectors = calculateVectors(answersArray, questions);
    const normalizedVectors = normalizeVectors(rawVectors);
    setUserVectors(normalizedVectors);

    // 결과 계산
    const matchedResult = calculateResult(answersArray, questions, results);
    setResult(matchedResult);
    
    // URL에 결과 ID 추가
    const url = new URL(window.location);
    url.searchParams.set('result', matchedResult.id);
    window.history.pushState({}, '', url);

    // 결과 페이지로 이동
    setPage("result");
  };

  // 다른 결과 선택 함수
  const selectResult = (newResult) => {
    if (!newResult) return;
    
    // 결과 업데이트
    setResult(newResult);
    
    // URL 파라미터 업데이트
    const url = new URL(window.location);
    url.searchParams.set('result', newResult.id);
    window.history.pushState({}, '', url);
  };

  // 다시 테스트하기 함수
  const restartTest = () => {
    // 메인 페이지로 이동하도록 변경
    setPage("start");
    // 기존 상태 초기화
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
    setUserVectors(null);
    
    // URL 파라미터 제거
    const url = new URL(window.location);
    url.search = '';
    window.history.pushState({}, '', url);
  };

  // 현재 질문 가져오기
  const getCurrentQuestion = () => {
    return questions[currentQuestionIndex];
  };

  // 컨텍스트 값
  const value = {
    page,
    setPage,
    currentQuestionIndex,
    totalQuestions: questions.length,
    getCurrentQuestion,
    answerQuestion,
    result,
    userVectors,
    startTest,
    restartTest,
    questions,
    answers,
    selectResult, // 새로운 함수 추가
  };

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
};

// 커스텀 훅으로 컨텍스트 쉽게 사용
export const useTest = () => {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error("useTest must be used within a TestProvider");
  }
  return context;
};