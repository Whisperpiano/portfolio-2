'use client';

import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from '@/components/magicui/terminal';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-dvh w-full items-center justify-center p-0 sm:p-4">
      <motion.section className="flex min-h-[calc(100vh-32px)] w-full items-center justify-center rounded-3xl border-0 p-4 sm:border-2">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto grid h-full w-full max-w-3xl grid-cols-1 gap-8 rounded-3xl p-8"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <motion.h1
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 10,
                  delay: 0.2,
                }}
                className="text-foreground text-center text-5xl font-bold tracking-tighter"
              >
                404
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground/80 mt-6 pb-4 text-center text-2xl font-medium tracking-widest uppercase"
              >
                Page not found
              </motion.h2>
            </div>

            <Terminal className="mt-8 [&div>pre]:min-h-[225px]">
              <TypingAnimation>$ cd /portfolio/page</TypingAnimation>
              <AnimatedSpan delay={1000} className="text-red-400">
                <span>Error: Directory not found</span>
              </AnimatedSpan>

              <TypingAnimation delay={1800}>$ locate page</TypingAnimation>
              <AnimatedSpan delay={3000} className="text-yellow-300">
                <span>Searching system...</span>
              </AnimatedSpan>
              <AnimatedSpan delay={4200} className="text-yellow-300">
                <span>
                  No results found. The page you're looking for doesn't exist.
                </span>
              </AnimatedSpan>

              <TypingAnimation delay={5300}>$ suggest_action</TypingAnimation>
              <AnimatedSpan delay={6500} className="text-green-400">
                <span>✓ Return to homepage</span>
              </AnimatedSpan>
              <AnimatedSpan delay={7100} className="text-green-400">
                <span>✓ Check URL for typos</span>
              </AnimatedSpan>
            </Terminal>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex items-center justify-center gap-4 pt-4"
          >
            <Link
              href="/"
              className="group hover:border-primary hover:bg-primary/10 flex items-center gap-2 rounded-full border p-3 px-6 transition-all"
            >
              <ArrowLeft
                size={20}
                className="text-muted-foreground/75 group-hover:text-primary transition-all"
              />
              <span className="text-muted-foreground/75 group-hover:text-primary transition-all">
                Go Home
              </span>
            </Link>
          </motion.div>
        </motion.section>
      </motion.section>
    </main>
  );
}
