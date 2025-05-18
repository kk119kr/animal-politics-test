// src/data/questions.js
// 테스트 질문 데이터 (15개 문항) - 7개 문항 변경 적용 (간결한 버전)
export const questions = [
  {
    id: 1,
    question:
      "숲속 주택 가격이 급등하여 많은 동물들이 집을 구하기 어려워졌습니다.",
    options: [
      {
        id: "A",
        text: "정부가 적극 개입하여 주택 공급을 늘리고 가격을 규제해야 합니다.",
        scores: {
          reform: 10,
          collectivism: 20,
          pragmatism: 5,
          authoritarianism: 15,
          engagement: 10,
        },
      },
      {
        id: "B",
        text: "시장 원리에 맡기고 규제를 완화해야 합니다. 정부 개입은 시장을 왜곡합니다.",
        scores: {
          reform: -5,
          collectivism: -20,
          pragmatism: 15,
          authoritarianism: -10,
          engagement: 0,
        },
      },
    ],
    imageFile: "q1.png",
  },
  {
    id: 2,
    question:
      "큰 폭풍이 숲을 강타한 후, 피해 복구에 대한 논의가 시작되었습니다.",
    options: [
      {
        id: "A",
        text: "숲의 지도자가 신속하게 계획을 세우고 모든 동물에게 역할을 지정해야 합니다. 위기 때는 강력한 지휘가 필요해요.",
        scores: {
          reform: -5,
          collectivism: 10,
          pragmatism: 15,
          authoritarianism: 20,
          engagement: 10,
        },
      },
      {
        id: "B",
        text: "각 지역 동물들이 자발적으로 모여 피해 상황을 논의하고 함께 해결책을 찾아야 합니다.",
        scores: {
          reform: 5,
          collectivism: -5,
          pragmatism: -10,
          authoritarianism: -20,
          engagement: -5,
        },
      },
    ],
    imageFile: "q2.png",
  },
  {
    id: 3,
    question:
      "멀리서 온 박쥐 무리가 숲 가장자리 동굴에 정착하려 합니다. 그들은 다른 생활 방식을 가지고 있습니다.",
    options: [
      {
        id: "A",
        text: "환영해야 합니다. 다양한 생활 방식이 숲을 더 풍요롭게 만들고, 서로에게서 배울 점이 많을 거예요.",
        scores: {
          reform: 20,
          collectivism: 10,
          pragmatism: -5,
          authoritarianism: -15,
          engagement: 5,
        },
      },
      {
        id: "B",
        text: "우리 숲의 규칙과 생활 방식에 적응할 의지가 있는지 확인해야 합니다. 조화로운 공존이 중요하니까요.",
        scores: {
          reform: -20,
          collectivism: -5,
          pragmatism: 10,
          authoritarianism: 15,
          engagement: -5,
        },
      },
    ],
    imageFile: "q3.png",
  },
  {
    id: 4,
    question:
      "어린 동물들을 위한 새로운 교육 방식에 대한 논쟁이 일고 있습니다.",
    options: [
      {
        id: "A",
        text: "규율과 전통 지식을 중심으로 가르쳐야 합니다. 기본기가 탄탄해야 미래에 적응할 수 있어요.",
        scores: {
          reform: -15,
          collectivism: 5,
          pragmatism: 10,
          authoritarianism: 15,
          engagement: -10,
        },
      },
      {
        id: "B",
        text: "창의력과 자유로운 탐험을 격려해야 합니다. 변화하는 숲에서는 새로운 생각이 중요해요.",
        scores: {
          reform: 15,
          collectivism: -5,
          pragmatism: -10,
          authoritarianism: -15,
          engagement: 10,
        },
      },
    ],
    imageFile: "q4.png",
  },
  {
    id: 5,
    question:
      "숲속에서 강력하지만 위험성 있는 '불의 돌' 에너지 사용에 대한 논란이 일고 있습니다.",
    options: [
      {
        id: "A",
        text: "'불의 돌'을 계속 사용하되, 안전 기술을 강화하고 점진적으로 대안을 찾아야 합니다.",
        scores: {
          reform: -10,
          collectivism: 0,
          pragmatism: 15,
          authoritarianism: 10,
          engagement: 0,
        },
      },
      {
        id: "B",
        text: "'불의 돌'을 즉시 중단하고 햇빛과 바람 같은 자연 친화적 에너지로 전환해야 합니다.",
        scores: {
          reform: 20,
          collectivism: 10,
          pragmatism: -5,
          authoritarianism: -5,
          engagement: 15,
        },
      },
    ],
    imageFile: "q5.png",
  },
  {
    id: 6,
    question:
      "숲속에서 나이 들거나 아픈 동물들을 어떻게 돌볼지 논의 중입니다.",
    options: [
      {
        id: "A",
        text: "모든 동물이 더 많은 열매를 공동 창고에 기부하여 포괄적 돌봄 체계를 만들어야 합니다.",
        scores: {
          reform: 5,
          collectivism: 20,
          pragmatism: 0,
          authoritarianism: 5,
          engagement: 10,
        },
      },
      {
        id: "B",
        text: "개인과 가족이 자신의 미래를 책임지고, 공동체는 최소한의 지원만 제공해야 합니다.",
        scores: {
          reform: -5,
          collectivism: -20,
          pragmatism: 10,
          authoritarianism: -5,
          engagement: -5,
        },
      },
    ],
    imageFile: "q6.png",
  },
  {
    id: 7,
    question:
      "두 무리의 동물이 같은 먹이터를 두고 분쟁 중입니다. 어떻게 해결해야 할까요?",
    options: [
      {
        id: "A",
        text: "숲의 평화를 위해 중재자가 규칙을 정하고, 모든 동물이 이를 따라야 합니다.",
        scores: {
          reform: -5,
          collectivism: 10,
          pragmatism: 10,
          authoritarianism: 15,
          engagement: 0,
        },
      },
      {
        id: "B",
        text: "당사자들이 직접 대화하고 타협점을 찾아야 합니다. 외부의 개입은 갈등만 키울 수 있어요.",
        scores: {
          reform: 10,
          collectivism: -5,
          pragmatism: -5,
          authoritarianism: -15,
          engagement: 5,
        },
      },
    ],
    imageFile: "q7.png",
  },
  {
    id: 8,
    question: "숲속의 큰 기업들이 성장하면서 그 영향력에 대한 우려가 커지고 있습니다.",
    options: [
      {
        id: "A",
        text: "기업의 자유로운 활동과 혁신을 장려해야 합니다. 과도한 규제는 발전을 저해합니다.",
        scores: {
          reform: -5,
          collectivism: -20,
          pragmatism: 15,
          authoritarianism: -10,
          engagement: 0,
        },
      },
      {
        id: "B",
        text: "대기업 규제를 강화하고 경제력 집중을 막아야 합니다. 공정한 시장 질서가 중요합니다.",
        scores: {
          reform: 10,
          collectivism: 15,
          pragmatism: 5,
          authoritarianism: 10,
          engagement: 10,
        },
      },
    ],
    imageFile: "q8.png",
  },
  {
    id: 9,
    question:
      "반딧불이들이 빛을 이용한 새로운 통신 방법을 개발했습니다. 이를 숲 전체에 도입할지 논의 중입니다.",
    options: [
      {
        id: "A",
        text: "신중하게 검증을 거친 후 점진적으로 도입해야 합니다. 급격한 변화는 혼란을 일으킬 수 있어요.",
        scores: {
          reform: -15,
          collectivism: 0,
          pragmatism: 15,
          authoritarianism: 5,
          engagement: -10,
        },
      },
      {
        id: "B",
        text: "혁신적인 방법은 빠르게 받아들여 모두가 혜택을 누려야 합니다. 발전을 위한 변화는 중요해요.",
        scores: {
          reform: 20,
          collectivism: 5,
          pragmatism: -5,
          authoritarianism: -10,
          engagement: 15,
        },
      },
    ],
    imageFile: "q9.png",
  },
  {
    id: 10,
    question: "최근 계절의 변화가 불규칙해져 식량 확보에 어려움이 생겼습니다.",
    options: [
      {
        id: "A",
        text: "공동의 식량 저장고를 늘리고, 모든 동물이 협력하여 위기에 대비해야 합니다.",
        scores: {
          reform: 5,
          collectivism: 20,
          pragmatism: 10,
          authoritarianism: 5,
          engagement: 10,
        },
      },
      {
        id: "B",
        text: "각자 다양한 식량원을 개발하고 적응하는 능력을 키워야 합니다. 변화는 피할 수 없어요.",
        scores: {
          reform: 10,
          collectivism: -15,
          pragmatism: 5,
          authoritarianism: -10,
          engagement: 5,
        },
      },
    ],
    imageFile: "q10.png",
  },
  {
    id: 11,
    question: "숲속에서 성별에 따른 기회와 대우에 차이가 있다는 주장이 제기되었습니다.",
    options: [
      {
        id: "A",
        text: "생물학적 차이와 전통적 역할을 존중해야 합니다. 지나친 평등은 혼란을 가져옵니다.",
        scores: {
          reform: -20,
          collectivism: 0,
          pragmatism: 10,
          authoritarianism: 15,
          engagement: -10,
        },
      },
      {
        id: "B",
        text: "성별에 따른 차별을 해소하고 모든 동물에게 동등한 기회를 보장해야 합니다.",
        scores: {
          reform: 20,
          collectivism: 10,
          pragmatism: 0,
          authoritarianism: -15,
          engagement: 15,
        },
      },
    ],
    imageFile: "q11.png",
  },
  {
    id: 12,
    question:
      "숲속 학교에서 어린 동물들의 교육 방식에 대한 논쟁이 일고 있습니다.",
    options: [
      {
        id: "A",
        text: "공정한 경쟁과 실력 평가 중심의 교육이 중요합니다. 수월성이 우선입니다.",
        scores: {
          reform: -15,
          collectivism: -15,
          pragmatism: 10,
          authoritarianism: 10,
          engagement: 0,
        },
      },
      {
        id: "B",
        text: "협력과 창의성 중심의 평등한 교육 환경이 중요합니다. 개인의 성장이 우선입니다.",
        scores: {
          reform: 15,
          collectivism: 15,
          pragmatism: -5,
          authoritarianism: -10,
          engagement: 10,
        },
      },
    ],
    imageFile: "q12.png",
  },
  {
    id: 13,
    question:
      "숲 외곽에 새로운 포식자가 나타나 작은 동물들을 위협하고 있습니다.",
    options: [
      {
        id: "A",
        text: "강한 동물들로 구성된 방어대를 조직해 숲 전체를 보호해야 합니다. 안전이 최우선이에요.",
        scores: {
          reform: -5,
          collectivism: 15,
          pragmatism: 10,
          authoritarianism: 15,
          engagement: 15,
        },
      },
      {
        id: "B",
        text: "각 지역별로 자체 방어 시스템을 개발하고, 서로 도움이 필요할 때 협력하는 게 좋겠어요.",
        scores: {
          reform: 10,
          collectivism: -5,
          pragmatism: 5,
          authoritarianism: -15,
          engagement: 5,
        },
      },
    ],
    imageFile: "q13.png",
  },
  {
    id: 14,
    question:
      "치료 효과가 있는 희귀 식물이 발견되었지만, 무분별하게 채집하면 멸종될 위험이 있습니다.",
    options: [
      {
        id: "A",
        text: "숲의 위원회가 엄격히 관리하고, 필요한 경우에만 제한적으로 사용해야 합니다.",
        scores: {
          reform: -10,
          collectivism: 10,
          pragmatism: 5,
          authoritarianism: 15,
          engagement: 0,
        },
      },
      {
        id: "B",
        text: "모든 동물에게 지식을 공유하고, 공동의 윤리적 가이드라인을 함께 만들어야 합니다.",
        scores: {
          reform: 15,
          collectivism: 5,
          pragmatism: -5,
          authoritarianism: -15,
          engagement: 10,
        },
      },
    ],
    imageFile: "q14.png",
  },
  {
    id: 15,
    question:
      "숲의 미래 방향에 대해 거북이와 카멜레온이 서로 다른 조언을 했습니다.",
    options: [
      {
        id: "A",
        text: "거북이처럼 전통과 안정을 지키며 변화에 신중하게 대응해야 합니다.",
        scores: {
          reform: -15,
          collectivism: 5,
          pragmatism: 10,
          authoritarianism: 10,
          engagement: -10,
        },
      },
      {
        id: "B",
        text: "카멜레온처럼 환경에 적응하며 새로운 변화를 적극적으로 받아들여야 합니다.",
        scores: {
          reform: 20,
          collectivism: 0,
          pragmatism: -5,
          authoritarianism: -10,
          engagement: 15,
        },
      },
    ],
    imageFile: "q15.png",
  },
];

export default questions;