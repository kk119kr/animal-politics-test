// 최종 ResultPage.jsx 수정 부분 (주요 변경사항만 포함)

import { useTest } from "../contexts/TestContext";
import { useEffect, useRef, useState } from "react";
import results from "../data/results";

// 벡터 온도계 컴포넌트
const VectorThermometer = ({ label, value, description }) => {
  const percent = (value + 100) / 2;
  let color = "bg-gray-400";
  if (value > 50) color = "bg-red-500";
  else if (value > 0) color = "bg-orange-400";
  else if (value > -50) color = "bg-blue-400";
  else color = "bg-blue-600";

  const [width, setWidth] = useState(0);

  // 애니메이션 효과를 위한 useEffect
  useEffect(() => {
    // 약간의 지연 후 너비 설정
    const timer = setTimeout(() => {
      setWidth(percent);
    }, 200);
    return () => clearTimeout(timer);
  }, [percent]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-medium text-gray-700">{value}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`${color} h-3 rounded-full transition-all duration-1000 vector-thermometer`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
      <p className="text-xs text-gray-500 mt-1">{description}</p>
    </div>
  );
};

// 탭 컴포넌트
const ResultTabs = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="flex border-b border-gray-200 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`py-2 px-4 text-sm font-medium transition-colors duration-200 relative 
            ${
              activeTab === tab.id
                ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
          {activeTab !== tab.id && (
            <span className="absolute inset-0 bg-gray-100 opacity-0 hover:opacity-10 transition-opacity duration-200"></span>
          )}
        </button>
      ))}
    </div>
  );
};




