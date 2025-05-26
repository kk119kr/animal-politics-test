// src/data/questions.js
// 테스트 질문 데이터 - 5점 척도로 확장

export const questions = [
  {
    id: 1,
    question:
      "나무집 가격이 올라서 작은 동물들이 거처를 구하기 어려워졌어요.\n숲의 지도자가 나무집 공급과 가격을 직접 관리해서 모든 동물이 집을 가질 수 있게 해야 할까요?",
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
      "큰 폭풍이 숲을 휩쓸고 지나간 후, 부서진 집들을 고치는 일은\n현명한 비버가 계획을 세워 모든 동물에게 역할을 나눠주는 중앙 지휘 방식이 좋을까요?",
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
      "멀리서 온 박쥐 가족들이 우리와 다른 생활 방식으로 숲 가장자리 동굴에 살고 싶어해요.\n이런 다양한 방식을 환영하고 새로운 친구들을 받아들여야 할까요?",
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
      "아기 동물들을 위한 새 놀이 학교에서는 규칙과 전통적인 숲속 지혜 대신,\n자유로운 탐험과 창의적인 활동을 중심으로 가르쳐야 할까요?",
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
      "숲속에서 발견한 '불의 돌'은 매우 유용하지만 위험할 수도 있어요.\n이런 새로운 기술은 신중하게 조금씩 사용하면서 햇빛과 바람 같은 안전한 대안도 함께 개발해야 할까요?",
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
      "여우원숭이가 아픈 토끼들을 돌보는 문제로 고민하고 있어요.\n모든 동물이 열매와 견과류를 모아 함께 도와주는 공동체 방식이 좋을까요?",
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
      "올빼미와 여우원숭이들이 맛있는 사과나무를 두고 다투고 있어요.\n이런 갈등은 숲의 어른들이 규칙을 정해주고 모두가 따르는 방식보다, 당사자들이 직접 대화하며 해결하는 게 좋을까요?",
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
    question: "비버들이 만든 큰 댐 회사가 점점 커져서 작은 물살이 동물들이 걱정하고 있어요.\n비버들의 사업 확장을 제한하고 모든 동물이 공평하게 물을 나눠 쓸 수 있게 규제해야 할까요?",
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
      "반딧불이들이 빛으로 멀리 소식을 전하는 새로운 방법을 발명했어요.\n안전성을 충분히 검증하기 전에도 이런 혁신적인 기술을 빠르게 모든 동물들이 사용할 수 있게 해야 할까요?",
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
    question: "계절이 이상하게 변해서 열매와 견과류를 모으기 어려워졌어요.\n이런 상황에서는 개인이 각자 적응하는 방법을 찾기보다, 모두 함께 큰 창고를 만들고 음식을 나눠야 할까요?",
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
    question: "숲속에서 동물들이 하는 일에 대해 토론 중이에요.\n전통적으로 정해진 역할보다, 모든 동물이 자신이 원하는 어떤 일이든 자유롭게 선택할 수 있어야 할까요?",
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
    question: "숲에서 일어나는 일들을 알리는 '숲소식통'을 누가 운영할지 논의 중이에요.\n모든 동물이 검증 없이 자유롭게 보고 들은 것을 나누는 방식이 좋을까요?",
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
    question: "숲 바깥에서 맹수가 나타나 작은 동물들을 위협하고 있어요.\n각 마을마다 작은 경비대를 만드는 것보다, 강한 동물들이 모여 숲 전체를 순찰하는 통합 안보 체계가 필요할까요?",
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
    question: "아픈 동물을 치료하는 신비한 식물이 발견됐지만 너무 많이 따면 사라질 수도 있어요.\n이런 귀중한 자원은 모든 동물에게 지식을 알려주고 함께 관리하는 것보다, 현명한 어른들이 중앙에서 통제해야 할까요?",
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
    question: "숲의 미래에 대해 느린 거북이와 변신의 달인 카멜레온이 조언했어요.\n전통적 지혜를 지키며 변화에 신중해야 한다는 거북이의 말보다, 빠르게 적응하고 새로운 환경에 맞춰 변화해야 한다는 카멜레온의 조언을 따라야 할까요?",
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