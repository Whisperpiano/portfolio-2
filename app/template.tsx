'use client';

import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <motion.div
      key={pathname}
      initial={isHomePage ? { y: 30, opacity: 0 } : { x: -50, opacity: 0 }}
      animate={isHomePage ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 30,
        mass: 1,
      }}
    >
      {children}
    </motion.div>
  );
}
