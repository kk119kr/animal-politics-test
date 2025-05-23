// src/components/KakaoAd.jsx - 승인용 단순 버전
import { useEffect, useRef } from 'react';

const KakaoAd = ({ 
  adUnit = "DAN-b68sSnUxw2CfTs04", 
  width = "320", 
  height = "100"
}) => {
  const adRef = useRef(null);

  useEffect(() => {
    // 단순하게 DOM 직접 조작
    if (adRef.current) {
      // 기존 광고 제거
      adRef.current.innerHTML = '';
      
      // 새 광고 요소 생성
      const ins = document.createElement('ins');
      ins.className = 'kakao_ad_area';
      ins.style.display = 'none';
      ins.setAttribute('data-ad-unit', adUnit);
      ins.setAttribute('data-ad-width', width);
      ins.setAttribute('data-ad-height', height);
      
      // DOM에 추가
      adRef.current.appendChild(ins);
      
      // adfit 푸시 - 안전한 방식
      setTimeout(() => {
        try {
          if (typeof window !== 'undefined') {
            // 배열 초기화 보장
            window.adfit = window.adfit || [];
            
            // 배열인지 확인 후 push
            if (Array.isArray(window.adfit)) {
              window.adfit.push(ins);
            }
          }
        } catch (error) {
          // 조용히 실패 (승인 기간 중에는 에러 로그 최소화)
          console.warn('AdFit loading skipped');
        }
      }, 1000); // 1초 지연으로 스크립트 로딩 대기
    }
  }, [adUnit, width, height]);

  return (
    <div 
      ref={adRef} 
      className="kakao-ad-container"
      style={{ 
        width: `${width}px`, 
        height: `${height}px`, 
        margin: '10px auto',
        textAlign: 'center'
      }}
    />
  );
};

export default KakaoAd;