'use client';

import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <motion.div
      initial={
        isHomePage
          ? { x: 200, opacity: 0, filter: 'blur(18px)' }
          : { x: -200, opacity: 0, filter: 'blur(18px)' }
      }
      animate={{
        x: 0,
        opacity: 1,
        filter: 'blur(0px)',
      }}
      exit={
        isHomePage
          ? { x: -200, opacity: 0, filter: 'blur(18px)' }
          : { x: 200, opacity: 0, filter: 'blur(18px)' }
      }
      transition={{
        duration: 0.6,
        filter: { duration: 0.3 },
      }}
    >
      {children}
    </motion.div>
  );
}
