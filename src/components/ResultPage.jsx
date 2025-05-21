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

// 각 동물에 맞는 정치성향 정의
const getPoliticalOrientation = (resultId) => {
  const orientations = {
    R1: "보수 권위주의 - 안보와 전통의 수호자",
    R2: "보수 자유주의 - 자유시장 옹호자",
    R3: "전통 보수주의 - 문화적 보수주의자",
    R4: "급진 진보 - 혁명적 이상주의자",
    R5: "개혁 진보 - 공정사회 투사",
    R6: "진보 자유주의 - 개인자유 옹호자",
    R7: "실용 중도 - 조화로운 중재자",
    R8: "중도 실용주의 - 근거기반 의사결정자",
    R9: "사회 중도진보 - 공동체 가치주의자",
    R10: "개혁적 중도 - 적응형 문제해결사",
  };
  return orientations[resultId] || "알 수 없는 성향";
};

// 각 동물에 맞는 선호 정당 특징 정의
const getPartyPreference = (resultId) => {
  const preferences = {
    R1: "안보와 질서를 강조하는 보수 계열 정당에 친화적입니다. 전통적 가치와 국가 안보를 최우선시하며, 권위 있는 리더십을 선호합니다.",
    R2: "경제 성장과 시장 자율성을 강조하는 보수 정당에 친화적입니다. 기업 활동의 자유와 규제 완화를 지지하며, 경제 전문가 출신 정치인의 정책에 공감합니다.",
    R3: "전통적 가치관을 지지하는 보수 정당에 친화적이나, 급진적 변화보다 점진적 발전을 선호합니다. 문화적 전통과 도덕적 가치를 중시하는 정치 세력을 지지합니다.",
    R4: "기존 체제의 근본적 변화를 추구하는 급진적 진보 정당에 친화적입니다. 사회 변혁과 평등을 위한 적극적 행동을 지지하며, 민중 주도의 정치 운동에 관심이 많습니다.",
    R5: "사회 정의와 개혁을 강조하는 진보 정당에 친화적입니다. 특히 반부패, 공정성, 투명성을 강조하는 정치 세력을 지지하며, 소외된 계층의 권리 보호에 관심이 많습니다.",
    R6: "개인의 자유와 사회적 진보를 동시에 추구하는 진보 성향 정당에 친화적입니다. 다양성과 평등을 중시하며, 개인의 권리와 자율성을 존중하는 정치인들에게 공감합니다.",
    R7: "중도 성향의 정당이나 양 진영 간 화합을 강조하는 정치인에게 끌립니다. 극단을 피하고 실용적 타협을 통한 문제 해결을 선호하며, 통합을 지향하는 정치 세력에 관심을 보입니다.",
    R8: "데이터와 증거에 기반한 실용적 접근을 하는 정치 세력을 지지합니다. 이념적 색채보다 문제의 효율적 해결책을 중시하며, 전문성과 합리성을 갖춘 정치인에게 끌립니다.",
    R9: "공동체 가치와 포용적 복지를 강조하는 중도진보 정당에 친화적입니다. 사회적 연대와 상호 협력을 중시하며, 참여 민주주의를 지향하는 정치 세력에 공감합니다.",
    R10: "변화와 혁신을 추구하면서도 현실적 방안을 중시하는 중도개혁 세력에 친화적입니다. 유연한 사고와 상황 적응력을 갖춘 정치인을 선호하며, 혁신적 접근법에 관심이 많습니다.",
  };
  return preferences[resultId] || "특별히 선호하는 정당 특성이 없습니다.";
};

// 주요 컴포넌트
function ResultPage() {
  const { result, userVectors, restartTest } = useTest();
  const [activeTab, setActiveTab] = useState("traits");
  const [copied, setCopied] = useState(false);
  const resultCardRef = useRef(null);
  const fullResultRef = useRef(null);
  const [isSaving, setIsSaving] = useState(false);
  
  // 해당 결과의 정치적 성향 가져오기
  const politicalOrientation = getPoliticalOrientation(result?.id);
  // 해당 결과의 선호 정당 특징 가져오기
  const partyPreference = getPartyPreference(result?.id);

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
    useEffect(() => {
    // 결과 페이지에서 광고 활성화
    if (window.adsbygoogle) {
      try {
        // 자동 광고 활성화
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }
    
    // 컴포넌트가 언마운트될 때 정리
    return () => {
      // 다른 페이지로 이동할 때 광고 요청 일시 중지 (선택사항)
      // if (window.adsbygoogle) {
      //   (window.adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 1;
      // }
    };
  }, []);

  // 탭 정의
  const tabs = [
    { id: "traits", label: "행동 특성" },
    { id: "media", label: "선호 미디어" },
    { id: "strengths", label: "장점" },
    { id: "challenges", label: "도전점" },
    { id: "party", label: "선호 정당 특징" }, // 새로운 탭 추가
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
      {/* 카카오 광고 영역 - 결과 카드 상단에 추가 */}
      <div className="mb-6 text-center">
        <div dangerouslySetInnerHTML={{
          __html: `
            <ins class="kakao_ad_area" style="display:none;"
              data-ad-unit="DAN-GhVfyT9ccl0nsDOW"
              data-ad-width="320"
              data-ad-height="100">
            </ins>
            <script type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></script>
          `
        }} />
      </div>
    
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
      {/* 하단 다시 테스트하기 버튼 - 크고 눈에 띄게 */}
<div className="mt-8 text-center">
  <button
    className="py-4 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold forest-button w-full sm:w-1/2 mx-auto shadow-lg transition-all duration-300 hover:shadow-xl"
    onClick={restartTest}
    disabled={isSaving}
  >
    다시 테스트하기
  </button>
</div>
    </div>
  );
}

export default ResultPage;