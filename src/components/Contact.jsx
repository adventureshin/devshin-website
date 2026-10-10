import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolio';
import ExternalLink from './ExternalLink';
export default function Contact() {
  const [copyState, setCopyState] = useState('idle');
  const timer = useRef(null);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState('copied');
    } catch {
      setCopyState('error');
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopyState('idle'), 4000);
  };
  return <section id="contact" className="section contact-section"><div className="container contact-inner"><div><p className="eyebrow">LET’S BUILD SOMETHING</p><h2>함께 만들 일이 있다면,<br />이야기 나눠요.</h2><p className="contact-description">제품과 시스템, 새로운 협업에 관한 이야기를 환영합니다.</p></div><div className="contact-actions"><a className="contact-email" href={`mailto:${profile.email}`}><Mail size={22} aria-hidden="true" />{profile.email}<ArrowUpRight size={23} aria-hidden="true" /></a><div className="contact-secondary"><button type="button" className="copy-email" onClick={copyEmail}>{copyState === 'copied' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}{copyState === 'copied' ? '복사했습니다' : '이메일 복사'}</button><ExternalLink href={profile.linkedin}><Linkedin size={17} aria-hidden="true" />LinkedIn</ExternalLink></div><p className="copy-feedback" role="status">{copyState === 'error' ? '복사하지 못했습니다. 위 이메일 주소를 직접 선택해 주세요.' : copyState === 'copied' ? '이메일 주소를 클립보드에 복사했습니다.' : ''}</p></div></div></section>;
}
