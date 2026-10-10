import { moreWork } from '../data/portfolio';
import ExternalLink from './ExternalLink';
const asset = name => `${import.meta.env.BASE_URL}${name}`;
export default function MoreWork() {
  return <section className="section container" aria-labelledby="more-work-title"><div className="more-work-heading"><p className="eyebrow">MORE WORK</p><h2 id="more-work-title">다양한 제품을 만들며 쌓은 경험.</h2></div><div className="more-work-list">{moreWork.map(item => <article key={item.name} className="more-work-item"><div className="work-identity">{item.image ? <img src={asset(item.image)} width="48" height="48" alt="" loading="lazy" /> : <span className="work-monogram" aria-hidden="true">D.</span>}<div><h3>{item.name}</h3><p>{item.type}</p></div></div><div className="work-description"><p>{item.description}</p><span>{item.stack}</span></div>{item.url ? <ExternalLink href={item.url}><span className="sr-only">{item.name} </span>{item.linkLabel}</ExternalLink> : <span className="work-context">개발·운영 경험</span>}</article>)}</div></section>;
}
