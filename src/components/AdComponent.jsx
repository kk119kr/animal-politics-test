// src/components/AdComponent.jsx 파일을 새로 생성하세요

import { useEffect, useRef } from 'react';

const AdComponent = ({ format, slot, style }) => {
  const adRef = useRef(null);
  
  useEffect(() => {
    // 컴포넌트가 마운트되고 AdSense가 로드된 후 광고 삽입
    if (adRef.current && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }
  }, []);

  return (
    <div className="ad-container">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style || { display: 'block' }}
        data-ad-client="ca-pub-1269825807163193"
        data-ad-slot={slot || ""}
        data-ad-format={format || 'auto'}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdComponent;
