import { ArrowUpRight } from 'lucide-react';
export default function ExternalLink({
  href,
  children,
  className = ''
}) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={`external-link ${className}`}>{children}<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (새 탭)</span></a>;
}
