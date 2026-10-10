export const profile = {
  name: '신영재',
  englishName: 'Youngjae Shin',
  email: 'sdhkygg@gmail.com',
  linkedin: 'https://www.linkedin.com/in/devshindev/',
  title: 'Software Engineer · Backend & AI Systems',
};

export const projects = [
  {
    id: 'deco-my-tree',
    number: '01',
    name: 'Deco My Tree',
    category: 'Consumer service',
    context: 'Unboxers · 1개월 내 개발·출시 / 이후 프리랜서 유지보수',
    title: '600만 명 이상이 이용한 서비스의 백엔드.',
    description: '익명 쪽지 서비스의 API와 AWS 인프라를 개발·운영했습니다. 사용자가 몰리는 서비스에서 데이터베이스 쓰기 부하와 DDoS에 대응했습니다.',
    role: '백엔드 개발 · 인프라 구축 및 운영',
    tags: ['Go', 'Fiber', 'AWS', 'PostgreSQL', 'Redis'],
    diagram: 'deco',
    highlights: ['1개월 내 개발·출시, 백엔드와 인프라 운영 담당', 'Public API의 데이터베이스 쓰기 부하 분산', 'FakeToken과 AWS WAF를 활용한 DDoS 대응', 'RDS·Redis·EC2 기반 운영 및 후속 유지보수'],
    caseStudy: [
      { label: '출시까지의 책임', text: '팀과 함께 1개월 안에 서비스를 개발·출시했습니다. 백엔드 API와 AWS 인프라를 맡아 빠듯한 일정에서도 출시를 완수하고, 이후 트래픽 대응과 유지보수를 이어갔습니다.' },
      { label: '문제', text: '짧은 기간에 사용자가 몰리는 서비스에서는 정상 요청의 처리와 공격 트래픽 대응을 함께 고려해야 했습니다.' },
      { label: '구현', text: 'Go/Fiber API 서버, PostgreSQL과 Redis, AWS 인프라를 구성하고 Public API의 쓰기 부하를 분산했습니다. FakeToken과 WAF를 활용해 DDoS에 대응했습니다.' },
      { label: '운영', text: '서비스 개발 이후 프리랜서로도 서버 유지보수를 이어갔습니다. RDS·Redis 용량 조정과 광고 관련 API 개발을 담당했습니다.' },
    ],
    links: [{ label: '서비스 보기', url: 'https://decomytree.com/' }, { label: 'App Store', url: 'https://apps.apple.com/us/app/deco-my-tree-x-mas-messages/id6473818952' }],
  },
  {
    id: 'hype',
    number: '02',
    name: 'HYPE · 익명 칭찬 투표 SNS',
    category: 'Social application',
    context: 'Unboxers · 1개월 내 개발·출시 / 서비스 성과: 2023년',
    title: '한국 앱스토어 전체 1위, 17일간.',
    description: '60만 명 이상이 이용한 익명 칭찬 투표 서비스입니다. 백엔드와 AWS 인프라를 담당하고, 서비스 성장에 맞춰 데이터베이스 성능과 운영 환경을 개선했습니다.',
    role: '백엔드 개발 · DB 성능 최적화 · 인프라 운영',
    tags: ['Django', 'DRF', 'AWS', 'MySQL', 'Redis', 'Datadog'],
    diagram: 'hype',
    highlights: ['1개월 내 개발·출시, 이후 성능 최적화와 운영 담당', 'Aurora와 EC2 Auto Scaling으로 인프라 구성', 'Redis 캐시 전략을 통한 응답 속도 개선', 'Percona를 활용한 대용량 테이블 Online DDL 적용'],
    caseStudy: [
      { label: '출시까지의 책임', text: '팀과 함께 1개월 안에 개발부터 출시까지 진행했습니다. 백엔드 API와 인프라를 맡아 출시를 완수하고, 사용자가 늘어난 뒤에도 서비스 운영과 성능 개선을 이어갔습니다.' },
      { label: '구현과 운영', text: 'Django/DRF 기반 API와 MySQL 데이터베이스, AWS 인프라를 개발·운영했습니다. Aurora와 EC2 Auto Scaling을 적용하고 Redis 캐시 전략을 개선했습니다. Percona를 활용해 대용량 테이블의 Online DDL 마이그레이션도 수행했습니다.' },
      { label: '서비스 성과', text: 'HYPE는 2023년 한국 앱스토어 전체 1위를 17일간 유지했고, 5월 한 달에 60만 명 이상이 이용했습니다. 이 서비스의 백엔드 개발과 운영을 담당했습니다.' },
    ],
    links: [{ label: '서비스 성과 기사', url: 'https://www.unicornfactory.co.kr/article/2023062808050124528' }, { label: '회사 소개', url: 'https://www.unboxers.team/' }],
  },
  {
    id: 'legal-rag',
    number: '03',
    name: 'Legalize KR · 법령·판례 RAG',
    category: 'AI application',
    context: '기술 프로젝트 · 프로토타입',
    title: '답변을 원문과 검토 시점에 연결하기.',
    description: 'Legalize KR 데이터를 활용해 법령과 판례를 검색하고 출처를 표시하는 시스템을 개발했습니다. 검색 파이프라인부터 채팅 API와 웹 UI까지 구현했습니다.',
    role: 'Rust 검색·응답 파이프라인 · MCP 연동 · 채팅 API와 UI 개발',
    tags: ['Rust', 'Qdrant', 'Local LLM', 'MCP', 'Redis', 'SolidJS'],
    diagram: 'legal',
    highlights: ['조문·판례 파싱, 청크 생성과 검색 색인', 'fff-mcp를 활용한 로컬 법령·판례 파일 검색 연동', '검토 기준일에 따른 법령·판례 필터링과 출처 표시', '응답 스트리밍 및 재연결 시 작업 상태 복원'],
    caseStudy: [
      { label: '문제', text: '답변의 근거를 다시 읽을 수 있어야 하고, 질문의 검토 기준일 이후 법령이나 판례가 섞이지 않도록 다뤄야 했습니다.' },
      { label: '구현', text: '기존 Legalize KR 법령 데이터를 파싱·청크화하고 Qdrant에 색인했습니다. 검색된 조문과 판례를 검토 기준일로 필터링하고 답변에 출처 정보를 연결했습니다.' },
      { label: 'MCP 연동', text: 'fff-mcp를 연결해 로컬 법령·판례 파일을 탐색하도록 구현했습니다. 필요할 때 ripgrep·walkdir 검색으로 이어지는 폴백을 구성하고, 검색 결과는 Redis 캐시로 재사용합니다.' },
      { label: '인터페이스', text: '로컬 모델 런타임에 연결하는 Rust API와 SolidJS 채팅 UI를 구현했습니다. 스트림 연결이 끊어진 뒤에도 작업 상태를 복원하는 흐름을 추가했습니다.' },
    ],
    links: [],
  },
];

