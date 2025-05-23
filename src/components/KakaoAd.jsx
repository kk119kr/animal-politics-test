// src/components/KakaoAd.jsx - 디버깅 버전
import { useEffect, useRef, useState } from 'react';

const KakaoAd = ({ 
  adUnit = "DAN-b68sSnUxw2CfTs04", 
  width = "320", 
  height = "100",
  className = ""
}) => {
  const adRef = useRef(null);
  const [debugInfo, setDebugInfo] = useState('');
  
  useEffect(() => {
    console.log('KakaoAd 컴포넌트 마운트됨');
    
    if (adRef.current) {
      // 디버그 정보 수집
      const scriptExists = !!document.querySelector('script[src*="ba.min.js"]');
      const adElements = document.querySelectorAll('.kakao_ad_area');
      
      setDebugInfo(`스크립트: ${scriptExists ? '✓' : '✗'}, 광고영역: ${adElements.length}개`);
      
      // 기존 내용 제거
      adRef.current.innerHTML = '';
      
      // 광고 영역 생성
      const ins = document.createElement('ins');
      ins.className = 'kakao_ad_area';
      ins.style.display = 'none';
      ins.setAttribute('data-ad-unit', adUnit);
      ins.setAttribute('data-ad-width', width);
      ins.setAttribute('data-ad-height', height);
      
      // 디버그용 스타일 추가
      ins.style.border = '1px dashed #ccc';
      ins.style.minHeight = height + 'px';
      ins.style.backgroundColor = '#f9f9f9';
      
      adRef.current.appendChild(ins);
      
      console.log('카카오 광고 영역 생성:', {
        adUnit,
        width,
        height,
        element: ins
      });
      
      // 스크립트가 없으면 추가
      if (!scriptExists) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//t1.daumcdn.net/kas/static/ba.min.js';
        script.async = true;
        script.onload = () => {
          console.log('카카오애드핏 스크립트 로드 완료');
          setDebugInfo(prev => prev + ' - 스크립트 로드됨');
        };
        document.head.appendChild(script);
      }
      
      // 5초 후 상태 체크
      setTimeout(() => {
        const adDisplay = window.getComputedStyle(ins).display;
        console.log('광고 상태 체크:', {
          display: adDisplay,
          visible: adDisplay !== 'none',
          element: ins
        });
        setDebugInfo(prev => prev + ` - display: ${adDisplay}`);
      }, 5000);
    }
  }, [adUnit, width, height]);

  return (
    <div className={`kakao-ad-wrapper ${className}`}>
      {/* 디버그 정보 표시 */}
      <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>
        Debug: {debugInfo}
      </div>
      
      <div 
        ref={adRef} 
        className="kakao-ad-container"
        style={{ 
          width: `${width}px`, 
          height: `${height}px`, 
          margin: '10px auto',
          textAlign: 'center',
          border: '1px solid #ddd',
          backgroundColor: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <span style={{ color: '#999', fontSize: '14px' }}>
          광고 로딩 중...
        </span>
      </div>
      
      {/* 추가 디버그 정보 */}
      <div style={{ fontSize: '11px', color: '#999', marginTop: '5px' }}>
        AdUnit: {adUnit} | Size: {width}x{height}
      </div>
    </div>
  );
};

export default KakaoAd;