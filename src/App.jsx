import { ArrowUpRight } from 'lucide-react';
import { profile, projects } from './data/portfolio';
import Header from './components/Header';
import Hero from './components/Hero';
import SectionHeading from './components/SectionHeading';
import Project from './components/Project';
import Experience from './components/Experience';
import MoreWork from './components/MoreWork';
import Capabilities from './components/Capabilities';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">본문으로 바로 가기</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Experience />
        <section id="projects" className="section container">
          <SectionHeading
            number="02"
            eyebrow="SELECTED WORK"
            title="어떤 문제를, 어떻게 풀었는지."
            description="사용자 서비스와 업무 시스템에서 직접 구현한 대표 작업입니다."
          />
          <div className="project-list">
            {projects.map((project) => <Project key={project.id} project={project} />)}
          </div>
        </section>
        <MoreWork />
        <Capabilities />
        <Contact />
      </main>
      <footer className="site-footer container">
        <a href="#top" className="footer-brand">DevShin.</a>
        <p>© {profile.englishName}</p>
        <a href="#top">처음으로<ArrowUpRight size={15} aria-hidden="true" /></a>
      </footer>
    </>
  );
}
