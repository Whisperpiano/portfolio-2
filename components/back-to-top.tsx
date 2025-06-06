'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed right-12 bottom-12 z-50"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            duration: 0.4,
          }}
        >
          <button
            onClick={scrollToTop}
            className={cn(
              'group hover:border-muted-foreground/50 bg-background relative inline-flex aspect-square cursor-pointer overflow-hidden rounded-full border p-3 transition-colors',
              isVisible ? 'animate-jelly' : '',
            )}
          >
            <div className="bg-primary/10 absolute inset-0 scale-0 rounded-full transition-transform duration-500 group-hover:scale-100" />
            <ArrowUp
              size={20}
              className="text-muted-foreground/75 transition-transform duration-200 group-hover:translate-x-20 group-hover:-translate-y-20"
            />
            <ArrowUp
              size={20}
              className="text-primary absolute -translate-x-20 translate-y-20 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0"
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
