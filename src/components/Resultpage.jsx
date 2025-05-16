import { useTest } from '../contexts/TestContext';
import { useState, useEffect } from 'react';

// 벡터 값을 표시하는 온도계 컴포넌트
const VectorThermometer = ({ label, value, description }) => {
  // 값의 범위를 퍼센트로 변환 (-100 ~ 100 -> 0 ~ 100%)
  const percent = ((value + 100) / 2);
  
  // 값에 따른 색상 지정
  let color = 'bg-gray-400';
  if (value > 50) color = 'bg-red-500';
  else if (value > 0) color = 'bg-orange-400';
  else if (value > -50) color = 'bg-blue-400';
  else color = 'bg-blue-600';

  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    // 애니메이션 효과를 위해 지연 후 너비 설정
    setTimeout(() => {
      setWidth(percent);
    }, 200);
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
          className={`py-2 px-4 text-sm font-medium transition-colors duration-200 ${
            activeTab === tab.id
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

const ResultPage = () => {
  const { result, userVectors, restartTest } = useTest();
  const [activeTab, setActiveTab] = useState('traits');
  const [copied, setCopied] = useState(false);
  
  // 탭 정의
  const tabs = [
    { id: 'traits', label: '행동 특성' },
    { id: 'media', label: '선호 미디어' },
    { id: 'strengths', label: '장점' },
    { id: 'challenges', label: '도전점' }
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
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };

  // 희귀도에 따른 스타일 지정
  const rarityStyles = {
    'C': { 
      border: 'rarity-common',
      badge: 'bg-gray-400',
      name: 'text-gray-800',
      label: '일반'
    },
    'R': {
      border: 'rarity-rare',
      badge: 'bg-blue-500',
      name: 'text-blue-700',
      label: '희귀'
    },
    'SR': {
      border: 'rarity-super-rare',
      badge: 'bg-purple-500',
      name: 'text-purple-700',
      label: '초희귀'
    },
    'UR': {
      border: 'rarity-ultra-rare',
      badge: 'bg-yellow-500',
      name: 'text-yellow-700',
      label: '전설'
    }
  };

  const rarityStyle = rarityStyles[result.rarity] || rarityStyles['C'];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl w-full forest-card animate-fade-in">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">테스트 결과</h1>
      
      <div className="md:flex gap-6">
        {/* 결과 카드 섹션 */}
        <div className="md:w-2/5">
          <div className={`rounded-xl overflow-hidden border-2 ${rarityStyle.border} shadow-lg relative animate-scale-in`}>
            {/* 카드 헤더 - 희귀도 표시 */}
            <div className={`${rarityStyle.badge} py-1 px-3 text-white text-xs font-bold rarity-badge`}>
              {rarityStyle.label}
            </div>
            
            {/* 카드 본문 */}
            <div className="p-6 bg-white">
              {/* 동물 아이콘 (실제 구현 시 이미지로 교체) */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-6xl">
                  {result.animal === '황금독수리' && '🦅'}
                  {result.animal === '은여우' && '🦊'}
                  {result.animal === '천년거북' && '🐢'}
                  {result.animal === '불사조' && '🔥'}
                  {result.animal === '청룡' && '🐉'}
                  {result.animal === '페가수스' && '🦄'}
                  {result.animal === '여우원숭이' && '🐒'}
                  {result.animal === '올빼미' && '🦉'}
                  {result.animal === '비버' && '🦫'}
                  {result.animal === '카멜레온' && '🦎'}
                </span>
              </div>
              
              {/* 결과 타이틀 */}
              <div className="text-center mb-4">
                <h2 className={`text-xl font-bold ${rarityStyle.name}`}>{result.name}</h2>
                <p className="text-gray-600">{result.animal}</p>
              </div>
              
              {/* 명대사 */}
              <div className="bg-gray-50 p-3 rounded-lg mb-4 italic text-gray-700 text-sm">
                "{result.quote}"
              </div>
              
              {/* 설명 */}
              <p className="text-gray-700 text-sm mb-3">
                {result.description}
              </p>
            </div>
          </div>
          
          {/* 공유 버튼 */}
          <div className="mt-4 flex space-x-2 justify-center">
            <button 
              className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm forest-button"
              onClick={() => window.open('https://developers.kakao.com/docs/latest/ko/message/js-link#custom-template-msg', '_blank')}
            >
              카카오톡 공유
            </button>
            <button 
              className="py-2 px-4 bg-blue-400 hover:bg-blue-500 text-white rounded-lg text-sm forest-button"
              onClick={() => window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(`나의 정치성향 동물은 ${result.name}(${result.animal})입니다! - 어느 당도 아닌 동물입니다만? 테스트 해보세요: ` + window.location.href), '_blank')}
            >
              트위터 공유
            </button>
            <button 
              className="py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm forest-button"
              onClick={copyToClipboard}
            >
              {copied ? '✓ 복사됨' : 'URL 복사'}
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
          <ResultTabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
          
          {/* 탭 내용 */}
          <div className="bg-white rounded-lg p-2 animate-fade-in">
            {activeTab === 'traits' && (
              <div>
                <h3 className="font-bold text-md mb-2">행동 특성</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                  {result.traits.map((trait, index) => (
                    <li key={index}>{trait}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'media' && (
              <div>
                <h3 className="font-bold text-md mb-2">선호하는 미디어/정보</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{result.media}</p>
              </div>
            )}
            
            {activeTab === 'strengths' && (
              <div>
                <h3 className="font-bold text-md mb-2">장점</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{result.strengths}</p>
              </div>
            )}
            
            {activeTab === 'challenges' && (
              <div>
                <h3 className="font-bold text-md mb-2">도전점</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{result.challenges}</p>
              </div>
            )}
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
    </div>
  );
};

export default ResultPage;