import { useTest } from '../contexts/TestContext';

const StartPage = () => {
  const { startTest } = useTest();

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full forest-card">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">어느 당도 아닌 동물입니다만?</h1>
      <p className="text-center text-gray-600 mb-6">정치심리테스트</p>
      
      {/* 테스트 설명 카드 */}
      <div className="mt-6 bg-blue-50 rounded-lg p-5 text-gray-700 animate-scale-in">
        <p className="mb-3 leading-relaxed">
          이 테스트는 당신의 정치성향을 숲속 우화 속 동물 캐릭터로 표현합니다.
          총 15개의 질문에 답하고 당신의 정치적 캐릭터를 확인해보세요!
        </p>
        <p className="text-sm text-blue-600 italic">"깊은 숲속에서 당신은 어떤 동물로 살아가고 있을까요?"</p>
      </div>

      {/* 희귀도 소개 */}
      <div className="mt-6 grid grid-cols-2 gap-2">
        <div className="p-2 rounded bg-gray-100 text-center">
          <span className="inline-block w-3 h-3 rounded-full bg-gray-400 mr-1"></span>
          <span className="text-sm">일반 (46%)</span>
        </div>
        <div className="p-2 rounded bg-gray-100 text-center">
          <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
          <span className="text-sm">희귀 (30%)</span>
        </div>
        <div className="p-2 rounded bg-gray-100 text-center">
          <span className="inline-block w-3 h-3 rounded-full bg-purple-500 mr-1"></span>
          <span className="text-sm">초희귀 (10%)</span>
        </div>
        <div className="p-2 rounded bg-gray-100 text-center">
          <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-1"></span>
          <span className="text-sm">전설 (14%)</span>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-600 space-y-2">
        <p className="flex items-center">
          <span className="text-blue-500 mr-2">•</span>
          특정 정당 지지가 아닌, 정치 성향을 알아보는 테스트입니다.
        </p>
        <p className="flex items-center">
          <span className="text-blue-500 mr-2">•</span>
          사회적 상황에 대한 본인의 솔직한 생각을 선택해주세요.
        </p>
        <p className="flex items-center">
          <span className="text-blue-500 mr-2">•</span>
          테스트 결과는 SNS에 공유할 수 있습니다.
        </p>
      </div>
      
      <button 
        className="mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition duration-200 font-medium text-lg forest-button"
        onClick={startTest}
      >
        테스트 시작하기
      </button>
      
      <p className="mt-4 text-center text-gray-500 text-xs">
        * 본 테스트는 재미 요소를 위한 것이며, 과학적 검증을 거치지 않았습니다.
      </p>
    </div>
  );
};

export default StartPage;