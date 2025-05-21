// src/components/AdComponent.jsx 개선 버전

import { useEffect, useRef, useState } from 'react';

const AdComponent = ({ format, slot, style, className }) => {
  const adRef = useRef(null);
  const [isAdLoaded, setIsAdLoaded] = useState(false);
  const [adError, setAdError] = useState(false);
  
  useEffect(() => {
    // 컴포넌트가 마운트되었을 때만 실행
    const loadAd = () => {
      if (adRef.current && window.adsbygoogle) {
        try {
          // 광고 로드 시도
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          setIsAdLoaded(true);
          
          // 광고 로드 시간 측정 (3초 이상 걸리면 문제가 있다고 간주)
          const timeout = setTimeout(() => {
            if (!isAdLoaded) {
              console.warn('Ad loading timeout');
              setAdError(true);
            }
          }, 3000);
          
          return () => clearTimeout(timeout);
        } catch (e) {
          console.error('AdSense error:', e);
          setAdError(true);
        }
      }
    };
    
    // 페이지가 완전히 로드된 후 광고 로드 시도
    if (document.readyState === 'complete') {
      loadAd();
    } else {
      window.addEventListener('load', loadAd);
      return () => window.removeEventListener('load', loadAd);
    }
  }, []);

  // 광고 로드 오류 시 컨테이너 숨김
  if (adError) return null;

  return (
    <div className={`ad-container ${className || ''} my-6 overflow-hidden`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style || { display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-1269825807163193"
        data-ad-slot={slot}
        data-ad-format={format || 'auto'}
        data-full-width-responsive="true"
        data-adtest="on" // 테스트 모드 (실제 배포 시 제거)
      ></ins>
      {!isAdLoaded && (
        <div className="text-center text-xs text-gray-400 my-2">
          광고 로드 중...
        </div>
      )}
    </div>
  );
};

export default AdComponent;