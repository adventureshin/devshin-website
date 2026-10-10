import { Check, Plus } from 'lucide-react';
import ExternalLink from './ExternalLink';
import ProjectVisual from './ProjectVisual';
export default function Project({
  project
}) {
  return <article id={project.id} className="project">
      <div className="project-copy"><div className="project-topline"><span className="project-number">/{project.number}</span><span>{project.category}</span></div><p className="project-name">{project.name}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><p className="project-context">{project.context}</p><dl className="project-role"><dt>담당</dt><dd>{project.role}</dd></dl><ul className="project-highlights">{project.highlights.map(item => <li key={item}><Check size={15} aria-hidden="true" />{item}</li>)}</ul><ul className="tags" aria-label="사용 기술">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><div className="project-actions"><details className="case-study"><summary>구현 내용 살펴보기<span className="sr-only">: {project.name}</span><Plus size={16} aria-hidden="true" /></summary><div className="case-study-body">{project.caseStudy.map(item => <div key={item.label}><h4>{item.label}</h4><p>{item.text}</p></div>)}</div></details>{project.links.length > 0 && <div className="project-links">{project.links.map(link => <ExternalLink key={link.url} href={link.url}>{link.label}</ExternalLink>)}</div>}</div></div>
      <ProjectVisual kind={project.diagram} />
    </article>;
}
