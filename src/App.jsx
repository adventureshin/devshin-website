import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Mail, 
  Server, 
  Database, 
  Cloud, 
  Code, 
  ExternalLink, 
  Menu, 
  X,
  Briefcase,
  GraduationCap,
  Award,
  Smartphone,
  Globe
} from 'lucide-react';

const Section = ({ id, title, children, className = "" }) => (
  <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-6xl mx-auto">
      {title && (
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-slate-800 relative inline-block"
        >
          {title}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </motion.h2>
      )}
      {children}
    </div>
  </section>
);

const ProjectCard = ({ title, description, tags, links, image, details }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
  >
    {/* Image Section */}
    <div className="h-64 overflow-hidden bg-slate-50 relative group flex items-center justify-center p-4">
      {image ? (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
          <Code size={48} />
        </div>
      )}
      
      {/* Overlay Links */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        {links && links.map((link, idx) => (
          <a 
            key={idx} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full text-slate-900 hover:text-primary transition-colors"
            title={link.type}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
      </div>
      <p className="text-slate-600 mb-4 leading-relaxed text-sm">{description}</p>
      
      {details && (
        <ul className="mb-6 space-y-2 text-sm text-slate-600 flex-grow">
          {details.map((detail, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
              {detail}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ExperienceItem = ({ role, company, period, projects }) => (
  <div className="border-l-2 border-slate-200 pl-8 pb-12 relative last:pb-0">
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm"></div>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
      <h3 className="text-xl font-bold text-slate-800">{company}</h3>
      <span className="text-sm text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">{period}</span>
    </div>
    <p className="text-lg text-primary font-medium mb-4">{role}</p>
    
    <div className="space-y-6">
      {projects.map((project, idx) => (
        <div key={idx}>
          {project.name && (
            <h4 className="font-semibold text-slate-700 mb-2 flex items-center">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
              {project.name}
            </h4>
          )}
          <ul className="space-y-1.5 text-slate-600 pl-4 border-l border-slate-100 ml-0.5">
            {project.details.map((detail, detailIdx) => (
              <li key={detailIdx} className="text-sm flex items-start">
                <span className="mr-2 mt-1.5 w-1 h-1 bg-slate-300 rounded-full flex-shrink-0"></span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-xl font-bold text-primary tracking-tight">DevShin</a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-slate-600" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-white border-b border-slate-100"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="block text-slate-600 hover:text-primary font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[60vh]">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              안녕하세요. <br />
              <span className="text-primary">개발자 신영재</span>입니다.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
              성실함과 책임감을 바탕으로 <br className="hidden md:block" />
              주어진 프로젝트를 120%로 만드는 것에 열정을 가지고 있습니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                프로젝트 보기
              </a>
              <a href="#contact" className="px-8 py-3 bg-white text-slate-700 font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                연락하기
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About & Experience Section */}
      <Section id="experience" title="Experience & Education" className="bg-white">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="text-primary mr-3" size={24} />
              <h3 className="text-2xl font-bold text-slate-800">Work Experience</h3>
            </div>
            <div className="space-y-2">
              <ExperienceItem 
                role="프리랜서 개발자"
                company="Freelancer"
                period="2025.12 - Present"
                projects={[
                  {
                    name: "DecoMyTree 서버 유지 보수",
                    details: [
                      "DDos 공격 대응, RDS & Redis Vertical Upgrade",
                      "광고 이익 증가를 위한 API 추가 개발"
                    ]
                  },
                  {
                    name: "Uphill 풀스택 개발 외주",
                    details: [
                      "학생 문제 풀이 앱 개발",
                      "React Native Bridge를 통해 애플 펜슬 풀이 기능 구현"
                    ]
                  }
                ]}
              />
              <ExperienceItem 
                role="서버 개발자"
                company="(주) 언박서즈"
                period="2022.09 - 2024.09"
                projects={[
                  {
                    name: "", // 프로젝트 이름이 따로 없다면 빈 문자열
                    details: [
                      "10개 이상의 다양한 서비스 API 서버 및 인프라 구축",
                      "대규모 트래픽 처리를 위한 아키텍처 설계 및 최적화"
                    ]
                  }
                ]}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="text-primary mr-3" size={24} />
              <h3 className="text-2xl font-bold text-slate-800">Education</h3>
            </div>
            <div className="border-l-2 border-slate-200 pl-8 pb-12 relative">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-400 border-4 border-white shadow-sm"></div>
              <h3 className="text-xl font-bold text-slate-800">연세대학교</h3>
              <p className="text-slate-600 mb-1">건축공학 학사 졸업</p>
              <span className="text-sm text-slate-500 bg-slate-100 px-2 py-0.5 rounded">2024.02</span>
              
              <div className="mt-6">
                <div className="flex items-center mb-3">
                  <Award className="text-primary mr-2" size={18} />
                  <h4 className="font-semibold text-slate-800">Awards</h4>
                </div>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• 2021년 구조물 내진 설계 대회: 국토교통부장관상</li>
                  <li>• 2022년 LH 대학(원)생 부동산 금융 논문 공모전: 우수상</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects">
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard 
            title="Deco My Tree"
            description="600만명 이상의 사용자가 사용한 익명 쪽지 서비스입니다. 대규모 트래픽을 안정적으로 처리하기 위한 다양한 기술적 챌린지를 해결했습니다."
            image="deco.webp"
            details={[
              "Public API DB Write 부하 분산 및 FakeToken/AWS WAF를 활용한 DDoS 대응",
              "Fiber(Golang) 기반의 고성능 API 서버 구축",
              "AWS Cloud (RDS, Redis, EC2, WAF) 인프라 운영"
            ]}
            tags={["Golang", "Fiber", "AWS", "PostgreSQL", "Redis"]}
            links={[
              { type: "Website", url: "https://decomytree.com/", icon: <Globe size={20} /> },
              { type: "App Store", url: "https://apps.apple.com/us/app/deco-my-tree-x-mas-messages/id6473818952", icon: <Smartphone size={20} /> }
            ]}
          />
          
          <ProjectCard 
            title="Concept - AI 프로필"
            description="10만명 이상의 사용자가 사용한 AI 프로필 생성 앱입니다. AI 서버와 클라이언트 간의 안정적인 데이터 파이프라인을 구축했습니다."
            image="/concept.webp"
            details={[
              "FastAPI 기반 API 서버 제작 및 유지 보수",
              "Terraform을 활용한 IaC로 인프라 관리",
              "AWS ECS, SQS를 활용한 비동기 작업 처리"
            ]}
            tags={["Python", "FastAPI", "AWS ECS & SQS", "PostgreSQL"]}
            links={[
              { type: "App Store", url: "https://apps.apple.com/kr/app/concept-ai-%ED%94%84%EB%A1%9C%ED%95%84-%EC%8A%A4%EB%83%85%EC%82%AC%EC%A7%84/id6470380557", icon: <Smartphone size={20} /> }
            ]}
          />

          <ProjectCard 
            title="HYPE - 익명 투표 SNS"
            description="60만명 이상의 학생이 사용한 익명 투표 SNS 앱입니다. 데이터베이스 성능 최적화와 오토스케일링을 통해 안정적인 서비스를 제공했습니다."
            image="/hype.webp" // 사용자가 파일을 옮겨주어야 함. 없으면 엑박 대신 alt 텍스트가 뜸.
            details={[
              "RDS Aurora & EC2 Auto Scaling 적용",
              "Redis Cache 전략을 통한 응답 속도 개선",
              "Percona를 활용한 대용량 테이블 Online DDL 마이그레이션 수행"
            ]}
            tags={["Django", "DRF", "AWS", "MySQL", "Datadog"]}
            links={[]} // 링크 정보가 없어서 비워둠
          />

          <ProjectCard
            title="이등급 사관학원"
            description="강의 영상과 문제들로 이루어진 수학 교습 프로그램입니다. 학생별 맞춤형 학습을 위한 알고리즘을 구현했습니다."
            image="inbrain.webp"
            details={[
              "학생 실력에 따른 문제 선별 알고리즘 적용",
              "Django 기반의 풀스택 개발",
              "AWS Cloud 인프라 구축 및 운영"
            ]}
            tags={["Django", "AWS", "Full Stack"]}
            links={[]}
          />

          <ProjectCard
            title="업힐 - 학생 문제 풀이 앱"
            description="학생들이 문제를 풀고 풀이에 따른 피드백을 받는 앱입니다. React Native와 FastAPI를 활용한 풀스택 개발을 진행했습니다."
            image="/uphill.webp"
            details={[
              "React Native Bridge를 통해 애플 펜슬 풀이 기능 구현",
              "선생님용 관리자 페이지 React(vite)로 제작",
              "FastAPI 기반 API 서버 및 AWS 인프라 구축"
            ]}
            tags={["FastApi", "React Native", "React", "AWS"]}
            links={[
              { type: "App Store", url: "https://apps.apple.com/kr/app/%EC%97%85%ED%9E%90/id6756876879", icon: <Smartphone size={20} /> }
            ]}
          />
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Skills" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
            <div className="w-12 h-12 bg-blue-100 text-primary rounded-lg flex items-center justify-center mb-4">
              <Server size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Django', 'FastAPI', 'Golang', 'Fiber'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-white border border-slate-200 rounded-md text-sm font-medium text-slate-600">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
              <Cloud size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800">Infrastructure & DB</h3>
            <div className="flex flex-wrap gap-2">
              {['AWS', 'PostgreSQL', 'MySQL', 'Redis', 'Docker'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-white border border-slate-200 rounded-md text-sm font-medium text-slate-600">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Code size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800">Frontend & Others</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'React Native', 'JavaScript', 'Git', 'Datadog'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-white border border-slate-200 rounded-md text-sm font-medium text-slate-600">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch">
        <div className="bg-primary rounded-2xl p-8 md:p-16 text-center text-white shadow-xl shadow-blue-900/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">읽어주셔서 감사합니다.</h3>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
            언제든지 이야기 나눌 준비가 되어 있습니다. <br />
            이메일로 연락 주시면 빠르게 회신 드리겠습니다.
          </p>
          <a 
            href="mailto:sdhkygg@gmail.com" 
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            <Mail className="mr-2" size={20} />
            sdhkygg@gmail.com
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-white tracking-tight">DevShin</span>
            <p className="text-sm mt-2">Taking ownership of every line of code.</p>
          </div>
          <div className="flex space-x-6">
            <a href="mailto:sdhkygg@gmail.com" className="hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-slate-800 text-center text-sm">
          &copy; {new Date().getFullYear()} Shin Young Jae. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;