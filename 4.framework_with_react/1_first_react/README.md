# React 프로젝트 폴더 구조 설명

React 프로젝트를 생성하면, 기본적으로 다음과 같은 폴더 구조가 생성됩니다:

my-react-app/
├── node_modules/
├── public/
│ ├── favicon.ico
│ ├── index.html
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.json
│ └── robots.txt
├── src/
│ ├── App.css
│ ├── App.js
│ ├── App.test.js
│ ├── index.css
│ ├── index.js
│ ├── logo.svg
│ └── reportWebVitals.js
│ └── setupTests.js
├── .gitignore
├── package.json
├── README.md
└── yarn.lock (또는 package-lock.json)


## 폴더 및 파일 설명

### `node_modules/`
이 폴더는 프로젝트에 필요한 모든 npm 패키지들을 포함하고 있습니다. 직접 수정하지 않습니다. `package.json`에 명시된 패키지들이 설치됩니다.

### `public/`
이 폴더에는 정적 파일들이 포함됩니다. 여기 있는 파일들은 빌드 시 그대로 복사됩니다.

- **`favicon.ico`**: 브라우저 탭에 표시되는 아이콘 파일입니다.
- **`index.html`**: 단일 HTML 파일로, React 애플리케이션의 진입점입니다. 이 파일에 루트 DOM 노드가 있으며, React 컴포넌트가 이곳에 렌더링됩니다.
- **`manifest.json`**: 웹 애플리케이션이 설치될 때 필요한 메타데이터를 포함합니다.
- **기타 이미지 파일들 (logo192.png, logo512.png)**: PWA(Progressive Web App) 및 기타 용도로 사용됩니다.
- **`robots.txt`**: 검색 엔진 크롤러에게 웹사이트의 크롤링 방법을 알려주는 파일입니다.

### `src/`
여기에는 애플리케이션의 주요 소스 파일들이 포함됩니다.

- **`App.css`**: `App` 컴포넌트에 대한 스타일시트 파일입니다.
- **`App.js`**: 주요 React 컴포넌트 파일입니다. 애플리케이션의 기본 구조가 정의됩니다.
- **`App.test.js`**: `App` 컴포넌트를 위한 테스트 파일입니다.
- **`index.css`**: 전역 스타일시트 파일입니다.
- **`index.js`**: 애플리케이션의 진입점 파일입니다. 여기서 React DOM이 `index.html`의 루트 DOM 노드에 렌더링됩니다.
- **`logo.svg`**: React 로고 파일입니다.
- **`reportWebVitals.js`**: 웹 애플리케이션의 성능 측정을 도와주는 파일입니다.
- **`setupTests.js`**: Jest 테스트를 위한 초기 설정 파일입니다.

### 루트 파일들

- **`.gitignore`**: Git에 의해 무시될 파일 및 디렉토리를 지정합니다.
- **`package.json`**: 프로젝트의 종속성, 스크립트 및 메타데이터를 포함하는 파일입니다.
- **`README.md`**: 프로젝트에 대한 설명서 파일입니다.
- **`yarn.lock` 또는 `package-lock.json`**: 프로젝트의 정확한 종속성 트리를 잠그는 파일입니다. 어떤 패키지 버전들이 설치되었는지 기록합니다.

이 기본 구조를 바탕으로 필요에 따라 폴더와 파일을 추가하고 수정하여 프로젝트를 확장할 수 있습니다.

# npm, npx, yarn의 차이

## npm (Node Package Manager)

**npm**은 Node.js의 기본 패키지 관리자입니다. 패키지를 설치, 삭제, 관리하는 데 사용됩니다.

- **주요 기능:**
  - **패키지 설치:** `npm install <package-name>`
  - **패키지 삭제:** `npm uninstall <package-name>`
  - **프로젝트 초기화:** `npm init`
  - **스크립트 실행:** `npm run <script-name>`

## npx (Node Package Execute)

**npx**는 npm 버전 5.2.0부터 기본적으로 포함된 도구로, 일회성 명령어 실행을 위해 설계되었습니다.

- **주요 기능:**
  - **패키지 실행:** 로컬 또는 글로벌로 설치되지 않은 패키지를 실행. 예: `npx create-react-app my-app`
  - **버전 지정:** 특정 버전의 패키지 실행. 예: `npx create-react-app@latest my-app`
  - **단순 명령어 실행:** npm 패키지의 실행 파일을 간편하게 실행.

## yarn

**Yarn**은 Facebook이 개발한 패키지 관리자입니다. npm의 몇 가지 문제를 해결하고 성능과 안정성을 개선하기 위해 만들어졌습니다.

- **주요 기능:**
  - **패키지 설치:** `yarn add <package-name>`
  - **패키지 삭제:** `yarn remove <package-name>`
  - **프로젝트 초기화:** `yarn init`
  - **스크립트 실행:** `yarn <script-name>`
  - **빠른 설치:** 병렬적으로 패키지를 다운로드하여 설치 속도가 빠름.
  - **결정적 설치:** `yarn.lock` 파일을 사용하여 동일한 패키지 버전이 설치되도록 보장.

## 요약

- **npm:** Node.js의 기본 패키지 관리자, 패키지 설치, 삭제, 스크립트 실행 등 기본 기능 제공.
- **npx:** 일회성 패키지 실행 도구, 글로벌로 설치하지 않고도 패키지를 실행할 수 있음.
- **yarn:** Facebook이 개발한 패키지 관리자, 빠른 설치, 결정적 설치, 일부 npm 문제 해결.

각 도구는 상황에 따라 유용하게 사용할 수 있습니다. npm과 yarn은 주로 패키지 설치와 관리에 사용되며, npx는 일회성 패키지 실행에 주로 사용됩니다.

# npm start

개발 모드에서 애플리케이션을 실행합니다.

# npm test

인터랙티브 watch 모드에서 테스트 러너를 실행합니다.

# npm run build

프로덕션용으로 앱을 build 폴더에 빌드합니다.

