// src/components/KakaoAd.jsx
import { useEffect, useRef } from 'react';

const KakaoAd = ({ 
  adUnit = "DAN-b68sSnUxw2CfTs04", 
  width = "320", 
  height = "100",
  className = "" 
}) => {
  const adRef = useRef(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // 스크립트가 이미 로드되었는지 확인
    const existingScript = document.querySelector('script[src*="kas/static/ba.min.js"]');
    
    const loadAd = () => {
      if (adRef.current && window.adfit) {
        try {
          // 기존 광고 제거
          const existingAd = adRef.current.querySelector('.kakao_ad_area');
          if (existingAd) {
            existingAd.remove();
          }
          
          // 새 광고 요소 생성
          const adElement = document.createElement('ins');
          adElement.className = 'kakao_ad_area';
          adElement.style.display = 'block'; // display: none 제거
          adElement.setAttribute('data-ad-unit', adUnit);
          adElement.setAttribute('data-ad-width', width);
          adElement.setAttribute('data-ad-height', height);
          
          // 광고 컨테이너에 추가
          adRef.current.appendChild(adElement);
          
          // 광고 로드
          (window.adfit = window.adfit || []).push(adElement);
          
          console.log('카카오 광고 로드 시도');
        } catch (error) {
          console.error('카카오 광고 로드 실패:', error);
        }
      }
    };

    if (existingScript && !scriptLoaded.current) {
      // 스크립트가 이미 있으면 바로 광고 로드
      loadAd();
      scriptLoaded.current = true;
    } else if (!existingScript) {
      // 스크립트 로드
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//t1.daumcdn.net/kas/static/ba.min.js';
      script.async = true;
      
      script.onload = () => {
        console.log('카카오 애드핏 스크립트 로드 완료');
        loadAd();
        scriptLoaded.current = true;
      };
      
      script.onerror = () => {
        console.error('카카오 애드핏 스크립트 로드 실패');
      };
      
      document.head.appendChild(script);
    }

    // 컴포넌트 언마운트 시 정리
    return () => {
      if (adRef.current) {
        const adElement = adRef.current.querySelector('.kakao_ad_area');
        if (adElement) {
          adElement.remove();
        }
      }
    };
  }, [adUnit, width, height]);

  return (
    <div 
      ref={adRef} 
      className={`kakao-ad-container text-center ${className}`}
      style={{ minHeight: `${height}px`, width: `${width}px`, margin: '0 auto' }}
    >
      {/* 광고 로딩 표시 */}
      <div className="text-xs text-gray-400 py-2">
        광고
      </div>
    </div>
  );
};

export default KakaoAd;