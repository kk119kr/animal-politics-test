import { useEffect, useRef } from 'react';

const KakaoAd = ({ adUnit, width = "320", height = "100" }) => {
  const adRef = useRef(null);

  useEffect(() => {
    if (adRef.current && window.adfit) {
      const ins = document.createElement('ins');
      ins.className = 'kakao_ad_area';
      ins.style.display = 'none';
      ins.setAttribute('data-ad-unit', adUnit);
      ins.setAttribute('data-ad-width', width);
      ins.setAttribute('data-ad-height', height);
      
      adRef.current.appendChild(ins);
      (window.adfit = window.adfit || []).push(ins);
    }
  }, [adUnit, width, height]);

  return <div ref={adRef}></div>;
};

export default KakaoAd;