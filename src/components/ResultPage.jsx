// src/components/ResultPage.jsx
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

// 궁합 표시 섹션 컴포넌트
const CompatibilitySection = ({ currentResult, allResults }) => {
  const getCompatibleTypes = (currentId) => {
    const compatibilityMap = {
      R1: ["R7", "R3"],
      R2: ["R8", "R10"],
      R3: ["R1", "R9"],
      R4: ["R5", "R6"],
      R5: ["R4", "R9"],
      R6: ["R4", "R10"],
      R7: ["R1", "R8"],
      R8: ["R2", "R7"],
      R9: ["R3", "R5"],
      R10: ["R2", "R6"],
    };
    return compatibilityMap[currentId] || [];
  };

  const compatibleIds = getCompatibleTypes(currentResult.id);
  const compatibleResults = compatibleIds
    .map((id) => allResults.find((result) => result.id === id))
    .filter(Boolean);

  return (
    <div className="mt-8 bg-gray-50 rounded-lg p-4">
      <h3 className="font-bold text-lg mb-3 text-center">잘 어울리는 성향</h3>
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
            </div>
            <div className="mt-1">
              <span className="text-xs text-gray-600">{result.animal}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-center text-gray-500 mt-2">
        이 유형들과 의견을 나눌 때 더 풍부한 대화가 이루어질 수 있습니다
      </p>
    </div>
  );
};

