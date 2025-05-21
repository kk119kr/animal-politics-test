// src/components/MetaTags.jsx
import { useEffect } from "react";

/**
 * 동적으로 메타 태그를 업데이트하는 컴포넌트
 * @param {Object} props - 메타 태그 정보
 * @param {string} props.title - 페이지 제목
 * @param {string} props.description - 페이지 설명
 * @param {string} props.image - 섬네일 이미지 URL
 * @param {string} props.url - 공유 URL
 */
const MetaTags = ({ title, description, image, url }) => {
  useEffect(() => {
    // 기본 URL 설정 (실제 배포 도메인으로 변경 필요)
    const baseUrl = window.location.origin;
    
    // 전체 URL 생성
    const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
    const fullPageUrl = url ? url : window.location.href;
    
    // 기존 태그 업데이트 함수
    const updateMetaTag = (name, content) => {
      let meta = document.querySelector(`meta[${name}]`);
      if (meta) {
        meta.setAttribute('content', content);
      }
    };
    
    // 없으면 생성하는 함수
    const setMetaTag = (attribute, value, content) => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };
    
    // 페이지 타이틀 업데이트
    document.title = title;
    
    // 기본 메타 태그
    setMetaTag('name', 'description', description);
    
    // Open Graph 태그
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', fullImageUrl);
    setMetaTag('property', 'og:url', fullPageUrl);
    
    // Twitter 카드 태그
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullImageUrl);
    setMetaTag('name', 'twitter:url', fullPageUrl);
    
    // 원본 메타 태그로 복원하는 cleanup 함수
    return () => {
      document.title = "어느 당도 아닌 동물입니다만?";
      
      // 메타 태그 초기값으로 복원 (필요시)
      setMetaTag('name', 'description', "숲속 동물 캐릭터로 알아보는 재미있는 정치성향 테스트. 15개의 질문으로 당신의 정치 성향을 확인해보세요!");
      setMetaTag('property', 'og:title', "어느 당도 아닌 동물입니다만? - 정치성향테스트");
      setMetaTag('property', 'og:description', "숲속 동물 캐릭터로 알아보는 나의 정치 성향은?");
      setMetaTag('property', 'og:image', `${baseUrl}/images/main.png`);
      setMetaTag('property', 'og:url', baseUrl);
      
      setMetaTag('name', 'twitter:title', "어느 당도 아닌 동물입니다만? - 정치성향테스트");
      setMetaTag('name', 'twitter:description', "숲속 동물 캐릭터로 알아보는 나의 정치 성향은?");
      setMetaTag('name', 'twitter:image', `${baseUrl}/images/main.png`);
      setMetaTag('name', 'twitter:url', baseUrl);
    };
  }, [title, description, image, url]);
  
  // 이 컴포넌트는 실제로 렌더링되는 요소가 없음
  return null;
};

export default MetaTags;