import { capabilities } from '../data/portfolio';
import SectionHeading from './SectionHeading';
export default function Capabilities() {
  return <section id="skills" className="section skills-section"><div className="container"><SectionHeading number="03" eyebrow="CAPABILITIES" title="기술을 연결해 만드는 것들." /><div className="capability-grid">{capabilities.map(item => <article className="capability" key={item.name}><span className="capability-number">{item.number}</span><h3>{item.name}</h3><p>{item.description}</p><ul className="tags">{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></article>)}</div><div className="education"><div><p className="eyebrow">EDUCATION</p><h3>연세대학교</h3><p>건축공학 학사 · 2024.02 졸업</p></div><div><p className="eyebrow">AWARDS</p><ul><li><span>2021</span>구조물 내진 설계 대회 · 국토교통부장관상</li><li><span>2022</span>LH 대학(원)생 부동산 금융 논문 공모전 · 우수상</li></ul></div></div></div></section>;
}
