// src/utils/calculator.js
// 테스트 결과 계산 알고리즘 - 5점 척도로 수정

/**
 * 사용자 응답을 벡터로 변환하는 함수
 * @param {Array} answers - 사용자 응답 배열 (선택한 옵션 ID)
 * @param {Array} questions - 전체 질문 데이터
 * @returns {Object} - 5개 벡터값을 포함하는 객체
 */
export const calculateVectors = (answers, questions) => {
  // 초기 벡터값 설정
  const initialVectors = {
    reform: 0,
    collectivism: 0,
    pragmatism: 0,
    authoritarianism: 0,
    engagement: 0
  };

  // 응답이 없으면 초기값 반환
  if (!answers || !questions || answers.length === 0) {
    return initialVectors;
  }

  // 각 응답에 대해 벡터값 합산
  return answers.reduce((vectors, answer, index) => {
    // 유효한 인덱스 체크
    if (index >= questions.length) {
      return vectors;
    }

    const question = questions[index];
    // 선택한 옵션 찾기
    const selectedOption = question.options.find(option => option.id === answer);

    // 선택한 옵션이 있으면 점수 합산
    if (selectedOption && selectedOption.scores) {
      Object.keys(selectedOption.scores).forEach(key => {
        vectors[key] += selectedOption.scores[key];
      });
    }

    return vectors;
  }, { ...initialVectors });
};

/**
 * 벡터값을 -100에서 +100 사이로 정규화하는 함수
 * @param {Object} vectors - 원본 벡터값
 * @returns {Object} - 정규화된 벡터값
 */
export const normalizeVectors = (vectors) => {
  // 최대 가능 점수 (5점 척도 고려 조정)
  // 최대 절대값이 30인 벡터값에 15개 질문을 고려
  const maxPossibleScore = 250; 
  
  const normalized = {};
  
  Object.keys(vectors).forEach(key => {
    // -100에서 +100 사이로 정규화
    normalized[key] = Math.min(
      Math.max(
        Math.round(vectors[key] * (100 / maxPossibleScore)), 
        -100
      ), 
      100
    );
  });
  
  return normalized;
};

/**
 * 유클리디안 거리 계산 함수
 * @param {Object} v1 - 첫 번째 벡터
 * @param {Object} v2 - 두 번째 벡터
 * @returns {number} - 두 벡터 간의 거리
 */
export const calculateDistance = (v1, v2) => {
  return Math.sqrt(
    Math.pow(v1.reform - v2.reform, 2) +
    Math.pow(v1.collectivism - v2.collectivism, 2) +
    Math.pow(v1.pragmatism - v2.pragmatism, 2) +
    Math.pow(v1.authoritarianism - v2.authoritarianism, 2) +
    Math.pow(v1.engagement - v2.engagement, 2)
  );
};

/**
 * 코사인 유사도 계산 함수
 * @param {Object} v1 - 첫 번째 벡터
 * @param {Object} v2 - 두 번째 벡터
 * @returns {number} - 두 벡터 간의 유사도 (-1 ~ 1)
 */
export const calculateCosineSimilarity = (v1, v2) => {
  const dotProduct = 
    v1.reform * v2.reform +
    v1.collectivism * v2.collectivism +
    v1.pragmatism * v2.pragmatism +
    v1.authoritarianism * v2.authoritarianism +
    v1.engagement * v2.engagement;
  
  const magnitude1 = Math.sqrt(
    Math.pow(v1.reform, 2) +
    Math.pow(v1.collectivism, 2) +
    Math.pow(v1.pragmatism, 2) +
    Math.pow(v1.authoritarianism, 2) +
    Math.pow(v1.engagement, 2)
  );
  
  const magnitude2 = Math.sqrt(
    Math.pow(v2.reform, 2) +
    Math.pow(v2.collectivism, 2) +
    Math.pow(v2.pragmatism, 2) +
    Math.pow(v2.authoritarianism, 2) +
    Math.pow(v2.engagement, 2)
  );
  
  if (magnitude1 === 0 || magnitude2 === 0) {
    return 0;
  }
  
  return dotProduct / (magnitude1 * magnitude2);
};

/**
 * 벡터 크기 유사도 계산 함수
 * @param {Object} v1 - 첫 번째 벡터
 * @param {Object} v2 - 두 번째 벡터
 * @returns {number} - 벡터 크기 유사도 (0 ~ 1)
 */