export const experience = [
  {
    company: 'Contents Technologies',
    role: 'Software Engineer',
    period: '2026.03 — 현재',
    current: true,
    description: '본사와 자회사에서 사용하는 내부 업무 시스템을 개발합니다. 실무에 필요한 도구를 만들고 데이터 처리와 검색 환경을 개선합니다.',
    details: ['Rust 백엔드와 SolidJS 내부 웹 애플리케이션 개발', '자료 수집·검증 및 문서 처리·검색 도구 개발'],
    url: 'https://contentstech.com/',
  },
  {
    company: '프리랜서',
    role: 'Full-stack Developer',
    period: '2025.12 — 2026.02',
    description: '기존 서비스의 운영을 이어가고, 학습 앱을 클라이언트부터 서버까지 개발했습니다.',
    details: ['Deco My Tree 서버 유지보수, DDoS 대응 및 RDS·Redis 용량 조정', 'Uphill의 React Native 앱·관리자 웹·FastAPI 서버 개발', 'React Native Bridge를 통한 Apple Pencil 풀이 기능 구현'],
  },
  {
    company: 'Unboxers',
    role: 'Co-founder & Backend Engineer',
    period: '2022.09 — 2024.09',
    description: '공동창업자이자 사내 유일한 백엔드 개발자로 제품을 만들었습니다. 10개 이상의 서비스에서 API와 인프라를 설계하고 배포·운영했습니다.',
    details: ['Deco My Tree와 HYPE를 각각 1개월 내 개발·출시, 백엔드와 인프라 담당', 'HYPE의 한국 앱스토어 전체 1위 17일 유지와 서비스 성장 경험', '서버 구축부터 성능 최적화, 트래픽 대응과 후속 운영까지 담당'],
    achievement: {
      date: '2023.06',
      title: '14억 원 시드 투자 유치',
      description: '베이스인베스트먼트 · 미래에셋벤처투자 · 굿워터캐피탈 참여',
      sourceUrl: 'https://www.unicornfactory.co.kr/article/2023062808050124528',
    },
    url: 'https://www.unboxers.team/',
  },
];

export const moreWork = [
  { name: 'Concept', type: 'AI 프로필 생성 앱', image: 'concept.webp', description: '10만 명 이상이 이용한 서비스. AI 작업을 연결하는 비동기 처리 파이프라인과 인프라 개발.', stack: 'FastAPI · ECS · SQS · Terraform', url: 'https://apps.apple.com/kr/app/concept-ai-%ED%94%84%EB%A1%9C%ED%95%84-%EC%8A%A4%EB%83%85%EC%82%AC%EC%A7%84/id6470380557', linkLabel: 'App Store' },
  { name: 'Uphill', type: '학생 문제 풀이 앱', image: 'uphill.webp', description: 'Apple Pencil 풀이 기능, 선생님용 관리자 웹, API 서버와 AWS 인프라를 함께 개발.', stack: 'React Native · React · FastAPI', url: 'https://apps.apple.com/kr/app/%EC%97%85%ED%9E%90/id6756876879', linkLabel: 'App Store' },
  { name: '이등급 사관학원', type: '수학 학습 프로그램', image: 'inbrain.webp', description: '학생 실력에 따른 문제 선별 알고리즘, Django 웹 애플리케이션과 AWS 인프라 개발.', stack: 'Django · AWS' },
];

export const capabilities = [
  { number: '01', name: 'Backend & Infrastructure', description: 'API 설계와 데이터베이스부터 배포, 트래픽 대응, 운영까지.', tags: ['Rust', 'Go', 'Python', 'Axum', 'Fiber', 'FastAPI', 'Django', 'AWS', 'Linux', 'Docker', 'PostgreSQL', 'MySQL', 'Redis'] },
  { number: '02', name: 'Data & AI Systems', description: '자료를 수집하고 정리해, 근거를 확인할 수 있는 검색과 도구로 연결합니다.', tags: ['Data pipelines', 'Document extraction', 'OCR', 'Qdrant', 'Hybrid search', 'Reranking', 'RAG', 'MCP'] },
  { number: '03', name: 'Product Development', description: '공동창업과 제품 개발 경험을 바탕으로, 실제 업무에 필요한 인터페이스를 만듭니다.', tags: ['SolidJS', 'React', 'React Native', 'TypeScript', 'JavaScript', 'SAML SSO', 'Terraform', 'Git'] },
];
