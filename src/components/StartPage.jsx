import React from "react";
import { useTest } from "../contexts/TestContext";

function StartPage() {
  const { startTest } = useTest();

  return (
    <div className="flex flex-col items-center max-w-[750px] mx-auto">
      {/* 메인 일러스트 영역 - 이미지 내에 타이틀 포함됨 */}
      <div className="w-full mt-[5vh] mb-4">
        <img
          src="/images/main.png"
          alt="깊은 숲속에서 당신은 어떤 동물로 살아가고 있을까요?"
          className="w-full h-auto object-contain rounded-xl"
        />
      </div>

      {/* 하단 설명 영역 */}
      <div className="w-[90%] text-center my-4">
        <h2 className="text-2xl font-bold mb-3 text-green-900">
          정치성향테스트
        </h2>
        <p className="text-base leading-relaxed text-gray-700 px-2">
          이 테스트는 당신의 정치 성향을 숲속 우화 속 동물 캐릭터로 표현합니다.
          <br />
          총 15개의 질문에 답하고 당신의 숨겨진 성향을 확인해보세요!
          <br />
          <br />
          <span className="text-sm italic text-gray-600">
            본 테스트는 재미 요소를 위한 것이며, 특정 정당 지지를 목적으로 하지
            않습니다.
          </span>
        </p>
      </div>

      {/* 시작 버튼 */}
      <div className="mt-6 mb-[9vh] w-full flex justify-center">
        <button
          onClick={startTest}
          className="w-[250px] py-4 text-white bg-green-700 rounded-full text-lg font-bold shadow-lg transition-all duration-300 hover:bg-green-800 hover:shadow-xl hover:-translate-y-1"
        >
          테스트 시작하기
        </button>
      </div>
    </div>
  );
}

export default StartPage;
