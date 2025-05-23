// src/components/GoogleAd.jsx - Google AdSense 컴포넌트
import { useEffect, useRef } from 'react';

const GoogleAd = ({ 
  adSlot = "auto", 
  adFormat = "auto",
  fullWidthResponsive = true,
  style = { display: 'block' },
  className = ""
}) => {
  const adRef = useRef(null);

  useEffect(() => {
    // AdSense 스크립트가 로드되었는지 확인
    if (window.adsbygoogle) {
      try {
        // 광고 요청
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        console.log('Google AdSense 광고 요청됨');
      } catch (error) {
        console.error('Google AdSense 오류:', error);
      }
    } else {
      console.warn('Google AdSense 스크립트가 로드되지 않음');
    }
  }, []);

  return (
    <div className={`google-ad-container ${className}`} style={{ textAlign: 'center', margin: '20px 0' }}>
      <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>
        Google 광고
      </div>
      
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-1269825807163193"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
        data-adtest="on" // 테스트 모드 활성화
      />
    </div>
  );
};

export default GoogleAd;