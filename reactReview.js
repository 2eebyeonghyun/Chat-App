// React Review
//  -> 왜 FE개발자들은 이것을 쓰는가?

// 재사용성★, 다른 라이브러리( 프레임워크)보다 성능상 좋다. ( 대규모 프로젝트에 강점)
//  -> 보기보다 리액트가 유연하다.
// 생태계 구성이 매우 좋다.

// ● react의 원칙
// 1. 선언적 프로그래밍 : 구성과 업데이트가 아닌 어떻게 보여져야 하는지를 설명하는 코드를 작성하도록 유도 
//                       -> 어플리케이션의 상태와 동작을 이해하기 쉽게 만들어서 디버깅, 유지보수 간소화
// 2. 컴포넌트 기반 구조 : 모듈화, 재사용성 고려
// 3. 단방향 데이터 흐름 : 상태관리의 단순화

// npm: node package manager
//  -> node관련 모든 패키지들을 관리( 온라인 데이터베이스)
//  -> npm이 좀 느림, 성능 및 속도 안정성을 강화한 패키지 매니저가 yarn
//  npm install -g yarn
// yarn을 활용하여 react 설치
// yarn global add create-react-app
// create-react-app [프로젝트명]

// 만약 Module not found: Error: Can't resolve 'web-vitals' in
// 에러가 발생하면 다음의 패키지를 설치
// npm i web-vitals --save-dev

// 실행 - yarn start

// 진행할 프로젝트
// 챗봇 만들기 - 서버구축은 준비되어있는 내용으로 진행
//  -> firebase ( 파트 따로 준비했다.)
// BE : Django (REST) Framwork
// React : 그동안 배운 내용들 복습도 하고 직접 화면도 구축
// next.js : react에서 성능 최적화와 SEO 강화를 위해, SSR, CSR

// ● 리액트와 구성요소기반 아키텍쳐
// 1. 리액트가 개발자들에게 원하는 것
//  -> UI를 독립적, 재사용 가능하도록 구성하는것을 유도

// ● 구성요소 기반 접근 방식의 장점
//  -> 모듈성, 재사용성, 캡슐화

// ● React 주요도구
// 1. Virtual DOM : 직접적인 DOM 조작을 최소화 하기위해 나온 개념
//  -> 대량의 데이터를 처리할때도 UI가 반응적인 상태를 유지할 수 있다.( SPA)
//  -> RealDOM의 인메모리 표현
//  -> 업데이트를 진행 후 RealDOM에 최소한의 변경사항만 적용

// 2. JSX

// 3. 상태관리 
//  -> 사용자의 입력처리, 데이터 로딩, 시스템( 어플리케이션)의 상태 변경에 따른 사용자 인터페이스 
//     업데이트를 더 쉽게 처리하도록 지원

// 4. 라이플사이클
//  -> 구성요소에 생성부터 소멸까지의 다양한 단계를 제어( Hooks)

// 5. 다양한 개발자 도구