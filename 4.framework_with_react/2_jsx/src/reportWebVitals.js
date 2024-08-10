const reportWebVitals = onPerfEntry => {
  // onPerfEntry가 존재하고 함수(Function)인 경우에만 실행됩니다.
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // 'web-vitals' 패키지를 동적으로 import 합니다.
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Cumulative Layout Shift (CLS) 측정하고 결과를 onPerfEntry로 전달
      getCLS(onPerfEntry);
      // First Input Delay (FID) 측정하고 결과를 onPerfEntry로 전달
      getFID(onPerfEntry);
      // First Contentful Paint (FCP) 측정하고 결과를 onPerfEntry로 전달
      getFCP(onPerfEntry);
      // Largest Contentful Paint (LCP) 측정하고 결과를 onPerfEntry로 전달
      getLCP(onPerfEntry);
      // Time to First Byte (TTFB) 측정하고 결과를 onPerfEntry로 전달
      getTTFB(onPerfEntry);
    });
  }
};
/*
주석 요약:

onPerfEntry 확인: onPerfEntry가 함수(Function)인지 확인하여, 함수인 경우에만 성능 측정 작업을 진행합니다. 
이는 onPerfEntry가 성능 데이터를 처리할 콜백 함수로 사용되기 때문입니다.

동적 import: web-vitals 모듈을 동적으로 로드합니다. 이렇게 하면 성능 측정을 실제로 필요로 할 때만 해당 코드가 로드되며, 
초기 로딩 성능을 최적화할 수 있습니다.

각 성능 지표 측정:
getCLS, getFID, getFCP, getLCP, getTTFB 함수들은 각각 웹 페이지의 중요한 성능 지표를 측정합니다.
측정된 데이터는 onPerfEntry 콜백 함수로 전달되며, 이를 통해 성능 데이터를 기록하거나 분석할 수 있습니다.
이 코드는 기본적으로 성능을 모니터링하고, 필요한 경우 그 데이터를 서버나 로그 시스템에 보내기 위한 기초를 제공합니다.
*/
export default reportWebVitals;
