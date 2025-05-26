// src/data/questions.js
// 테스트 질문 데이터 - 5점 척도로 확장

export const questions = [
  {
    id: 1,
    question:
      "나무집 가격 상승으로 작은 동물들이 집을 못 구해요./n숲 지도자가 직접 관리해야 할까요?",
    options: [
      {
        id: "A",
        text: "완전 맞아! 🌳",
        scores: {
          reform: 20,
          collectivism: 30,
          pragmatism: -10,
          authoritarianism: 25,
          engagement: 15,
        },
      },
      {
        id: "B",
        text: "그런 것 같아! 🏠",
        scores: {
          reform: 10,
          collectivism: 15,
          pragmatism: 0,
          authoritarianism: 10,
          engagement: 5,
        },
      },
      {
        id: "C",
        text: "음... 잘 모르겠어. 🤔",
        scores: {
          reform: 0,
          collectivism: 5,
          pragmatism: 5,
          authoritarianism: 0,
          engagement: 0,
        },
      },
      {
        id: "D",
        text: "글쎄, 아닌 것 같아! 🍃",
        scores: {
          reform: -10,
          collectivism: -15,
          pragmatism: 10,
          authoritarianism: -5,
          engagement: 0,
        },
      },
      {
        id: "E",
        text: "절대 아니야! 🌲",
        scores: {
          reform: -20,
          collectivism: -30,
          pragmatism: 20,
          authoritarianism: -20,
          engagement: -5,
        },
      },
    ],
    imageFile: "q1.png",
  },
  {
    id: 2,
    question:
      "폭풍 후 집을 고칠 때,/n비버가 모든 동물을 중앙에서 지휘하는 게 좋을까요?",
    options: [
      {
        id: "A",
        text: "물론이지! 🌊",
        scores: {
          reform: -15,
          collectivism: 20,
          pragmatism: 20,
          authoritarianism: 30,
          engagement: 15,
        },
      },
      {
        id: "B",
        text: "맞는 것 같아! 🧱",
        scores: {
          reform: -5,
          collectivism: 10,
          pragmatism: 15,
          authoritarianism: 15,
          engagement: 10,
        },
      },
      {
        id: "C",
        text: "둘 다 장단점이 있을 것 같아. 🌉",
        scores: {
          reform: 0,
          collectivism: 5,
          pragmatism: 5,
          authoritarianism: 0,
          engagement: 0,
        },
      },
      {
        id: "D",
        text: "별로 아닌걸! 🪵",
        scores: {
          reform: 5,
          collectivism: -5,
          pragmatism: -5,
          authoritarianism: -15,
          engagement: -5,
        },
      },
      {
        id: "E",
        text: "전혀 아니야! 🪚",
        scores: {
          reform: 15,
          collectivism: -15,
          pragmatism: -15,
          authoritarianism: -30,
          engagement: -10,
        },
      },
    ],
    imageFile: "q2.png",
  },
  {
    id: 3,
    question:
      "생활 방식이 다른 박쥐 가족을 숲에 받아들여야 할까요?",
    options: [
      {
        id: "A",
        text: "당연하지! 🌈",
        scores: {
          reform: 30,
          collectivism: 15,
          pragmatism: -10,
          authoritarianism: -25,
          engagement: 15,
        },
      },
      {
        id: "B",
        text: "좋을 것 같아! 🌱",
        scores: {
          reform: 15,
          collectivism: 10,
          pragmatism: -5,
          authoritarianism: -10,
          engagement: 5,
        },
      },
      {
        id: "C",
        text: "음, 좀 더 생각해봐야겠어. 🧐",
        scores: {
          reform: 0,
          collectivism: 0,
          pragmatism: 5,
          authoritarianism: 0,
          engagement: 0,
        },
      },
      {
        id: "D",
        text: "조금 걱정돼! 🍂",
        scores: {
          reform: -15,
          collectivism: -5,
          pragmatism: 5,
          authoritarianism: 10,
          engagement: -5,
        },
      },
      {
        id: "E",
        text: "절대 안돼! 🌧️",
        scores: {
          reform: -30,
          collectivism: -10,
          pragmatism: 15,
          authoritarianism: 25,
          engagement: -10,
        },
      },
    ],
    imageFile: "q3.png",
  },
  {
    id: 4,
    question:
      "새로운 숲 학교는 전통보다 창의성과 탐험을 중심으로 운영해야 할까요?",
    options: [
      {
        id: "A",
        text: "완전 동의해! 🎨",
        scores: {
          reform: 25,
          collectivism: -10,
          pragmatism: -20,
          authoritarianism: -25,
          engagement: 20,
        },
      },
      {
        id: "B",
        text: "좋은 생각이야! 🎭",
        scores: {
          reform: 15,
          collectivism: -5,
          pragmatism: -10,
          authoritarianism: -15,
          engagement: 10,
        },
      },
      {
        id: "C",
        text: "둘 다 균형있게 필요할 것 같아. 🎪",
        scores: {
          reform: 0,
          collectivism: 0,
          pragmatism: 0,
          authoritarianism: 0,
          engagement: 0,
        },
      },
      {
        id: "D",
        text: "전통이 더 중요해! 📚",
        scores: {
          reform: -15,
          collectivism: 5,
          pragmatism: 10,
          authoritarianism: 15,
          engagement: -10,
        },
      },
      {
        id: "E",
        text: "절대 안돼! 📏",
        scores: {
          reform: -25,
          collectivism: 10,
          pragmatism: 20,
          authoritarianism: 25,
          engagement: -20,
        },
      },
    ],
    imageFile: "q4.png",
  },
  {
    id: 5,
    question:
      "위험하지만 유용한 '불의 돌'은 천천히 개발하며 안전한 대안을 개발해야 할까요?",
    options: [
      {
        id: "A",
        text: "정말 그래야 해! 🌞",
        scores: {
          reform: 20,
          collectivism: 15,
          pragmatism: -10,
          authoritarianism: -10,
          engagement: 25,
        },
      },
      {
        id: "B",
        text: "그게 좋겠어! 🌈",
        scores: {
          reform: 10,
          collectivism: 5,
          pragmatism: 0,
          authoritarianism: -5,
          engagement: 15,
        },
      },
      {
        id: "C",
        text: "음, 상황에 따라 다를 것 같아. 🌓",
        scores: {
          reform: 0,
          collectivism: 0,
          pragmatism: 5,
          authoritarianism: 0,
          engagement: 5,
        },
      },
      {
        id: "D",
        text: "그럴 필요 없어! 🔥",
        scores: {
          reform: -5,
          collectivism: -5,
          pragmatism: 15,
          authoritarianism: 5,
          engagement: -10,
        },
      },
      {
        id: "E",
        text: "완전히 반대야! ⚡",
        scores: {
          reform: -15,
          collectivism: -15,
          pragmatism: 25,
          authoritarianism: 15,
          engagement: -20,
        },
      },
    ],
    imageFile: "q5.png",
  },
  {
    id: 6,
    question:
      "아픈 토끼를 위해/n모든 동물이 음식을 모으는 공동체 방식이 좋을까요?",
    options: [
      {
        id: "A",
        text: "물론이지! 🍎",
        scores: {
          reform: 10,
          collectivism: 30,
          pragmatism: -5,
          authoritarianism: 10,
          engagement: 20,
        },
      },
      {
        id: "B",
        text: "함께하면 좋겠어! 🥜",
        scores: {
          reform: 5,
          collectivism: 15,
          pragmatism: 0,
          authoritarianism: 5,
          engagement: 10,
        },
      },
      {
        id: "C",
        text: "음, 여러 방법이 있을 것 같아. 🍓",
        scores: {
          reform: 0,
          collectivism: 0,
          pragmatism: 5,
          authoritarianism: 0,
          engagement: 0,
        },
      },
      {
        id: "D",
        text: "각자 알아서 하는 게 좋아! 🍇",
        scores: {
          reform: -5,
          collectivism: -15,
          pragmatism: 5,
          authoritarianism: -5,
          engagement: -5,
        },
      },
      {
        id: "E",
        text: "절대 아니야! 🌰",
        scores: {
          reform: -10,
          collectivism: -30,
          pragmatism: 15,
          authoritarianism: -10,
          engagement: -10,
        },
      },
    ],
    imageFile: "q6.png",
  },
  {
    id: 7,
    question:
      "사과나무 갈등은 어른들이 정한 규칙보다/n당사자들이 대화로 해결하는 게 좋을까요?",
    options: [
      {
        id: "A",
        text: "당연히 그래야지! 🗣️",
        scores: {
          reform: 20,
          collectivism: -10,
          pragmatism: -10,
          authoritarianism: -25,
          engagement: 15,
        },
      },
      {
        id: "B",
        text: "대화가 좋을 것 같아! 👂",
        scores: {
          reform: 10,
          collectivism: -5,
          pragmatism: -5,
          authoritarianism: -15,
          engagement: 5,
        },
      },
      {
        id: "C",
        text: "상황에 따라 다른 것 같아. 🤝",
        scores: {
          reform: 0,
          collectivism: 0,
          pragmatism: 5,
          authoritarianism: 0,
          engagement: 0,
        },
      },
      {
        id: "D",
        text: "규칙이 필요해! 📜",
        scores: {
          reform: -10,
          collectivism: 5,
          pragmatism: 5,
          authoritarianism: 15,
          engagement: 0,
        },
      },
      {
        id: "E",
        text: "절대 아니야! 👑",
        scores: {
          reform: -20,
          collectivism: 10,
          pragmatism: 15,
          authoritarianism: 25,
          engagement: -5,
        },
      },
    ],
    imageFile: "q7.png",
  },
  {
    id: 8,
    question: "비버의 큰 댐 사업을 제한해/n모든 동물이 물을 공평히 나눠 쓰게 해야 할까요?",
    options: [
      {
        id: "A",
        text: "반드시 그래야 해! 💧",
        scores: {
          reform: 20,
          collectivism: 25,
          pragmatism: 0,
          authoritarianism: 15,
          engagement: 20,
        },
      },
      {
        id: "B",
        text: "적절한 규제가 필요해! 🌊",
        scores: {
          reform: 10,
          collectivism: 15,
          pragmatism: 5,
          authoritarianism: 10,
          engagement: 10,
        },
      },
      {
        id: "C",
        text: "음, 양쪽 의견을 조율해야 할 것 같아. 🌿",
        scores: {
          reform: 0,
          collectivism: 5,
          pragmatism: 10,
          authoritarianism: 0,
          engagement: 5,
        },
      },
      {
        id: "D",
        text: "규제는 최소화해야 해! 🦫",
        scores: {
          reform: -10,
          collectivism: -15,
          pragmatism: 15,
          authoritarianism: -5,
          engagement: 0,
        },
      },
      {
        id: "E",
        text: "전혀 필요 없어! 🏗️",
        scores: {
          reform: -20,
          collectivism: -25,
          pragmatism: 25,
          authoritarianism: -15,
          engagement: -5,
        },
      },
    ],
    imageFile: "q8.png",
  },
  {
    id: 9,
    question:
      "반딧불이의 새로운 통신 기술을/n충분한 검증 없이 빨리 사용해도 될까요?",
    options: [
      {
        id: "A",
        text: "당장 시작해야 해! ✨",
        scores: {
          reform: 30,
          collectivism: 10,
          pragmatism: -15,
          authoritarianism: -20,
          engagement: 25,
        },
      },
      {
        id: "B",
        text: "빨리 도입하는 게 좋아! 💡",
        scores: {
          reform: 15,
          collectivism: 5,
          pragmatism: -5,
          authoritarianism: -10,
          engagement: 15,
        },
      },
      {
        id: "C",
        text: "좀 더 지켜보고 결정하는 게 좋겠어. 🔎",
        scores: {
          reform: 0,
          collectivism: 0,
          pragmatism: 5,
          authoritarianism: 0,
          engagement: 0,
        },
      },
      {
        id: "D",
        text: "천천히 검증해야 해! 🔍",
        scores: {
          reform: -15,
          collectivism: 0,
          pragmatism: 10,
          authoritarianism: 5,
          engagement: -10,
        },
      },
      {
        id: "E",
        text: "위험해, 안 돼! 🚫",
        scores: {
          reform: -30,
          collectivism: -5,
          pragmatism: 20,
          authoritarianism: 15,
          engagement: -20,
        },
      },
    ],
    imageFile: "q9.png",
  },
  {
    id: 10,
    question: "계절 변화로 식량 확보가 어려울 때,/n모두가 공동 창고를 만들어 음식을 나눠야 할까요",
    options: [
      {
        id: "A",
        text: "모두 함께 해야 해! 🏠",
        scores: {
          reform: 10,
          collectivism: 30,
          pragmatism: 5,
          authoritarianism: 10,
          engagement: 15,
        },
      },
      {
        id: "B",
        text: "협력하는 게 좋겠어! 🍯",
        scores: {
          reform: 5,
          collectivism: 15,
          pragmatism: 10,
          authoritarianism: 5,
          engagement: 10,
        },
      },
      {
        id: "C",
        text: "두 가지 방법 모두 필요할 것 같아. 🥄",
        scores: {
          reform: 0,
          collectivism: 5,
          pragmatism: 5,
          authoritarianism: 0,
          engagement: 0,
        },
      },
      {
        id: "D",
        text: "각자 해결책을 찾아야 해! 🔍",
        scores: {
          reform: -5,
          collectivism: -15,
          pragmatism: 5,
          authoritarianism: -5,
          engagement: -5,
        },
      },
      {
        id: "E",
        text: "절대 안 돼! 🚶",
        scores: {
          reform: -10,
          collectivism: -30,
          pragmatism: 0,
          authoritarianism: -10,
          engagement: -15,
        },
      },
    ],
    imageFile: "q10.png",
  },
  {
    id: 11,
    question: "숲속 동물들이 전통적 역할 대신/n원하는 일을 자유롭게 선택하도록 해야 할까요?",
    options: [
      {
        id: "A",
        text: "자유롭게 선택해야 해! 🦋",
        scores: {
          reform: 30,
          collectivism: 5,
          pragmatism: -5,
          authoritarianism: -25,
          engagement: 25,
        },
      },
      {
        id: "B",
        text: "원하는 일을 하는 게 좋아! 🌈",
        scores: {
          reform: 15,
          collectivism: 0,
          pragmatism: 0,
          authoritarianism: -15,
          engagement: 15,
        },
      },
      {
        id: "C",
        text: "전통과 자유 사이의 균형이 필요해. 🌱",
        scores: {
          reform: 0,
          collectivism: 5,
          pragmatism: 5,
          authoritarianism: 0,
          engagement: 5,
        },
      },
      {
        id: "D",
        text: "전통적인 역할이 더 안정적이야! 🌳",
        scores: {
          reform: -15,
          collectivism: 0,
          pragmatism: 5,
          authoritarianism: 15,
          engagement: -10,
        },
      },
      {
        id: "E",
        text: "질서가 무너지면 안 돼! 🧱",
        scores: {
          reform: -30,
          collectivism: -5,
          pragmatism: 10,
          authoritarianism: 25,
          engagement: -20,
        },
      },
    ],
    imageFile: "q11.png",
  },
  {
    id: 12,
    question: "숲소식통 운영을 모든 동물이 검증 없이/n자유롭게 하는 게 좋을까요?",
    options: [
      {
        id: "A",
        text: "완전 자유롭게! 📣",
        scores: {
          reform: 25,
          collectivism: -10,
          pragmatism: -10,
          authoritarianism: -25,
          engagement: 20,
        },
      },
      {
        id: "B",
        text: "대체로 자유롭게! 📰",
        scores: {
          reform: 15,
          collectivism: -5,
          pragmatism: -5,
          authoritarianism: -15,
          engagement: 10,
        },
      },
      {
        id: "C",
        text: "균형 있는 관리가 필요할 것 같아. 📝",
        scores: {
          reform: 0,
          collectivism: 5,
          pragmatism: 5,
          authoritarianism: 0,
          engagement: 5,
        },
      },
      {
        id: "D",
        text: "일부 검증이 필요해! 📚",
        scores: {
          reform: -15,
          collectivism: 5,
          pragmatism: 10,
          authoritarianism: 15,
          engagement: -5,
        },
      },
      {
        id: "E",
        text: "엄격한 관리가 필요해! 📋",
        scores: {
          reform: -25,
          collectivism: 10,
          pragmatism: 15,
          authoritarianism: 25,
          engagement: -15,
        },
      },
    ],
    imageFile: "q12.png",
  },
  {
    id: 13,
    question: "맹수 위협에 맞서 마을별로 경비대를 꾸리는 것 보다/n강한 동물들이 숲 전체를 순찰하는 게 좋을까요?",
    options: [
      {
        id: "A",
        text: "통합 체계가 필수야! 🛡️",
        scores: {
          reform: -10,
          collectivism: 25,
          pragmatism: 15,
          authoritarianism: 30,
          engagement: 20,
        },
      },
      {
        id: "B",
        text: "함께 지키는 게 좋겠어! 🦅",
        scores: {
          reform: -5,
          collectivism: 15,
          pragmatism: 10,
          authoritarianism: 15,
          engagement: 15,
        },
      },
      {
        id: "C",
        text: "두 방식 모두 장단점이 있어. 🦉",
        scores: {
          reform: 0,
          collectivism: 5,
          pragmatism: 5,
          authoritarianism: 0,
          engagement: 5,
        },
      },
      {
        id: "D",
        text: "지역 방어가 효과적이야! 🏡",
        scores: {
          reform: 5,
          collectivism: -5,
          pragmatism: 5,
          authoritarianism: -15,
          engagement: 0,
        },
      },
      {
        id: "E",
        text: "각자 지키는 게 최선이야! 🏹",
        scores: {
          reform: 15,
          collectivism: -20,
          pragmatism: 0,
          authoritarianism: -30,
          engagement: -5,
        },
      },
    ],
    imageFile: "q13.png",
  },
  {
    id: 14,
    question: "희귀한 치료 식물을 모두가 관리하기보다/n숲의 어른들이 중앙에서 통제해야 할까요",
    options: [
      {
        id: "A",
        text: "중앙 통제가 필요해! 🧙‍♂️",
        scores: {
          reform: -20,
          collectivism: 15,
          pragmatism: 10,
          authoritarianism: 25,
          engagement: 0,
        },
      },
      {
        id: "B",
        text: "어른들의 관리가 좋겠어! 🌿",
        scores: {
          reform: -10,
          collectivism: 10,
          pragmatism: 5,
          authoritarianism: 15,
          engagement: 0,
        },
      },
      {
        id: "C",
        text: "전문가와 공동체가 함께 결정해야 해. 🌱",
        scores: {
          reform: 0,
          collectivism: 5,
          pragmatism: 5,
          authoritarianism: 0,
          engagement: 5,
        },
      },
      {
        id: "D",
        text: "함께 관리하는 게 좋아! 🍃",
        scores: {
          reform: 10,
          collectivism: 5,
          pragmatism: -5,
          authoritarianism: -10,
          engagement: 10,
        },
      },
      {
        id: "E",
        text: "모두에게 권한을 줘야 해! 🌺",
        scores: {
          reform: 20,
          collectivism: 5,
          pragmatism: -10,
          authoritarianism: -25,
          engagement: 15,
        },
      },
    ],
    imageFile: "q14.png",
  },
  {
    id: 15,
    question: "숲의 미래를 위해 전통 지혜를 고수하는 거북이보다/n빠르게 변화하자는 카멜레온의 말을 따라야 할까요",
    options: [
      {
        id: "A",
        text: "변화가 최고야! 🦎",
        scores: {
          reform: 30,
          collectivism: 0,
          pragmatism: -10,
          authoritarianism: -20,
          engagement: 25,
        },
      },
      {
        id: "B",
        text: "적응하는 게 좋겠어! 🌈",
        scores: {
          reform: 15,
          collectivism: 0,
          pragmatism: 0,
          authoritarianism: -10,
          engagement: 15,
        },
      },
      {
        id: "C",
        text: "둘 다 맞는 말이야. 🌗",
        scores: {
          reform: 0,
          collectivism: 0,
          pragmatism: 10,
          authoritarianism: 0,
          engagement: 0,
        },
      },
      {
        id: "D",
        text: "전통을 지키는 게 중요해! 🐢",
        scores: {
          reform: -15,
          collectivism: 5,
          pragmatism: 10,
          authoritarianism: 10,
          engagement: -10,
        },
      },
      {
        id: "E",
        text: "변화는 위험해! 🪨",
        scores: {
          reform: -30,
          collectivism: 10,
          pragmatism: 15,
          authoritarianism: 20,
          engagement: -20,
        },
      },
    ],
    imageFile: "q15.png",
  },
];

export default questions;