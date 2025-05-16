// src/contexts/TestContext.jsx
import { createContext, useContext, useState } from 'react';
import questions from '../data/questions';
import results from '../data/results';
import { calculateResult, normalizeVectors, calculateVectors } from '../utils/calculator';

// 테스트 컨텍스트 생성
const TestContext = createContext();

// 테스트 컨텍스트 제공자 컴포넌트
export const TestProvider = ({ children }) => {
  // 현재 페이지 상태 (start, question, result)
  const [page, setPage] = useState('start');
  
  // 현재 질문 인덱스
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // 사용자 응답 저장 배열
  const [answers, setAnswers] = useState([]);
  
  // 계산된 결과
  const [result, setResult] = useState(null);
  
  // 사용자의 벡터 점수
  const [userVectors, setUserVectors] = useState(null);

  // 테스트 시작 함수
  const startTest = () => {
    setPage('question');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
    setUserVectors(null);
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
    
    // 결과 페이지로 이동
    setPage('result');
  };

  // 다시 테스트하기 함수
  const restartTest = () => {
    startTest();
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
    answers
  };

  return (
    <TestContext.Provider value={value}>
      {children}
    </TestContext.Provider>
  );
};

// 커스텀 훅으로 컨텍스트 쉽게 사용
export const useTest = () => {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error('useTest must be used within a TestProvider');
  }
  return context;
};