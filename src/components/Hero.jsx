import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="top" className="hero container" aria-labelledby="hero-title">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow">YOUNGJAE SHIN / SOFTWARE ENGINEER</p>
          <h1 id="hero-title">사용자 서비스부터<br /><span>업무 시스템까지.</span></h1>
          <p className="hero-description">
            API와 데이터, 운영 환경을 함께 설계하는<br className="desktop-break" />
            {' '}개발자 신영재입니다. 대규모 사용자 서비스와<br className="desktop-break" />
            {' '}업무 자동화, AI 검색 시스템을 만들어왔습니다.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">경력 살펴보기<ArrowDown size={17} aria-hidden="true" /></a>
            <a className="button button-secondary" href={`mailto:${profile.email}`}>이메일로 연락하기<ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
          <p className="current-role"><span className="status-dot" aria-hidden="true" />Software Engineer @ Contents Technologies</p>
        </div>
        <aside className="hero-notes" aria-label="주요 경험">
          <p className="eyebrow">BUILD. CONNECT. OPERATE.</p>
          <div className="hero-note">
            <span className="note-index">01 / OWNERSHIP</span>
            <h2>출시와 운영까지 책임집니다.</h2>
            <p>Unboxers 공동창업자로 두 서비스의 백엔드를 맡아,<br />Deco My Tree와 HYPE를 각각 한 달 안에 출시했습니다.</p>
          </div>
          <div className="hero-note">
            <span className="note-index">02 / SYSTEMS</span>
            <h2>업무를 연결하는 시스템.</h2>
            <p>Rust 기반 업무 도구와 데이터 처리,<br />법령·판례 검색과 AI 응답 시스템을 개발합니다.</p>
          </div>
          <div className="notes-foot"><span>devshin.dev</span><span>Backend / Data / AI</span></div>
        </aside>
      </div>
      <div className="evidence-strip" aria-label="주요 경력 근거">
        <div><strong>600만<span>+</span></strong><p>Deco My Tree 서비스 이용자</p></div>
        <div><strong>1위</strong><p>HYPE 한국 앱스토어 전체<br />2023년 · 17일간 유지</p></div>
        <div><strong>1개월</strong><p>Deco My Tree · HYPE<br />각각 개발부터 출시까지</p></div>
        <div><strong>10개<span>+</span></strong><p>Unboxers 서비스 백엔드<br />설계·개발·운영 담당</p></div>
      </div>
    </section>
  );
}
