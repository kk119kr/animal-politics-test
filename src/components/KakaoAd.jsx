// src/components/KakaoAd.jsx - 가장 단순한 승인용 버전
import React from 'react';

const KakaoAd = ({ 
  adUnit = "DAN-b68sSnUxw2CfTs04", 
  width = "320", 
  height = "100"
}) => {
  return (
    <div className="kakao-ad-container" style={{ textAlign: 'center', margin: '10px 0' }}>
      <ins 
        className="kakao_ad_area"
        style={{ display: 'none' }}
        data-ad-unit={adUnit}
        data-ad-width={width}
        data-ad-height={height}
      />
    </div>
  );
};

export default KakaoAd;