// 다른 결과 유형 갤러리 컴포넌트
const ResultGallery = ({ allResults, currentResult }) => {
  const [isOpen, setIsOpen] = useState(false);

  const resultsByRarity = {
    UR: allResults.filter((r) => r.rarity === "UR"),
    SR: allResults.filter((r) => r.rarity === "SR"),
    R: allResults.filter((r) => r.rarity === "R"),
    C: allResults.filter((r) => r.rarity === "C"),
  };

  const rarityLabels = {
    UR: "전설",
    SR: "초희귀",
    R: "희귀",
    C: "일반",
  };

  return (
    <div className="mt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors duration-200"
      >
        <span className="font-medium">다른 유형 둘러보기</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
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

      {isOpen && (
        <div className="mt-3 bg-gray-50 rounded-lg p-4 animate-fade-in">
          <p className="text-sm text-gray-600 mb-4">
            숲속에는 다양한 정치 성향의 동물들이 살고 있습니다. 각 유형을
            클릭하면 더 자세한 내용을 볼 수 있습니다.
          </p>

          {Object.keys(resultsByRarity).map(
            (rarity) =>
              resultsByRarity[rarity].length > 0 && (
                <div key={rarity} className="mb-5">
                  <h4 className="text-sm font-bold mb-2 flex items-center">
                    <span
                      className={`inline-block w-3 h-3 rounded-full mr-2 ${
                        rarity === "UR"
                          ? "bg-yellow-500"
                          : rarity === "SR"
                          ? "bg-purple-500"
                          : rarity === "R"
                          ? "bg-blue-500"
                          : "bg-gray-400"
                      }`}
                    ></span>
                    {rarityLabels[rarity]} ({resultsByRarity[rarity].length})
                  </h4>

                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {resultsByRarity[rarity].map((result) => (
                      <div
                        key={result.id}
                        className={`relative cursor-pointer transform hover:scale-105 transition-all duration-200 ${
                          result.id === currentResult.id
                            ? "ring-2 ring-blue-500 ring-offset-2"
                            : ""
                        }`}
                        onClick={() =>
                          window.open(`/gallery/${result.id}`, "_blank")
                        }
                      >
                        <img
                          src={`/images/${result.id}.png`}
                          alt={result.name}
                          className="w-full h-auto rounded-lg shadow-sm"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-1 rounded-b-lg">
                          <span className="text-white text-xs font-medium truncate block">
                            {result.name}
                          </span>
                        </div>
                        {result.id === currentResult.id && (
                          <div className="absolute top-1 right-1 bg-blue-500 text-white text-xs rounded-full px-1.5 py-0.5">
                            현재
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
          )}

          <p className="text-xs text-gray-500 text-center mt-3">
            내 성향과 다른 유형들을 비교해 보세요!
          </p>
        </div>
      )}
    </div>
  );
};

// 주요 컴포넌트
function ResultPage() {
  const { result, userVectors, restartTest } = useTest();
  const [activeTab, setActiveTab] = useState("traits");
  const [copied, setCopied] = useState(false);
  const resultCardRef = useRef(null);
  const fullResultRef = useRef(null);
  const [isSaving, setIsSaving] = useState(false); // isSaving 상태 추가

  // 카드 애니메이션 스타일
  const cardAnimationStyle = `
    @keyframes cardFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    .result-card-animate {
      animation: cardFloat 3s ease-in-out infinite;
    }
  `;

  // 스타일 태그 추가
  useEffect(() => {
    if (!document.getElementById("card-animation-style")) {
      const styleEl = document.createElement("style");
      styleEl.id = "card-animation-style";
      styleEl.textContent = cardAnimationStyle;
      document.head.appendChild(styleEl);

      return () => {
        const existingStyle = document.getElementById("card-animation-style");
        if (existingStyle) {
          existingStyle.remove();
        }
      };
    }
  }, []);

  // 외부 클릭 처리를 위한 이벤트 리스너
  useEffect(() => {
    function handleClickOutside(event) {
      const dropdown = document.getElementById("saveOptions");
      if (
        dropdown &&
        !dropdown.contains(event.target) &&
        event.target.id !== "saveButton"
      ) {
        dropdown.classList.add("hidden");
      }
    }

    // 이벤트 리스너 추가
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 탭 정의
  const tabs = [
    { id: "traits", label: "행동 특성" },
    { id: "media", label: "선호 미디어" },
    { id: "strengths", label: "장점" },
    { id: "challenges", label: "도전점" },
  ];

  // 결과가 없으면 로딩 표시
  if (!result) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center animate-pulse">
        <div className="w-12 h-12 rounded-full bg-blue-200 mx-auto mb-4"></div>
        <div className="h-6 bg-gray-200 rounded mb-4 w-3/4 mx-auto"></div>
        <div className="h-4 bg-gray-200 rounded mb-6 w-1/2 mx-auto"></div>
        <div className="h-40 bg-gray-100 rounded-lg mb-4"></div>
        <p className="text-gray-500">결과를 계산 중입니다...</p>
      </div>
    );
  }

  // URL 복사 함수
  const copyToClipboard = () => {
    const shareUrl = `${window.location.origin}?result=${result.id}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // 카카오톡 공유 함수 추가
  const shareToKakao = () => {
    if (window.Kakao && window.Kakao.Share) {
      try {
        // 결과 ID를 URL에 추가한 공유 링크 생성
        const shareUrl = `${window.location.origin}?result=${result.id}`;

        window.Kakao.Share.sendDefault({
          objectType: "feed",
          content: {
            title: `나의 정치성향 동물은 ${result.name}(${result.animal})입니다!`,
            description: "어느 당도 아닌 동물입니다만? - 정치성향테스트",
            imageUrl: `${window.location.origin}/images/${result.id}.png`,
            link: {
              mobileWebUrl: shareUrl,
              webUrl: shareUrl,
            },
          },
          buttons: [
            {
              title: "결과 확인하기",
              link: {
                mobileWebUrl: shareUrl,
                webUrl: shareUrl,
              },
            },
            {
              title: "테스트 해보기",
              link: {
                mobileWebUrl: window.location.origin,
                webUrl: window.location.origin,
              },
            },
          ],
        });
      } catch (error) {
        console.error("카카오 공유 오류:", error);
        alert("카카오 공유에 문제가 발생했습니다. 다른 방법으로 공유해주세요.");
      }
    } else {
      alert(
        "카카오톡 SDK를 불러오는데 실패했습니다. 다른 방법으로 공유해주세요."
      );
    }
  };

  // 개선된 이미지 저장 함수
  const saveResultImage = async (type) => {
    if (!result) return;

    // 저장 진행 중 표시
    setIsSaving(true);

    try {
      // html2canvas 동적 import
      const html2canvasModule = await import("html2canvas");
      const html2canvas = html2canvasModule.default;

      // 저장 전 UI 요소 상태 저장
      const saveOptions = document.getElementById("saveOptions");
      const saveOptionsDisplayStyle = saveOptions
        ? saveOptions.style.display
        : "none";

      // 저장 옵션 드롭다운 숨기기
      if (saveOptions) {
        saveOptions.style.display = "none";
      }

      // 사용자가 선택한 요소 (카드만 또는 전체 결과)
      const targetElement =
        type === "card" ? resultCardRef.current : fullResultRef.current;

      if (!targetElement) {
        throw new Error("대상 요소를 찾을 수 없습니다.");
      }

      // 캡처 설정 - 고품질 이미지를 위한 설정 개선
      const options = {
        backgroundColor: type === "card" ? null : "#ffffff",
        scale: 3, // 더 높은 해상도 (2 → 3)
        useCORS: true, // 외부 이미지 로드 허용
        allowTaint: true,
        logging: false,
        removeContainer: false, // 임시 컨테이너 제거
        imageTimeout: 15000, // 이미지 로드 타임아웃 증가
        width: targetElement.offsetWidth,
        height: targetElement.offsetHeight,
      };

      // 결과 요소를 캡처
      const canvas = await html2canvas(targetElement, options);

      // 이미지로 변환 (품질 개선)
      const imgData = canvas.toDataURL("image/png", 1.0); // 최대 품질(1.0) 설정

      // 이미지 다운로드 링크 생성
      const link = document.createElement("a");
      link.href = imgData;
      link.download = `정치성향테스트_${result.name}_${
        type === "card" ? "카드" : "전체결과"
      }.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // UI 원상복구
      if (saveOptions) {
        saveOptions.style.display = saveOptionsDisplayStyle;
      }

      alert("이미지가 저장되었습니다!");
    } catch (error) {
      console.error("이미지 생성 오류:", error);
      alert("이미지 생성에 실패했습니다. 화면을 직접 캡처하여 저장해주세요.");
    } finally {
      setIsSaving(false);
    }
  };

  // 카드만 전용으로 저장하는 함수 (캡처가 아닌 이미지 직접 다운로드)
  const saveCardImageDirectly = () => {
    if (!result) return;
    setIsSaving(true);

    try {
      // 카드 이미지 URL 가져오기
      const cardUrl = `/images/${result.id}.png`;

      // 이미지 로드
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = function () {
        // 캔버스 생성
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        // 이미지 그리기
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        // 캔버스를 이미지로 변환
        const dataURL = canvas.toDataURL("image/png", 1.0);

        // 이미지 다운로드
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = `정치성향테스트_${result.name}_카드.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setIsSaving(false);
        alert("카드 이미지가 저장되었습니다!");
      };

      img.onerror = function () {
        console.error("이미지 로드 실패:", cardUrl);
        alert("카드 이미지를 저장할 수 없습니다. 화면을 직접 캡처해 주세요.");
        setIsSaving(false);
      };

      img.src = cardUrl;
    } catch (error) {
      console.error("이미지 저장 오류:", error);
      alert("이미지 저장에 실패했습니다.");
      setIsSaving(false);
    }
  };

  return (
    <div
      className="bg-white p-6 rounded-xl shadow-lg max-w-3xl w-full forest-card animate-fade-in"
      ref={fullResultRef}
    >
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        테스트 결과
      </h1>

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

          {/* 공유 버튼 영역 */}
          <div className="mt-4 flex space-x-2 justify-center">
            <button
              className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm forest-button"
              onClick={shareToKakao}
              disabled={isSaving}
            >
              카카오톡 공유
            </button>

            {/* 드롭다운 메뉴로 변경한 이미지 저장 버튼 */}
            <div className="relative inline-block">
              <button
                id="saveButton"
                className="py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm forest-button flex items-center"
                onClick={(e) => {
                  e.stopPropagation(); // 이벤트 전파 방지
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
                    onClick={() => saveCardImageDirectly()} // 카드만 직접 저장 함수 사용
                  >
                    카드만 저장
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => saveResultImage("full")} // 전체 결과는 기존 함수 사용
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
            </div>
          </div>

          {/* 결과 하단 버튼 */}
          <button
            className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition duration-200 font-medium forest-button"
            onClick={restartTest}
          >
            다시 테스트하기
          </button>
        </div>
      </div>

      {/* 궁합 섹션 추가 */}
      <CompatibilitySection currentResult={result} allResults={results} />

      {/* 다른 결과 유형 갤러리 추가 */}
      <ResultGallery allResults={results} currentResult={result} />
    </div>
  );
}

export default ResultPage;