export const calculateMagnitudeSimilarity = (v1, v2) => {
  const magnitude1 = Math.sqrt(
    Math.pow(v1.reform, 2) +
    Math.pow(v1.collectivism, 2) +
    Math.pow(v1.pragmatism, 2) +
    Math.pow(v1.authoritarianism, 2) +
    Math.pow(v1.engagement, 2)
  );
  
  const magnitude2 = Math.sqrt(
    Math.pow(v2.reform, 2) +
    Math.pow(v2.collectivism, 2) +
    Math.pow(v2.pragmatism, 2) +
    Math.pow(v2.authoritarianism, 2) +
    Math.pow(v2.engagement, 2)
  );
  
  return 1 / (1 + Math.abs(magnitude1 - magnitude2));
};

/**
 * 중도 선택지 비율 계산 함수 (5점 척도용 신규 함수)
 * @param {Array} answers - 사용자 응답 배열
 * @returns {number} - 중도 선택지(C) 선택 비율 (0 ~ 1)
 */
export const calculateCenteringRatio = (answers) => {
  if (!answers || answers.length === 0) return 0;
  
  // 중도 선택지(C) 횟수 카운트
  const centerCount = answers.filter(a => a === 'C').length;
  
  // 비율 계산
  return centerCount / answers.length;
};

/**
 * 극단 선택지 비율 계산 함수 (5점 척도용 신규 함수)
 * @param {Array} answers - 사용자 응답 배열
 * @returns {number} - 극단 선택지(A, E) 선택 비율 (0 ~ 1)
 */
export const calculateExtremeRatio = (answers) => {
  if (!answers || answers.length === 0) return 0;
  
  // 극단 선택지(A, E) 횟수 카운트
  const extremeCount = answers.filter(a => a === 'A' || a === 'E').length;
  
  // 비율 계산
  return extremeCount / answers.length;
};

/**
 * 가중치를 적용한 최종 점수 계산 함수
 * 5점 척도 고려하여 조정
 * @param {Object} userVectors - 사용자 벡터
 * @param {Object} resultVectors - 결과 유형 벡터
 * @returns {number} - 가중치가 적용된 최종 점수
 */
export const calculateWeightedScore = (userVectors, resultVectors) => {
  const distScore = 1 / (1 + calculateDistance(userVectors, resultVectors));
  const cosineScore = (calculateCosineSimilarity(userVectors, resultVectors) + 1) / 2; // 0~1 범위로 변환
  const magnitudeScore = calculateMagnitudeSimilarity(userVectors, resultVectors);
  
  // 가중치 조정 - 5점 척도 고려
  // 코사인 유사도의 중요도를 약간 높임
  return (distScore * 0.5) + (cosineScore * 0.45) + (magnitudeScore * 0.05);
};

/**
 * 응답 패턴 기반 결과 유형별 보정 함수 (5점 척도 대응)
 * @param {Object} result - 결과 유형
 * @param {Array} answers - 사용자 응답
 * @returns {number} - 보정된 점수
 */
export const applyResponsePatternAdjustment = (result, answers) => {
  // 중도 선택(C) 비율 계산
  const centeringRatio = calculateCenteringRatio(answers);
  
  // 극단 선택(A, E) 비율 계산
  const extremeRatio = calculateExtremeRatio(answers);
  
  // 결과 유형별 보정 계수
  const adjustmentFactors = {
    // 중도적 결과 유형 - 중도 선택이 많을수록 강화
    "R7": 1 + (centeringRatio * 0.3),  // 균형 조율자
    "R8": 1 + (centeringRatio * 0.25), // 지식 탐구자
    
    // 극단적 결과 유형 - 극단 선택이 많을수록 강화
    "R4": 1 + (extremeRatio * 0.25),  // 불사조(열정 혁신가)
    "R1": 1 + (extremeRatio * 0.2),   // 황금독수리(원칙 수호자)
    
    // 희귀 유형 - 기본 가중치 적용
    "R6": 1.1,   // 페가수스(자유 추구자)
    "R3": 1.05,  // 천년거북(전통 수호자)
    "R10": 1.05, // 카멜레온(유연한 혁신가)
    
    // 기타 유형
    "R5": 1.02,  // 청룡(정의 수호자)
    "R9": 0.95,  // 비버(공동체 건설자)
    "R2": 1.05   // 은여우(시장 신봉자)
  };
  
  // 기본값은 1 (보정 없음)
  return adjustmentFactors[result.id] || 1;
};

