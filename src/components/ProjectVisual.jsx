import { ArrowRight, Database, FileText, Layers, ShieldCheck } from 'lucide-react';

const asset = (name) => `${import.meta.env.BASE_URL}${name}`;

function Flow({ steps }) {
  return (
    <ol className="visual-flow">
      {steps.map((step, index) => (
        <li key={step}>
          <span className="flow-index">0{index + 1}</span>
          <span>{step}</span>
          {index < steps.length - 1 && <ArrowRight size={16} aria-hidden="true" />}
        </li>
      ))}
    </ol>
  );
}

export default function ProjectVisual({ kind }) {
  if (kind === 'deco') return (
    <figure className="project-visual visual-deco">
      <div className="visual-topline"><span>DECO MY TREE</span><img src={asset('deco.webp')} width="56" height="56" alt="" loading="lazy" /></div>
      <div className="visual-stat">6M<span>+</span></div>
      <p className="visual-stat-label">서비스 이용자</p>
      <div className="deco-layers">
        <span><Layers size={18} aria-hidden="true" />Go / Fiber API</span>
        <span><Database size={18} aria-hidden="true" />PostgreSQL · Redis</span>
        <span><ShieldCheck size={18} aria-hidden="true" />AWS · WAF</span>
      </div>
      <figcaption>서비스 규모와 사용 기술</figcaption>
    </figure>
  );

  if (kind === 'hype') return (
    <figure className="project-visual visual-hype">
      <div className="visual-topline"><span>HYPE / 2023</span><img src={asset('hype.webp')} width="56" height="56" alt="" loading="lazy" /></div>
      <div className="visual-stat">No.<span>1</span></div>
      <p className="visual-stat-label">한국 App Store 전체 1위</p>
      <p className="visual-ranking-period">17일간 유지 · 2023년 서비스 성과</p>
      <div className="hype-scale"><strong>60만<span>+</span></strong><span>2023년 5월 서비스 이용자</span></div>
      <div className="deco-layers">
        <span><Layers size={18} aria-hidden="true" />Django / DRF API</span>
        <span><Database size={18} aria-hidden="true" />Aurora · Redis</span>
        <span><ShieldCheck size={18} aria-hidden="true" />EC2 Auto Scaling</span>
      </div>
      <figcaption>서비스 성과와 사용 기술</figcaption>
    </figure>
  );

  return (
    <figure className="project-visual visual-legal">
      <div className="visual-topline"><span>GROUNDED ANSWERS</span><FileText size={24} aria-hidden="true" /></div>
      <div className="citation-block">
        <span className="citation-label">답변에 연결하는 근거</span>
        <strong>법령 · 조문 · 판례</strong>
        <span>원문 출처와 검토 기준일</span>
      </div>
      <Flow steps={['질문 · 기준일 확인', '검색 · 날짜 필터링', '답변 · 출처 표시']} />
      <p className="visual-tool-note">MCP 연동 · fff-mcp 파일 검색</p>
      <figcaption>법령 RAG의 검색·응답 흐름 요약</figcaption>
    </figure>
  );
}
