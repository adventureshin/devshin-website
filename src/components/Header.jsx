import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Linkedin, Menu, X } from 'lucide-react';
import { profile } from '../data/portfolio';
import ExternalLink from './ExternalLink';
const navLinks = [
  { label: '경력', href: '#experience' },
  { label: '프로젝트', href: '#projects' },
  { label: '기술', href: '#skills' },
  { label: '연락', href: '#contact' },
];
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef(null);
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = event => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);
  return <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="DevShin, 처음으로"><span className="brand-mark" aria-hidden="true">s.</span><span>DevShin<span className="brand-period">.</span></span></a>
        <nav className="desktop-nav" aria-label="주요 메뉴">{navLinks.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
        <ExternalLink href={profile.linkedin} className="header-social"><Linkedin size={17} aria-hidden="true" />LinkedIn</ExternalLink>
        <button ref={buttonRef} className="menu-toggle" type="button" aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}</button>
      </div>
      <nav id="mobile-navigation" className="mobile-nav container" aria-label="모바일 메뉴" hidden={!menuOpen}>{navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}<ArrowUpRight size={16} aria-hidden="true" /></a>)}<ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink></nav>
    </header>;
}
