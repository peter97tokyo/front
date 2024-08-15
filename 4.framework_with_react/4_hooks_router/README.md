# React Hooks 학습 가이드

이 가이드는 React Hooks의 기본 개념과 고급 개념을 체계적으로 학습할 수 있도록 도와줍니다. 함수형 컴포넌트에서 상태 관리, 사이드 이펙트 처리 및 기타 유용한 Hooks를 이해하는 것이 목표입니다.

## 1. Hooks

### 1.1 useState
- **목적**: 함수형 컴포넌트 내에서 상태를 관리.
- **학습 내용**:
  - 상태를 초기화하는 방법.
  - 상태를 업데이트하는 방법.
  - 상태 변수와 설정 함수(setter function)의 역할 이해.

### 1.2 useEffect
- **목적**: 함수형 컴포넌트에서 사이드 이펙트(예: 데이터 가져오기, 구독 등)를 처리.
- **학습 내용**:
  - 렌더링 후 사이드 이펙트를 실행하는 방법.
  - 이펙트를 정리(cleanup)하는 방법.
  - 의존성 배열(dependency array)과 이펙트 실행 타이밍 제어 방법 이해.

## 2. 기타 유용한 Hooks

### 2.1 useContext
- **목적**: 전역 상태를 관리하고 깊게 중첩된 컴포넌트에 제공.
- **학습 내용**:
  - 컨텍스트를 생성하고 사용하는 방법.
  - Prop drilling(프로퍼티를 깊이 전달하는 문제)을 피하기 위해 컨텍스트를 사용하는 방법.

### 2.2 useReducer
- **목적**: 액션과 리듀서를 사용하여 복잡한 상태 로직을 처리(Redux와 유사).
- **학습 내용**:
  - 리듀서 함수를 정의하는 방법.
  - 상태를 업데이트하기 위해 액션을 디스패치(dispatch)하는 방법.
  - `useState` 대신 `useReducer`를 사용할 때를 이해.

### 2.3 useMemo
- **목적**: 성능 최적화를 위해 비용이 많이 드는 계산을 메모이제이션.
- **학습 내용**:
  - 불필요한 재계산을 방지하는 방법.
  - 의존성 배열을 사용하여 메모이제이션을 제어하는 방법.

### 2.4 useCallback
- **목적**: 성능 최적화를 위해 함수를 메모이제이션.
- **학습 내용**:
  - 불필요한 함수 재생성을 방지하는 방법.
  - `useCallback`과 `useMemo`의 관계 이해.

### 2.5 useRef
- **목적**: DOM 요소에 직접 접근하거나, 렌더링 사이에 유지되는 값을 저장.
- **학습 내용**:
  - Ref를 사용하여 DOM과 상호작용하는 방법.
  - 업데이트해도 리렌더링을 트리거하지 않도록 하는 방법.

## 3. Router

이 부분은 나중에 입력합니다.

## 4. 공부 중 발생한 에러

### 오류 메시지

Error: error:0308010C
envelope routines::unsupported
at new Hash (node
/crypto/hash:71:19)


이 오류는 Node.js의 버전 문제로 인해 발생합니다. 특히 Node.js v17 이상에서 Webpack과 관련된 일부 암호화 기능이 변경되면서 발생하는 오류입니다. 이를 해결하기 위한 몇 가지 방법이 있습니다.

### 4.1 NODE_OPTIONS 환경 변수 설정

Node.js에서 OpenSSL 암호화 문제를 우회하는 방법으로, NODE_OPTIONS 환경 변수를 설정하여 Webpack을 실행할 때 OpenSSL 사용을 활성화할 수 있습니다.

터미널에서 다음 명령어를 실행해 보세요:

export NODE_OPTIONS=--openssl-legacy-provider

이 명령어는 현재 세션에 대해 환경 변수를 설정합니다. 이후 yarn start 명령어를 다시 실행해 보세요.

### 4.2 .env 파일에 설정 추가

이 방법은 프로젝트의 모든 개발 세션에 대해 NODE_OPTIONS를 설정하는 방법입니다.

1. 프로젝트의 루트 디렉토리에 .env 파일을 생성하거나 기존의 .env 파일을 엽니다.

2. 다음 줄을 추가합니다:

NODE_OPTIONS=--openssl-legacy-provider

파일을 저장한 후, 다시 yarn start 명령어를 실행합니다.



