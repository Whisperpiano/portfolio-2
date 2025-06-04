import Link from 'next/link';
import { type Social } from '@/lib/data/socials';

export default function SocialLink({ social }: { social: Social }) {
  return (
    <Link
      key={social.name}
      href={social.href}
      target="_blank"
      className={`group relative cursor-none rounded-3xl border transition-all duration-300 hover:border-transparent ${social.class} flex items-center justify-center overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <social.icon
        size={50}
        className="text-primary/80 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
      />
      <div className="absolute -right-1 -bottom-1 h-12 w-12 rounded-full bg-white/5 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"></div>
    </Link>
  );
}
