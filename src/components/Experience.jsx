import { experience } from '../data/portfolio';
import ExternalLink from './ExternalLink';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <SectionHeading
          number="01"
          eyebrow="EXPERIENCE"
          title="제품에서 시작해, 시스템으로."
          description="공동창업부터 서비스 출시와 운영까지, 맡은 일을 끝까지 이어온 경험."
        />
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={item.company}>
              <div className="experience-period">
                {item.period}
                {item.current && <span className="current-tag">재직 중</span>}
              </div>
              <div className="experience-content">
                <div className="experience-title">
                  <h3>{item.company}</h3>
                  {item.url && (
                    <ExternalLink href={item.url}>
                      <span className="sr-only">{item.company} </span>Website
                    </ExternalLink>
                  )}
                </div>
                <p className="experience-role">{item.role}</p>
                <p className="experience-description">{item.description}</p>
                <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                {item.achievement && (
                  <div className="experience-achievement">
                    <p className="achievement-label">회사 성과 / {item.achievement.date}</p>
                    <h4>{item.achievement.title}</h4>
                    <p>{item.achievement.description}</p>
                    <ExternalLink href={item.achievement.sourceUrl}>투자 유치 기사</ExternalLink>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
