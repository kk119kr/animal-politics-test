// src/utils/calculator.js
// 테스트 결과 계산 알고리즘 - 한국 사용자 패턴에 맞게 조정

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
  // 최대 가능 점수 (한국 응답 패턴 고려 조정)
  // 대한민국 사용자들의 중간 선택지 선호 경향 반영
  const maxPossibleScore = 180; // 약간 하향 조정
  
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
 * 가중치를 적용한 최종 점수 계산 함수
 * 한국 사용자의 응답 패턴을 고려하여 조정
 * @param {Object} userVectors - 사용자 벡터
 * @param {Object} resultVectors - 결과 유형 벡터
 * @returns {number} - 가중치가 적용된 최종 점수
 */
export const calculateWeightedScore = (userVectors, resultVectors) => {
  const distScore = 1 / (1 + calculateDistance(userVectors, resultVectors));
  const cosineScore = (calculateCosineSimilarity(userVectors, resultVectors) + 1) / 2; // 0~1 범위로 변환
  const magnitudeScore = calculateMagnitudeSimilarity(userVectors, resultVectors);
  
  // 가중치 조정 - 한국 사용자 응답 패턴 고려
  // 방향성(코사인 유사도)의 중요도를 높이고 거리의 중요도는 약간 낮춤
  return (distScore * 0.55) + (cosineScore * 0.40) + (magnitudeScore * 0.05);
};

/**
 * 한국 사용자 특성을 고려한 유형별 보정 함수 (변경됨)
 * 특정 유형이 과도하게 나오는 현상 방지
 * @param {Object} result - 결과 유형
 * @param {Object} vectors - 사용자 벡터
 * @returns {number} - 보정된 점수
 */
export const applyKoreanUserAdjustment = (result, vectors) => {
  // 변경된 보정값: 비버/청룡/여우원숭이 감소, 다른 유형들 증가
  const adjustmentFactors = {
    "R9": 0.8,   // 비버(공동체 건설자) 점수를 20% 감소 (기존에 없던 보정)
    "R5": 0.9,   // 청룡(정의 수호자) 점수를 10% 감소 (기존 1.1에서 변경)
    "R7": 0.85,  // 여우원숭이(균형 조율자) 점수를 15% 감소 (기존 0.92에서 더 감소)
    
    // 다른 유형들은 점수 증가
    "R1": 1.1,   // 황금독수리(원칙 수호자) 점수 10% 증가
    "R4": 1.15,  // 불사조(열정 혁신가) 점수 15% 증가
    "R6": 1.2,   // 페가수스(자유 추구자) 점수 20% 증가
    "R3": 1.15,  // 천년거북(전통 수호자) 점수 15% 증가
    "R8": 1.12,  // 올빼미(지식 탐구자) 점수 12% 증가
    "R10": 1.05, // 카멜레온(유연한 혁신가) 점수 5% 증가 (기존 0.9에서 변경)
    "R2": 1.1    // 은여우(시장 신봉자) 점수 10% 증가 (기존 1.08에서 약간 증가)
  };
  
  // 기본값은 1 (보정 없음)
  const factor = adjustmentFactors[result.id] || 1;
  
  return factor;
};

/**
 * 사용자 응답을 바탕으로 결과 유형 매칭
 * 한국 사용자 패턴을 고려하여 조정됨
 * @param {Array} answers - 사용자 응답 배열
 * @param {Array} questions - 질문 데이터
 * @param {Array} results - 결과 유형 데이터
 * @returns {Object} - 매칭된 결과 유형 객체
 */
export const calculateResult = (answers, questions, results) => {
  // 벡터 계산 및 정규화
  const rawVectors = calculateVectors(answers, questions);
  const normalizedVectors = normalizeVectors(rawVectors);
  
  // 각 결과 유형에 대한 점수 계산 (한국 사용자 보정 적용)
  const resultScores = results.map(result => {
    const rawScore = calculateWeightedScore(normalizedVectors, result.vectors);
    const koreanAdjustment = applyKoreanUserAdjustment(result, normalizedVectors);
    
    return {
      result,
      score: rawScore * koreanAdjustment
    };
  });
  
  // 점수 기준 내림차순 정렬
  resultScores.sort((a, b) => b.score - a.score);
  
  // 희귀도에 따른 조건 조정 (한국 사용자 패턴 고려)
  
  // UR은 75% 이상의 유사도를 가져야 함 (기준 완화)
  if (resultScores[0].result.rarity === 'UR' && 
      calculateCosineSimilarity(normalizedVectors, resultScores[0].result.vectors) < 0.75) {
    // UR 조건을 만족하지 못하면 다음 최고 점수로 대체
    return resultScores[1].result;
  }
  
  // SR은 72% 이상의 유사도를 가져야 함 (기준 완화)
  if (resultScores[0].result.rarity === 'SR' && 
      calculateCosineSimilarity(normalizedVectors, resultScores[0].result.vectors) < 0.72) {
    // SR 조건을 만족하지 못하면 다음 최고 점수로 대체
    return resultScores[1].result;
  }
  
  // R은 65% 이상의 유사도를 가져야 함 (기준 완화)
  if (resultScores[0].result.rarity === 'R' && 
      calculateCosineSimilarity(normalizedVectors, resultScores[0].result.vectors) < 0.65) {
    // R 조건을 만족하지 못하면 다음 최고 점수로 대체
    return resultScores[1].result;
  }
  
  // 카멜레온(R10)에 대한 추가 제한 조건 (변경됨)
  if (resultScores[0].result.id === 'R10') {
    const cosine = calculateCosineSimilarity(normalizedVectors, resultScores[0].result.vectors);
    
    // 카멜레온의 경우 유사도 요구치 완화 (0.70 → 0.60)
    if (cosine < 0.60) {
      return resultScores[1].result;
    }
    
    // 중간 선택지 과다 선택 시 제한 완화 (7 → 10)
    let bCount = 0;
    answers.forEach(a => { if (a === 'B') bCount++; });
    
    if (bCount >= 10) {
      return resultScores[1].result;
    }
  }
  
  // 가장 높은 점수의 결과 반환
  return resultScores[0].result;
};

export default {
  calculateVectors,
  normalizeVectors,
  calculateDistance,
  calculateCosineSimilarity,
  calculateMagnitudeSimilarity,
  calculateWeightedScore,
  applyKoreanUserAdjustment,
  calculateResult
};