/**
 * 사용자 응답을 바탕으로 결과 유형 매칭
 * 5점 척도로 수정됨
 * @param {Array} answers - 사용자 응답 배열
 * @param {Array} questions - 질문 데이터
 * @param {Array} results - 결과 유형 데이터
 * @returns {Object} - 매칭된 결과 유형 객체
 */
export const calculateResult = (answers, questions, results) => {
  // 벡터 계산 및 정규화
  const rawVectors = calculateVectors(answers, questions);
  const normalizedVectors = normalizeVectors(rawVectors);
  
  // 각 결과 유형에 대한 점수 계산 (5점 척도 보정 적용)
  const resultScores = results.map(result => {
    const rawScore = calculateWeightedScore(normalizedVectors, result.vectors);
    const patternAdjustment = applyResponsePatternAdjustment(result, answers);
    
    return {
      result,
      score: rawScore * patternAdjustment
    };
  });
  
  // 점수 기준 내림차순 정렬
  resultScores.sort((a, b) => b.score - a.score);
  
  // 희귀도에 따른 조건 조정 (5점 척도 고려)
  
  // UR은 70% 이상의 유사도를 가져야 함 (기준 완화)
  if (resultScores[0].result.rarity === 'UR' && 
      calculateCosineSimilarity(normalizedVectors, resultScores[0].result.vectors) < 0.7) {
    // UR 조건을 만족하지 못하면 다음 최고 점수로 대체
    return resultScores[1].result;
  }
  
  // SR은 67% 이상의 유사도를 가져야 함 (기준 완화)
  if (resultScores[0].result.rarity === 'SR' && 
      calculateCosineSimilarity(normalizedVectors, resultScores[0].result.vectors) < 0.67) {
    // SR 조건을 만족하지 못하면 다음 최고 점수로 대체
    return resultScores[1].result;
  }
  
  // R은 63% 이상의 유사도를 가져야 함 (기준 완화)
  if (resultScores[0].result.rarity === 'R' && 
      calculateCosineSimilarity(normalizedVectors, resultScores[0].result.vectors) < 0.63) {
    // R 조건을 만족하지 못하면 다음 최고 점수로 대체
    return resultScores[1].result;
  }
  
  // 카멜레온(R10)에 대한 추가 제한 조건 (수정됨)
  if (resultScores[0].result.id === 'R10') {
    const cosine = calculateCosineSimilarity(normalizedVectors, resultScores[0].result.vectors);
    
    // 카멜레온의 경우 유사도 요구치 완화 (0.6 → 0.58)
    if (cosine < 0.58) {
      return resultScores[1].result;
    }
    
    // 중간 선택지 과다 선택 시 제한 조정
    let cCount = 0;
    answers.forEach(a => { if (a === 'C') cCount++; });
    
    // 중도 선택지(C) 8개 이상 선택 시 카멜레온 결과 제한
    if (cCount >= 8) {
      return resultScores[1].result;
    }
  }
  
  // 결과 다양성 확보를 위한 최종 조정
  // 비슷한 점수(차이가 3% 이내)의 희소 결과 우선
  if (resultScores.length > 1) {
    const topScore = resultScores[0].score;
    const runnerUpScore = resultScores[1].score;
    
    // 점수 차이가 아주 작고(3% 이내), 차순위가 더 희귀한 경우
    if ((topScore - runnerUpScore) / topScore < 0.03) {
      const topRarity = getRarityValue(resultScores[0].result.rarity);
      const runnerUpRarity = getRarityValue(resultScores[1].result.rarity);
      
      // 차순위가 더 희귀하면 차순위 결과 반환
      if (runnerUpRarity > topRarity) {
        return resultScores[1].result;
      }
    }
  }
  
  // 가장 높은 점수의 결과 반환
  return resultScores[0].result;
};

// 희귀도 값 변환 헬퍼 함수
function getRarityValue(rarity) {
  switch(rarity) {
    case 'UR': return 4;
    case 'SR': return 3;
    case 'R': return 2;
    case 'C': 
    default: return 1;
  }
}

export default {
  calculateVectors,
  normalizeVectors,
  calculateDistance,
  calculateCosineSimilarity,
  calculateMagnitudeSimilarity,
  calculateCenteringRatio,
  calculateExtremeRatio,
  calculateWeightedScore,
  applyResponsePatternAdjustment,
  calculateResult
};