// 수정된 CompatibilitySection 컴포넌트
const CompatibilitySection = ({ currentResult, allResults }) => {
  // 더 상세한 궁합 정보를 제공하는 함수
  const getCompatibilityInfo = (currentId) => {
    const compatibilityData = {
      R1: {
        compatible: ["R7", "R3"],
        description: "규칙과 전통을 중시하는 성향으로, 균형있는 중재자와 전통 수호자와 잘 어울립니다. 질서와 안정을 바탕으로 서로의 가치관을 존중하며 협력할 수 있습니다."
      },
      R2: {
        compatible: ["R8", "R10"],
        description: "실용적인 경제관을 가진 성향으로, 분석적인 지식 탐구자와 유연한 혁신가와 좋은 시너지를 발휘합니다. 효율과 혁신을 추구하는 대화가 가능합니다."
      },
      R3: {
        compatible: ["R1", "R9"],
        description: "문화적 전통을 소중히 여기는 성향으로, 원칙 수호자와 공동체 건설자와 가치관을 공유합니다. 역사와 공동체적 가치를 중심으로 소통할 수 있습니다."
      },
      R4: {
        compatible: ["R5", "R6"],
        description: "급진적 변화를 추구하는 성향으로, 정의 수호자와 자유 추구자와 함께할 때 사회 개혁에 대한 열정적인 토론이 가능합니다. 이상적인 비전을 함께 나눌 수 있습니다."
      },
      R5: {
        compatible: ["R4", "R9"],
        description: "정의와 공정을 중시하는 성향으로, 열정적인 혁신가와 공동체 가치를 지닌 동물들과 좋은 대화가 가능합니다. 사회적 약자와 공동체에 대한 관심을 공유합니다."
      },
      R6: {
        compatible: ["R4", "R10"],
        description: "개인의 자유와 다양성을 중시하는 성향으로, 열정 혁신가와 유연한 혁신가와 창의적인 대화를 나눌 수 있습니다. 자유와 변화에 대한 가치를 공유합니다."
      },
      R7: {
        compatible: ["R1", "R8"],
        description: "균형과 조화를 추구하는 성향으로, 원칙 수호자와 지식 탐구자 사이에서 중재 역할을 합니다. 다양한 관점을 이해하고 통합하는 대화가 가능합니다."
      },
      R8: {
        compatible: ["R2", "R7"],
        description: "데이터와 분석을 중시하는 성향으로, 시장 신봉자와 균형 조율자와 깊이 있는 대화가 가능합니다. 실용적이고 합리적인 해결책을 함께 모색할 수 있습니다."
      },
      R9: {
        compatible: ["R3", "R5"],
        description: "공동체적 가치를 중시하는 성향으로, 전통 수호자와 정의 수호자와 함께할 때 사회적 연대에 관한 의미 있는 대화가 가능합니다. 서로 돕는 가치관을 공유합니다."
      },
      R10: {
        compatible: ["R2", "R6"],
        description: "변화와 적응을 중시하는 성향으로, 시장 신봉자의 실용성과 자유 추구자의 창의성을 모두 수용합니다. 혁신적이고 유연한 사고방식을 함께 나눌 수 있습니다."
      },
    };
    
    return compatibilityData[currentId] || { compatible: [], description: "다른 유형들과의 상호작용을 통해 더 폭넓은 시각을 얻을 수 있습니다." };
  };

  const compatibilityInfo = getCompatibilityInfo(currentResult.id);
  const compatibleResults = compatibilityInfo.compatible
    .map((id) => allResults.find((result) => result.id === id))
    .filter(Boolean);

  return (
    <div className="mt-8 bg-gray-50 rounded-lg p-4">
      <h3 className="font-bold text-lg mb-3 text-center">잘 어울리는 성향</h3>
      
      {/* 먼저 어울리는 성향에 대한 설명 */}
      <p className="text-sm text-gray-700 mb-4 text-center">
        {compatibilityInfo.description}
      </p>
      
      <div className="flex justify-center space-x-4">
        {compatibleResults.map((result) => (
          <div key={result.id} className="text-center">
            <div className="relative inline-block">
              <img
                src={`/images/${result.id}.png`}
                alt={result.name}
                className="w-24 h-32 object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-1 rounded-b-lg">
                <span className="text-white text-xs font-medium">
                  {result.name}
                </span>
              </div>
              {/* 희귀도 뱃지 추가 */}
              <div className={`absolute top-0 right-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white
                ${result.rarity === 'UR' ? 'bg-yellow-500' : 
                  result.rarity === 'SR' ? 'bg-purple-500' : 
                  result.rarity === 'R' ? 'bg-blue-500' : 'bg-gray-500'}`}>
                {result.rarity}
              </div>
            </div>
            <div className="mt-1">
              <span className="text-xs text-gray-600">{result.animal}</span>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-xs text-center text-gray-500 mt-4">
        서로 다른 성향이지만 보완적인 가치관을 가진 유형들과 대화할 때 더 풍부한 통찰을 얻을 수 있습니다.
      </p>
    </div>
  );
};

// ... 기존 코드 생략 ...

// 주요 컴포넌트
function ResultPage() {
  // ... 기존 코드 생략 ...

  return (
    <div
      className="bg-white p-6 rounded-xl shadow-lg max-w-3xl w-full forest-card animate-fade-in"
      ref={fullResultRef}
    >
      {/* 결과 헤더 */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          당신이 뽑은 애니폴리는 '{result.name}'입니다!
        </h1>
        <p className="text-lg mt-2 text-gray-700">
          당신의 정치적 성향은 <span className="font-semibold">{politicalOrientation}</span>에 가깝습니다.
        </p>
        <div className="italic text-gray-500 mt-1 text-sm">"{result.quote}"</div>
      </div>

      <div className="md:flex gap-6">
        {/* 결과 카드 이미지 섹션 */}
        <div className="md:w-2/5">
          <div
            className="relative animate-scale-in result-card-animate"
            ref={resultCardRef}
          >
            <img
              src={`/images/${result.id}.png`}
              alt={`${result.name} (${result.animal})`}
              className="w-full h-auto rounded-xl shadow-lg"
              onError={(e) => {
                console.error(`이미지 로드 실패: ${result.id}.png`);
                e.target.onerror = null;
                e.target.src = "/images/card-placeholder.png";
              }}
            />
          </div>

          {/* 공유 미리보기 영역 */}
          <div className="mt-4 p-3 border border-gray-200 rounded-lg bg-gray-50">
            <p className="text-xs text-gray-500 mb-2">
              공유 시 보여질 미리보기
            </p>
            <div className="flex items-center bg-white p-2 rounded border">
              <img
                src={`/images/${result.id}.png`}
                alt={result.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="ml-3">
                <p className="text-sm font-medium">
                  나의 정치성향 동물은 {result.name}({result.animal})입니다!
                </p>
                <p className="text-xs text-gray-500">
                  어느 당도 아닌 동물입니다만? - 정치성향테스트
                </p>
              </div>
            </div>
          </div>

          {/* 버튼 영역 - 순서 변경 */}
          <div className="mt-4 flex space-x-2 justify-center">
            <button
              className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm forest-button"
              onClick={restartTest}
              disabled={isSaving}
            >
              다시 테스트하기
            </button>

            <button
              className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm forest-button"
              onClick={shareToKakao}
              disabled={isSaving}
            >
              카카오톡 공유
            </button>

            <div className="relative inline-block">
              <button
                id="saveButton"
                className="py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm forest-button flex items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  const saveOptions = document.getElementById("saveOptions");
                  if (saveOptions) {
                    saveOptions.classList.toggle("hidden");
                  }
                }}
                disabled={isSaving}
              >
                {isSaving ? "저장 중..." : "이미지 저장"}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="saveOptions"
                className="hidden absolute z-10 mt-1 bg-white rounded-md shadow-lg w-full"
              >
                <div className="py-1">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => saveCardImageDirectly()}
                  >
                    카드만 저장
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => saveResultImage("full")}
                  >
                    전체 결과 저장
                  </button>
                </div>
              </div>
            </div>

            <button
              className="py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm forest-button"
              onClick={copyToClipboard}
              disabled={isSaving}
            >
              {copied ? "✓ 복사됨" : "URL 복사"}
            </button>
          </div>
        </div>

        {/* 결과 상세 설명 섹션 */}
        <div className="md:w-3/5 mt-6 md:mt-0">
          <h3 className="font-bold text-lg mb-4">당신의 정치 성향 벡터</h3>

          {/* 벡터 온도계 */}
          {userVectors && (
            <div className="mb-6">
              <VectorThermometer
                label="개혁성"
                value={userVectors.reform}
                description="변화와 혁신을 추구하는 정도"
              />
              <VectorThermometer
                label="공동체성"
                value={userVectors.collectivism}
                description="개인보다 집단의 이익을 중시하는 정도"
              />
              <VectorThermometer
                label="현실주의"
                value={userVectors.pragmatism}
                description="이상보다 실용적 결과를 중요시하는 정도"
              />
              <VectorThermometer
                label="권위주의"
                value={userVectors.authoritarianism}
                description="강한 지도력과 질서를 선호하는 정도"
              />
              <VectorThermometer
                label="대응성"
                value={userVectors.engagement}
                description="적극적으로 문제에 대응하는 정도"
              />
            </div>
          )}

          {/* 탭 메뉴 */}
          <div className="mt-4 bg-gray-50 rounded-lg p-2">
            <ResultTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabs={tabs}
            />

            <div className="bg-white rounded-lg p-4 shadow-sm animate-fade-in">
              {activeTab === "traits" && (
                <div>
                  <h3 className="font-bold text-md mb-2">행동 특성</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                    {result.traits.map((trait, index) => (
                      <li key={index}>{trait}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "media" && (
                <div>
                  <h3 className="font-bold text-md mb-2">
                    선호하는 미디어/정보
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {result.media}
                  </p>
                </div>
              )}

              {activeTab === "strengths" && (
                <div>
                  <h3 className="font-bold text-md mb-2">장점</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {result.strengths}
                  </p>
                </div>
              )}

              {activeTab === "challenges" && (
                <div>
                  <h3 className="font-bold text-md mb-2">도전점</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {result.challenges}
                  </p>
                </div>
              )}
              
              {activeTab === "party" && (
                <div>
                  <h3 className="font-bold text-md mb-2">선호 정당 특징</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {partyPreference}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 결과 하단 버튼 제거 - 위로 이동 */}
        </div>
      </div>

      {/* 궁합 섹션 업데이트 */}
      <CompatibilitySection currentResult={result} allResults={results} />

      {/* 다른 결과 유형 갤러리 유지 */}
      <ResultGallery allResults={results} currentResult={result} />
    </div>
  );
}

export default ResultPage;