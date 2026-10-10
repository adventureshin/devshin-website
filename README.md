# DevShin

신영재의 포트폴리오 사이트. 사용자 서비스, 업무 자동화, 데이터·AI 시스템의 구현 경험을 소개합니다.

## Development

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run build
npm run preview
```

Node.js 20 이상을 사용합니다. 기존 GitHub Pages 배포 워크플로는 `npm run build` 결과를 배포합니다.

## Structure

- `src/data/portfolio.js`: 소개, 프로젝트, 경력, 기술 정보
- `src/components/`: 메뉴, 프로젝트 설명·흐름도, 연락 UI
- `src/App.jsx`: 섹션 구성
- `src/index.css`: 디자인 토큰과 반응형 스타일
- `scripts/build.mjs`: Vite 빌드 후 React 콘텐츠를 HTML로 사전 렌더링
- `design-system/devshin/MASTER.md`: 디자인 방향과 유지보수 기준

## Content

프로젝트는 문제, 직접 담당한 구현, 운영·설계 경험을 중심으로 작성합니다. 서비스 이용자 수를 동시 접속자나 개인의 성과 수치로 바꾸지 않습니다. 내부 프로젝트는 공개 가능한 구현 개요만 기재하며 고객 데이터·화면·코드 링크는 포함하지 않습니다. 개발 중인 제품과 프로토타입은 해당 상태를 표시합니다.

경력과 프로젝트 내용은 `src/data/portfolio.js`에서 관리합니다. 날짜, 규모, 현재 역할이 바뀌면 이 파일을 갱신하고 빌드해야 합니다. 검색·공유 메타 정보는 `index.html`에 있습니다.

## Rendering

빌드 결과의 `dist/index.html`에 본문을 포함하므로 JavaScript 실행 전에도 소개와 프로젝트, 링크를 확인할 수 있습니다. 브라우저에서는 이 HTML을 hydrate하고 메뉴, 이메일 복사 등 상호작용을 연결합니다. 개발 서버에서는 일반 React 렌더링을 사용합니다. 빌드 중 생성되는 `.prerender/`는 완료·실패 시 정리됩니다.

## UI principles

독자를 지칭하는 문구 대신 실제 작업과 연락 경로를 보여줍니다. 프로젝트 상세는 기본 HTML `details`로 열 수 있으며, 외부 링크는 상시 표시합니다. 작은 화면에서 메뉴는 버튼으로 열고 Escape로 닫을 수 있습니다. 키보드 포커스, 본문 바로가기, reduced motion을 지원합니다.

## Achievement sources

- [Unboxers official introduction](https://www.unboxers.team/): HYPE's 17 days at number one across the Korean App Store and the company's seed financing.
- [MoneyToday / UnicornFactory, 2023-06-28](https://www.unicornfactory.co.kr/article/2023062808050124528): HYPE's ranking, 600,000+ users in May 2023, Unboxers's KRW 1.4 billion seed round, and participating investors.

App rankings and financing are historical service/company results; the personal role is backend development, infrastructure operation, and co-founding. The one-month development and launch timeline for each of Deco My Tree and HYPE was provided by Youngjae Shin. The Legalize KR application uses an existing corpus and integrates fff-mcp for local file search.
