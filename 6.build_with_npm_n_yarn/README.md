# npm과 yarn의 차이점 및 장단점

## 개요
npm(Node Package Manager)와 Yarn은 JavaScript 및 Node.js 애플리케이션에서 패키지를 관리하기 위한 패키지 매니저입니다. 두 도구는 비슷한 기능을 제공하지만, 각각의 장단점과 차이점이 있습니다.

## npm

### 특징
- **기본 제공**: npm은 Node.js를 설치하면 기본적으로 제공되는 패키지 매니저입니다.
- **npm 레지스트리**: npm은 세계에서 가장 큰 소프트웨어 레지스트리인 npm 레지스트리에 접근할 수 있게 합니다.
- **스크립트 관리**: 프로젝트 내에서 사용할 수 있는 다양한 스크립트를 쉽게 정의하고 실행할 수 있습니다.

### 장점
- **광범위한 생태계**: npm 레지스트리에 수많은 패키지가 등록되어 있으며, 다양한 프로젝트에 쉽게 접근할 수 있습니다.
- **기본 제공**: Node.js와 함께 설치되므로 추가 설치가 필요 없습니다.
- **버전 7 이상에서 향상된 기능**: npm 7부터는 Workspaces, 자동 peer dependencies 설치 등 Yarn의 주요 기능을 일부 도입했습니다.

### 단점
- **속도**: npm은 Yarn에 비해 느릴 수 있으며, 특히 큰 프로젝트에서 속도 저하가 발생할 수 있습니다.
- **동시성 문제**: 과거 버전에서는 병렬 설치가 제대로 이루어지지 않아 속도 저하가 있었으나, 최신 버전에서는 개선되었습니다.
- **lockfile 관리**: `package-lock.json` 파일이 가끔 예측과 다르게 업데이트될 수 있습니다.

## Yarn

### 특징
- **페이스북 개발**: Yarn은 Facebook이 npm의 문제를 해결하기 위해 개발한 패키지 매니저입니다.
- **빠른 속도**: Yarn은 병렬 설치 및 캐시 기능을 통해 패키지를 더 빠르게 설치할 수 있습니다.
- **고급 기능**: Workspaces, Zero-Install CI/CD 지원 등 npm에 비해 추가적인 기능을 제공합니다.

### 장점
- **속도**: Yarn은 병렬 처리 및 캐싱 덕분에 npm보다 빠른 패키지 설치 속도를 자랑합니다.
- **안정성**: Yarn은 동일한 패키지를 여러 번 설치할 때에도 일관된 결과를 제공합니다.
- **워크스페이스 지원**: Yarn Workspaces를 통해 모노레포(monorepo) 관리가 용이합니다.
- **Zero-Install**: Yarn v2부터는 프로젝트의 `node_modules` 디렉터리 없이도 실행이 가능하도록 하여, CI/CD 파이프라인에서 유용합니다.

### 단점
- **추가 설치 필요**: Node.js에 기본적으로 포함되지 않으므로 별도로 설치해야 합니다.
- **Yarn v2의 복잡성**: Yarn 버전 2부터는 새로운 플러그인 아키텍처가 도입되었고, 설정 파일도 다소 복잡해질 수 있습니다.
- **레지스트리 호환성**: npm 레지스트리와 기본적으로 호환되지만, 일부 경우에 따라 설정이 필요할 수 있습니다.

## 결론
- **npm**: Node.js와 함께 기본적으로 제공되며, 광범위한 생태계를 갖추고 있어 초보자에게 적합합니다. 최근 버전에서는 Yarn과 유사한 기능도 도입되었지만, 여전히 큰 프로젝트에서는 속도 문제를 겪을 수 있습니다.
- **Yarn**: 속도와 안정성에서 강점을 보이며, 모노레포 관리와 같은 고급 기능이 필요할 경우 적합합니다. 다만, 추가 설치가 필요하고, 설정이 다소 복잡할 수 있습니다.

각 프로젝트의 요구사항과 팀의 경험에 따라 적절한 패키지 매니저를 선택하는 것이 중요합니다.


# npm과 Yarn의 기본 명령어

## 개요
npm과 Yarn은 유사한 기능을 제공하며, 대부분의 명령어는 서로 대응됩니다. 아래는 주요 명령어를 비교하여 정리한 것입니다.

## 패키지 초기화

- **npm**: `npm init`
- **Yarn**: `yarn init`

새로운 Node.js 프로젝트를 초기화할 때 사용됩니다. `npm init`과 `yarn init` 모두 프로젝트의 `package.json` 파일을 생성합니다.

## 패키지 설치

- **npm**: `npm install <package-name>` 또는 `npm i <package-name>`
- **Yarn**: `yarn add <package-name>`

패키지를 설치하고, `package.json`과 `node_modules` 디렉토리에 패키지를 추가합니다.

### 모든 종속성 설치

- **npm**: `npm install` 또는 `npm i`
- **Yarn**: `yarn install` 또는 단순히 `yarn`

`package.json` 파일에 정의된 모든 종속성을 설치합니다.

### 개발 종속성 설치

- **npm**: `npm install <package-name> --save-dev` 또는 `npm i <package-name> -D`
- **Yarn**: `yarn add <package-name> --dev`

개발 환경에서만 필요한 패키지를 설치할 때 사용합니다.

## 패키지 제거

- **npm**: `npm uninstall <package-name>` 또는 `npm rm <package-name>`
- **Yarn**: `yarn remove <package-name>`

설치된 패키지를 제거하고, `package.json`과 `node_modules`에서 삭제합니다.

## 특정 버전의 패키지 설치

- **npm**: `npm install <package-name>@<version>`
- **Yarn**: `yarn add <package-name>@<version>`

특정 버전의 패키지를 설치할 때 사용합니다.

## 글로벌 패키지 설치

- **npm**: `npm install -g <package-name>` 또는 `npm i -g <package-name>`
- **Yarn**: `yarn global add <package-name>`

시스템 전체에서 사용 가능한 글로벌 패키지를 설치합니다.

## 패키지 업데이트

- **npm**: `npm update <package-name>`
- **Yarn**: `yarn upgrade <package-name>`

설치된 패키지를 최신 버전으로 업데이트합니다.

### 모든 패키지 업데이트

- **npm**: `npm update`
- **Yarn**: `yarn upgrade`

모든 종속성을 최신 버전으로 업데이트합니다.

## 캐시 관리

- **npm**: `npm cache clean --force`
- **Yarn**: `yarn cache clean`

로컬 캐시를 정리합니다. 캐시 문제로 인해 패키지 설치에 문제가 발생할 때 유용합니다.

## 프로젝트 스크립트 실행

- **npm**: `npm run <script-name>`
- **Yarn**: `yarn <script-name>`

`package.json`에 정의된 스크립트를 실행할 때 사용합니다.

## 결론
npm과 Yarn은 많은 명령어에서 유사한 기능을 제공합니다. 각 도구의 기본 명령어를 숙지하면, 필요에 따라 손쉽게 전환할 수 있습니다.
