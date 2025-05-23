// src/components/KakaoAd.jsx - 수정된 안전한 버전
import { useEffect, useRef, useState } from 'react';

const KakaoAd = ({ 
  adUnit = "DAN-b68sSnUxw2CfTs04", 
  width = "320", 
  height = "100",
  className = "" 
}) => {
  const adRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const loadAttempted = useRef(false);

  useEffect(() => {
    // 중복 로드 방지
    if (loadAttempted.current) return;
    loadAttempted.current = true;

    const loadAd = () => {
      // 컴포넌트가 마운트된 상태인지 확인
      if (!adRef.current) return;

      try {
        // 기존 광고 제거
        const existingAds = adRef.current.querySelectorAll('.kakao_ad_area');
        existingAds.forEach(ad => ad.remove());
        
        // 새 광고 요소 생성
        const adElement = document.createElement('ins');
        adElement.className = 'kakao_ad_area';
        adElement.style.display = 'block';
        adElement.setAttribute('data-ad-unit', adUnit);
        adElement.setAttribute('data-ad-width', width);
        adElement.setAttribute('data-ad-height', height);
        
        // 광고 컨테이너에 추가
        adRef.current.appendChild(adElement);
        
        // 광고 로드 (window.adfit 확인)
        if (typeof window !== 'undefined' && window.adfit) {
          (window.adfit = window.adfit || []).push(adElement);
          setIsLoaded(true);
          console.log('카카오 광고 로드 완료');
        } else {
          console.warn('window.adfit이 준비되지 않음');
          setHasError(true);
        }
      } catch (error) {
        console.error('카카오 광고 로드 실패:', error);
        setHasError(true);
      }
    };

    // 스크립트 로드 확인 및 광고 로드
    const checkAndLoadAd = () => {
      const existingScript = document.querySelector('script[src*="kas/static/ba.min.js"]');
      
      if (existingScript) {
        // 스크립트가 이미 있으면 약간의 지연 후 광고 로드
        setTimeout(loadAd, 500);
      } else {
        // 스크립트 동적 로드
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//t1.daumcdn.net/kas/static/ba.min.js';
        script.async = true;
        
        script.onload = () => {
          console.log('카카오 애드핏 스크립트 로드 완료');
          setTimeout(loadAd, 100);
        };
        
        script.onerror = () => {
          console.error('카카오 애드핏 스크립트 로드 실패');
          setHasError(true);
        };
        
        document.head.appendChild(script);
      }
    };

    // DOM이 준비된 후 실행
    const timer = setTimeout(checkAndLoadAd, 100);

    // 정리 함수
    return () => {
      clearTimeout(timer);
      if (adRef.current) {
        const ads = adRef.current.querySelectorAll('.kakao_ad_area');
        ads.forEach(ad => {
          try {
            ad.remove();
          } catch (e) {
            console.warn('광고 제거 중 오류:', e);
          }
        });
      }
    };
  }, []); // 의존성 배열을 빈 배열로 설정하여 한 번만 실행

  // 에러 상태일 때는 아무것도 렌더링하지 않음
  if (hasError) {
    return null;
  }

  return (
    <div 
      ref={adRef} 
      className={`kakao-ad-container text-center ${className}`}
      style={{ 
        minHeight: `${height}px`, 
        width: `${width}px`, 
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        border: '1px solid #eee',
        borderRadius: '4px'
      }}
    >
      {/* 로딩 상태 표시 */}
      {!isLoaded && (
        <div className="flex items-center justify-center h-full">
          <div className="text-xs text-gray-400 py-4">
            광고 로딩 중...
          </div>
        </div>
      )}
    </div>
  );
};

export default KakaoAd;