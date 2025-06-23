import { AnimatedSpan, Terminal, TypingAnimation } from '../magicui/terminal';

import Link from 'next/link';
import CornerButton from '../corner-button';

export default function TerminalCard() {
  return (
    <Link
      href="/about"
      className="group relative col-span-12 col-start-1 row-start-3 cursor-pointer md:row-start-3 lg:row-start-3 xl:col-span-12 xl:col-start-1 xl:row-start-2 2xl:col-span-5 2xl:col-start-4 2xl:row-start-1"
      prefetch
    >
      <Terminal className="h-full">
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

      <CornerButton />
    </Link>
  );
}
