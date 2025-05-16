// src/data/questions.js
// 테스트 질문 데이터 (15개 문항)
export const questions = [
  {
    id: 1,
    question: "꿀벌들이 모은 꿀 저장고가 넘치고 있습니다. 이 풍부한 자원을 어떻게 관리해야 할까요?",
    options: [
      {
        id: "A",
        text: "모든 동물이 필요한 만큼 자유롭게 가져갈 수 있도록 개방합니다. 자연은 모두의 것이니까요.",
        scores: { reform: 15, collectivism: 20, pragmatism: -15, authoritarianism: -10, engagement: 5 }
      },
      {
        id: "B",
        text: "꿀을 모은 꿀벌들이 관리하고, 다른 동물들은 작업이나 거래를 통해 얻을 수 있게 합니다.",
        scores: { reform: -15, collectivism: -20, pragmatism: 15, authoritarianism: 10, engagement: -5 }
      }
    ],
    imageFile: "q01.png"
  },
  {
    id: 2,
    question: "큰 폭풍이 숲을 강타한 후, 피해 복구에 대한 논의가 시작되었습니다.",
    options: [
      {
        id: "A",
        text: "숲의 지도자가 신속하게 계획을 세우고 모든 동물에게 역할을 지정해야 합니다. 위기 때는 강력한 지휘가 필요해요.",
        scores: { reform: -5, collectivism: 10, pragmatism: 15, authoritarianism: 20, engagement: 10 }
      },
      {
        id: "B",
        text: "각 지역 동물들이 자발적으로 모여 피해 상황을 논의하고 함께 해결책을 찾아야 합니다.",
        scores: { reform: 5, collectivism: -5, pragmatism: -10, authoritarianism: -20, engagement: -5 }
      }
    ],
    imageFile: "q02.png"
  },
  {
    id: 3,
    question: "멀리서 온 박쥐 무리가 숲 가장자리 동굴에 정착하려 합니다. 그들은 다른 생활 방식을 가지고 있습니다.",
    options: [
      {
        id: "A",
        text: "환영해야 합니다. 다양한 생활 방식이 숲을 더 풍요롭게 만들고, 서로에게서 배울 점이 많을 거예요.",
        scores: { reform: 20, collectivism: 10, pragmatism: -5, authoritarianism: -15, engagement: 5 }
      },
      {
        id: "B",
        text: "우리 숲의 규칙과 생활 방식에 적응할 의지가 있는지 확인해야 합니다. 조화로운 공존이 중요하니까요.",
        scores: { reform: -20, collectivism: -5, pragmatism: 10, authoritarianism: 15, engagement: -5 }
      }
    ],
    imageFile: "q03.png"
  },
  {
    id: 4,
    question: "어린 동물들을 위한 새로운 교육 방식에 대한 논쟁이 일고 있습니다.",
    options: [
      {
        id: "A",
        text: "규율과 전통 지식을 중심으로 가르쳐야 합니다. 기본기가 탄탄해야 미래에 적응할 수 있어요.",
        scores: { reform: -15, collectivism: 5, pragmatism: 10, authoritarianism: 15, engagement: -10 }
      },
      {
        id: "B",
        text: "창의력과 자유로운 탐험을 격려해야 합니다. 변화하는 숲에서는 새로운 생각이 중요해요.",
        scores: { reform: 15, collectivism: -5, pragmatism: -10, authoritarianism: -15, engagement: 10 }
      }
    ],
    imageFile: "q04.png"
  },
  {
    id: 5,
    question: "산에서 내려오는 물줄기를 변경해 건조한 지역에 물을 공급하자는 제안이 있습니다.",
    options: [
      {
        id: "A",
        text: "자연의 순리를 존중해야 합니다. 인위적인 변경은 예상치 못한 문제를 일으킬 수 있어요.",
        scores: { reform: -15, collectivism: 5, pragmatism: -10, authoritarianism: 5, engagement: -10 }
      },
      {
        id: "B",
        text: "기술과 지식을 활용해 환경을 개선해야 합니다. 모두에게 혜택이 돌아갈 거예요.",
        scores: { reform: 15, collectivism: 0, pragmatism: 15, authoritarianism: -5, engagement: 15 }
      }
    ],
    imageFile: "q05.png"
  },
  {
    id: 6,
    question: "매년 열리는 열매 축제에서 일부 동물들이 전통 방식을 바꾸자고 제안했습니다.",
    options: [
      {
        id: "A",
        text: "오랜 세월 지켜온 전통은 존중되어야 합니다. 변화는 신중하게 검토한 후에 결정해야 해요.",
        scores: { reform: -20, collectivism: 10, pragmatism: -5, authoritarianism: 10, engagement: -5 }
      },
      {
        id: "B",
        text: "시대에 맞게 축제도 변화해야 합니다. 새로운 아이디어로 모두가 더 즐거운 축제를 만들어요.",
        scores: { reform: 20, collectivism: -5, pragmatism: 5, authoritarianism: -10, engagement: 10 }
      }
    ],
    imageFile: "q06.png"
  },
  {
    id: 7,
    question: "두 무리의 동물이 같은 먹이터를 두고 분쟁 중입니다. 어떻게 해결해야 할까요?",
    options: [
      {
        id: "A",
        text: "숲의 평화를 위해 중재자가 규칙을 정하고, 모든 동물이 이를 따라야 합니다.",
        scores: { reform: -5, collectivism: 10, pragmatism: 10, authoritarianism: 15, engagement: 0 }
      },
      {
        id: "B",
        text: "당사자들이 직접 대화하고 타협점을 찾아야 합니다. 외부의 개입은 갈등만 키울 수 있어요.",
        scores: { reform: 10, collectivism: -5, pragmatism: -5, authoritarianism: -15, engagement: 5 }
      }
    ],
    imageFile: "q07.png"
  },
  {
    id: 8,
    question: "일부 동물들이 다니는 숲 길이 위험하다는 보고가 있습니다.",
    options: [
      {
        id: "A",
        text: "안전을 위해 위험한 길은 폐쇄하고, 모든 동물이 안전한 길만 이용하도록 규제해야 합니다.",
        scores: { reform: -10, collectivism: 15, pragmatism: 5, authoritarianism: 15, engagement: 10 }
      },
      {
        id: "B",
        text: "위험을 알리는 표지만 세우고, 각자 판단에 맡겨야 합니다. 모든 선택에는 책임이 따르니까요.",
        scores: { reform: 5, collectivism: -15, pragmatism: 0, authoritarianism: -20, engagement: -5 }
      }
    ],
    imageFile: "q08.png"
  },
  {
    id: 9,
    question: "반딧불이들이 빛을 이용한 새로운 통신 방법을 개발했습니다. 이를 숲 전체에 도입할지 논의 중입니다.",
    options: [
      {
        id: "A",
        text: "신중하게 검증을 거친 후 점진적으로 도입해야 합니다. 급격한 변화는 혼란을 일으킬 수 있어요.",
        scores: { reform: -15, collectivism: 0, pragmatism: 15, authoritarianism: 5, engagement: -10 }
      },
      {
        id: "B",
        text: "혁신적인 방법은 빠르게 받아들여 모두가 혜택을 누려야 합니다. 발전을 위한 변화는 중요해요.",
        scores: { reform: 20, collectivism: 5, pragmatism: -5, authoritarianism: -10, engagement: 15 }
      }
    ],
    imageFile: "q09.png"
  },
  {
    id: 10,
    question: "최근 계절의 변화가 불규칙해져 식량 확보에 어려움이 생겼습니다.",
    options: [
      {
        id: "A",
        text: "공동의 식량 저장고를 늘리고, 모든 동물이 협력하여 위기에 대비해야 합니다.",
        scores: { reform: 5, collectivism: 20, pragmatism: 10, authoritarianism: 5, engagement: 10 }
      },
      {
        id: "B",
        text: "각자 다양한 식량원을 개발하고 적응하는 능력을 키워야 합니다. 변화는 피할 수 없어요.",
        scores: { reform: 10, collectivism: -15, pragmatism: 5, authoritarianism: -10, engagement: 5 }
      }
    ],
    imageFile: "q10.png"
  },
  {
    id: 11,
    question: "한 이야기꾼이 숲의 지도자를 비판하는 이야기를 하고 있습니다.",
    options: [
      {
        id: "A",
        text: "숲의 화합을 위해 지나친 비판은 자제해야 합니다. 이야기도 책임감 있게 해야 해요.",
        scores: { reform: -10, collectivism: 10, pragmatism: 5, authoritarianism: 15, engagement: -15 }
      },
      {
        id: "B",
        text: "모든 동물은 자유롭게 의견을 표현할 권리가 있습니다. 다양한 목소리가 숲을 건강하게 만들어요.",
        scores: { reform: 15, collectivism: -5, pragmatism: -5, authoritarianism: -20, engagement: 10 }
      }
    ],
    imageFile: "q11.png"
  },
  {
    id: 12,
    question: "어린 다람쥐들이 전통적인 도토리 수집법 대신 새로운 방법을 배우고 싶어합니다.",
    options: [
      {
        id: "A",
        text: "선조들의 지혜가 담긴 전통적인 방법을 먼저 배워야 합니다. 기본기가 중요해요.",
        scores: { reform: -15, collectivism: 5, pragmatism: 0, authoritarianism: 15, engagement: -10 }
      },
      {
        id: "B",
        text: "새로운 시도를 격려하고 지원해야 합니다. 혁신은 젊은 세대의 창의력에서 시작돼요.",
        scores: { reform: 15, collectivism: 0, pragmatism: 5, authoritarianism: -15, engagement: 15 }
      }
    ],
    imageFile: "q12.png"
  },
  {
    id: 13,
    question: "숲 외곽에 새로운 포식자가 나타나 작은 동물들을 위협하고 있습니다.",
    options: [
      {
        id: "A",
        text: "강한 동물들로 구성된 방어대를 조직해 숲 전체를 보호해야 합니다. 안전이 최우선이에요.",
        scores: { reform: -5, collectivism: 15, pragmatism: 10, authoritarianism: 15, engagement: 15 }
      },
      {
        id: "B",
        text: "각 지역별로 자체 방어 시스템을 개발하고, 서로 도움이 필요할 때 협력하는 게 좋겠어요.",
        scores: { reform: 10, collectivism: -5, pragmatism: 5, authoritarianism: -15, engagement: 5 }
      }
    ],
    imageFile: "q13.png"
  },
  {
    id: 14,
    question: "치료 효과가 있는 희귀 식물이 발견되었지만, 무분별하게 채집하면 멸종될 위험이 있습니다.",
    options: [
      {
        id: "A",
        text: "숲의 위원회가 엄격히 관리하고, 필요한 경우에만 제한적으로 사용해야 합니다.",
        scores: { reform: -10, collectivism: 10, pragmatism: 5, authoritarianism: 15, engagement: 0 }
      },
      {
        id: "B",
        text: "모든 동물에게 지식을 공유하고, 공동의 윤리적 가이드라인을 함께 만들어야 합니다.",
        scores: { reform: 15, collectivism: 5, pragmatism: -5, authoritarianism: -15, engagement: 10 }
      }
    ],
    imageFile: "q14.png"
  },
  {
    id: 15,
    question: "오랜 세월 숲을 지켜온 늙은 부엉이가 '변화하는 시대에 대비해야 한다'고 조언했습니다.",
    options: [
      {
        id: "A",
        text: "선조들의 지혜와 전통을 지키며 신중하게 적응해 나가야 합니다. 급격한 변화는 위험해요.",
        scores: { reform: -15, collectivism: 5, pragmatism: 10, authoritarianism: 10, engagement: -10 }
      },
      {
        id: "B",
        text: "미래를 위해 과감하게 새로운 시도를 해야 합니다. 변화를 두려워하면 발전할 수 없어요.",
        scores: { reform: 20, collectivism: 0, pragmatism: -5, authoritarianism: -10, engagement: 15 }
      }
    ],
    imageFile: "q15.png"
  }
];

export default questions;