// 테스트 질문 데이터 (15개 문항) - 7개 문항에 중간 선택지 추가
export const questions = [
  {
    id: 1,
    question:
      "나무집 가격이 올라서 작은 동물들이 거처를 구하기 어려워졌어요.",
    options: [
      {
        id: "A",
        text: "숲의 지도자가 나무집을 더 짓고 가격도 정해야 해요. 모두가 편안히 살 집이 필요해요.",
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
        text: "지도자가 약간 도움을 주되, 다람쥐와 여우들이 자연스럽게 거래하도록 놔두는 게 좋겠어요.",
        scores: {
          reform: 0,
          collectivism: 0,
          pragmatism: 10,
          authoritarianism: 0,
          engagement: 5,
        },
      },
      {
        id: "C",
        text: "동물들이 서로 자유롭게 거래하게 놔두세요. 지도자가 나서면 오히려 더 혼란스러워져요.",
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
      "큰 폭풍이 숲을 휩쓸고 지나간 후, 부서진 집들을 어떻게 고칠지 이야기하고 있어요.",
    options: [
      {
        id: "A",
        text: "현명한 부엉이가 계획을 세워 모든 동물에게 역할을 나눠줘야 해요. 빨리 복구하려면 지휘자가 필요해요.",
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
        text: "각 마을의 동물들이 모여서 서로 돕는 방법을 스스로 찾아보는 게 좋겠어요.",
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
      "멀리서 온 박쥐 가족들이 숲 가장자리 동굴에 살고 싶어해요. 그들은 우리와 조금 다른 생활 방식을 가지고 있어요.",
    options: [
      {
        id: "A",
        text: "새로운 친구들을 환영해요! 다양한 친구들이 있으면 우리 숲이 더 재미있고 풍요로워질 거예요.",
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
        text: "우리 숲의 생활 방식에 맞춰 살 수 있는지 먼저 이야기해봐야 해요. 서로 잘 어울려야 하니까요.",
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
      "아기 동물들을 위한 새로운 놀이 학교에 대해 의견이 나뉘고 있어요.",
    options: [
      {
        id: "A",
        text: "규칙과 전통적인 숲속 지혜를 가르쳐야 해요. 기본을 잘 배워야 나중에 어려움을 이겨낼 수 있어요.",
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
        text: "아이들이 자유롭게 탐험하고 새로운 것을 발견하도록 격려해요. 변화하는 숲에서는 창의력이 중요해요.",
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
      "숲속에서 반짝이는 '빛나는 돌'을 발견했어요. 매우 유용하지만 너무 많이 사용하면 위험할 수도 있대요.",
    options: [
      {
        id: "A",
        text: "'빛나는 돌'을 계속 사용하되, 안전하게 쓰는 방법을 연구하고 조금씩 다른 방법도 찾아봐요.",
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
        text: "지금처럼 쓰되, 햇빛과 바람의 힘을 이용하는 방법도 함께 연구해요.",
        scores: {
          reform: 5,
          collectivism: 5,
          pragmatism: 5,
          authoritarianism: 0,
          engagement: 5,
        },
      },
      {
        id: "C",
        text: "'빛나는 돌' 사용을 중단하고 즉시 햇빛과 바람의 힘만 이용해요. 자연에 가장 친근한 방법이에요.",
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
      "나이 든 할머니 여우와 아픈 토끼들을 어떻게 돌볼지 고민하고 있어요.",
    options: [
      {
        id: "A",
        text: "모든 동물이 열매와 견과류를 조금씩 모아서 함께 도와주는 게 좋겠어요.",
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
        text: "각 가족이 자기 친척들을 돌보고, 정말 어려운 경우에만 숲 공동체가 도와주면 돼요.",
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
      "토끼와 다람쥐들이 맛있는 버섯 밭을 두고 다투고 있어요. 어떻게 해결하면 좋을까요?",
    options: [
      {
        id: "A",
        text: "숲의 어른인 올빼미 할아버지가 규칙을 정해주고, 모두가 그 결정을 따라야 해요.",
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
        text: "토끼와 다람쥐가 직접 만나서 이야기하고 서로 양보하며 해결책을 찾아야 해요.",
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
    question: "비버들이 만든 큰 댐 회사가 점점 커져서 작은 물살이 동물들이 걱정하고 있어요.",
    options: [
      {
        id: "A",
        text: "비버들이 자유롭게 더 멋진 댐을 만들도록 격려해요. 너무 많은 규칙은 창의력을 막아요.",
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
        text: "비버들의 창의력을 존중하되, 물살이 동물들도 편안히 살 수 있도록 규칙이 필요해요.",
        scores: {
          reform: 5,
          collectivism: 0,
          pragmatism: 10,
          authoritarianism: 0,
          engagement: 5,
        },
      },
      {
        id: "C",
        text: "댐이 너무 커지지 않도록 제한하고, 모든 동물이 공평하게 물을 나눠 쓸 수 있게 해야 해요.",
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
      "반딧불이들이 빛으로 멀리 소식을 전하는 새로운 방법을 발명했어요. 이걸 숲 전체에 도입할까요?",
    options: [
      {
        id: "A",
        text: "천천히 시험해보고 안전한지 확인한 후에 조금씩 도입해요. 갑작스러운 변화는 혼란스러울 수 있어요.",
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
        text: "정말 멋진 발명이네요! 빠르게 모든 동물들이 사용할 수 있게 해서 소통을 개선해요.",
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
    question: "계절이 이상하게 변해서 열매와 견과류를 모으기 어려워졌어요.",
    options: [
      {
        id: "A",
        text: "모두 함께 큰 창고를 만들고 음식을 나눠 어려운 시기를 대비해요.",
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
        text: "각자 다양한 먹이를 찾는 방법을 배우고 새로운 환경에 적응하는 지혜를 키워요.",
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
    question: "수컷과 암컷 동물들이 숲속에서 하는 일이 다른 것에 대해 토론하고 있어요.",
    options: [
      {
        id: "A",
        text: "자연이 정한 역할이 있어요. 수컷 사슴은 뿔로 보호하고, 암컷은 아이를 돌보는 게 자연스러워요.",
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
        text: "일부 차이는 인정하되, 모든 동물이 자신의 재능을 살릴 수 있는 기회가 필요해요.",
        scores: {
          reform: 0,
          collectivism: 5,
          pragmatism: 5,
          authoritarianism: 0,
          engagement: 0,
        },
      },
      {
        id: "C",
        text: "수컷이든 암컷이든 하고 싶은 일을 자유롭게 선택할 수 있어야 해요. 제한을 두면 안 돼요.",
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
      "새끼 동물들이 배우는 숲속 학교에서 어떤 놀이가 더 좋을지 고민하고 있어요.",
    options: [
      {
        id: "A",
        text: "누가 더 빨리 달리고 높이 뛰는지 경주하는 놀이가 좋아요. 실력을 키우는 게 중요해요.",
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
        text: "때로는 경주도 하고, 때로는 함께 둥지 짓기도 하며 다양한 놀이를 균형 있게 해요.",
        scores: {
          reform: 0,
          collectivism: 0,
          pragmatism: 5,
          authoritarianism: 0,
          engagement: 5,
        },
      },
      {
        id: "C",
        text: "모두 함께 즐기는 협동 놀이가 좋아요. 누구든 소외되지 않고 자신의 색깔을 표현할 수 있어요.",
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
      "숲 바깥에서 무서운 여우가 나타나 작은 토끼들을 위협하고 있어요.",
    options: [
      {
        id: "A",
        text: "강한 곰과 멧돼지들이 순찰대를 만들어 숲 전체를 지켜주는 게 좋겠어요. 안전이 최우선이에요.",
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
        text: "각 마을마다 작은 경비대를 만들고, 위험할 때 서로 도와주는 방식이 좋겠어요.",
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
      "아픈 동물을 치료하는 신비한 꽃을 발견했어요. 하지만 너무 많이 따면 사라질 수도 있대요.",
    options: [
      {
        id: "A",
        text: "현명한 부엉이 할아버지와 다른 어른들이 꽃을 관리하고, 정말 필요할 때만 사용하게 해요.",
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
        text: "약초에 대해 잘 아는 토끼와 다람쥐들이 함께 꽃을 돌보고 지속 가능한 방법을 찾아요.",
        scores: {
          reform: 0,
          collectivism: 5,
          pragmatism: 10,
          authoritarianism: 0,
          engagement: 5,
        },
      },
      {
        id: "C",
        text: "모든 동물에게 꽃에 대한 지식을 알려주고, 서로 약속을 지키며 소중하게 다루기로 해요.",
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
      "숲의 미래에 대해 느린 거북이와 변신의 달인 카멜레온이 서로 다른 조언을 했어요.",
    options: [
      {
        id: "A",
        text: "거북이처럼 오래된 지혜를 소중히 여기고 변화에는 신중하게 대처해요.",
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
        text: "두 동물의 지혜를 모두 배워서, 좋은 전통은 지키면서도 필요한 변화는 받아들여요.",
        scores: {
          reform: 5,
          collectivism: 0,
          pragmatism: 5,
          authoritarianism: 0,
          engagement: 0,
        },
      },
      {
        id: "C",
        text: "카멜레온처럼 변화를 두려워하지 않고 새로운 환경에 빠르게 적응하는 게 좋아요.",
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