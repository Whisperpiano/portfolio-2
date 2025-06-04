import Link from 'next/link';
import { AnimatedSpan, Terminal, TypingAnimation } from '../magicui/terminal';
import { ArrowUpRight } from 'lucide-react';

export default function TerminalCard() {
  return (
    <Link href="/about" className="group relative col-span-3">
      <Terminal>
        <TypingAnimation>&gt; whoami</TypingAnimation>
        <AnimatedSpan delay={1000} className="text-blue-400">
          <span>jesús @ stavanger-machine ~ 🇳🇴</span>
        </AnimatedSpan>

        <TypingAnimation delay={1800}>&gt; cat about_me.txt</TypingAnimation>
        <AnimatedSpan delay={3200} className="text-yellow-300">
          <span>
            - Frontend dev with a keyboard in one hand and a piano in the other
            🎹💻
          </span>
        </AnimatedSpan>
        <AnimatedSpan delay={4200} className="text-yellow-300">
          <span>
            - Based in Stavanger, where code meets fjords and lo-fi beats
          </span>
        </AnimatedSpan>

        <TypingAnimation delay={5300}>&gt; cat skills.txt</TypingAnimation>
        <AnimatedSpan delay={6500} className="text-green-400">
          <span>✓ Frontend Development (React + TypeScript enthusiast)</span>
        </AnimatedSpan>
        <AnimatedSpan delay={7100} className="text-green-400">
          <span>✓ Piano & Music Production (ex-conservatory student 🎼)</span>
        </AnimatedSpan>
        <AnimatedSpan delay={7700} className="text-green-400">
          <span>✓ UI/UX Design with a clean aesthetic obsession</span>
        </AnimatedSpan>
        <AnimatedSpan delay={8300} className="text-green-400">
          <span>
            ✓ Teaching, mentoring & explaining things with metaphors 😄
          </span>
        </AnimatedSpan>
        <AnimatedSpan delay={8900} className="text-green-400">
          <span>✓ Solving bugs like it&apos;s jazz improvisation 🎷</span>
        </AnimatedSpan>

        <TypingAnimation delay={9200}>
          &gt; ./launch_portfolio.sh
        </TypingAnimation>
        <AnimatedSpan delay={11200} className="text-pink-400">
          <span>🚀 Initializing...</span>
        </AnimatedSpan>
        <AnimatedSpan delay={11700} className="text-pink-400">
          <span>🌐 Opening in browser...</span>
        </AnimatedSpan>
        <AnimatedSpan delay={13200} className="text-pink-400">
          <span>✅ Ready. Welcome to my portfolio!</span>
        </AnimatedSpan>
      </Terminal>
      <div className="absolute right-6 bottom-6 z-20">
        <div className="group-hover:border-muted-foreground/50 relative inline-flex aspect-square overflow-hidden rounded-full border p-3 transition-colors">
          <div className="bg-primary/10 absolute inset-0 scale-0 rounded-full transition-transform duration-500 group-hover:scale-100" />
          <ArrowUpRight
            size={20}
            className="text-muted-foreground/75 transition-transform duration-200 group-hover:translate-x-20 group-hover:-translate-y-20"
          />
          <ArrowUpRight
            size={20}
            className="text-primary absolute -translate-x-20 translate-y-20 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0"
          />
        </div>
      </div>
    </Link>
  );
}
