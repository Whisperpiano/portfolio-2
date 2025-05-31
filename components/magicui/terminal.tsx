'use client';

import { cn } from '@/lib/utils';
import { motion, MotionProps } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSpanProps) => (
  <motion.div
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: delay / 1000 }}
    className={cn('grid text-sm font-normal tracking-tight', className)}
    {...props}
  >
    {children}
  </motion.div>
);

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = 'span',
  ...props
}: TypingAnimationProps) => {
  if (typeof children !== 'string') {
    throw new Error('TypingAnimation: children must be a string. Received:');
  }

  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>('');
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn('text-sm font-normal tracking-tight', className)}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
};

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export const Terminal = ({ children, className }: TerminalProps) => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [prevTime, setPrevTime] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Only initialize and start updating time after component is mounted on the client
    setIsMounted(true);
    setCurrentTime(new Date().toLocaleTimeString());
    setPrevTime(new Date().toLocaleTimeString());

    const timer = setInterval(() => {
      setPrevTime(currentTime);
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, [currentTime]);

  return (
    <div
      className={cn(
        'border-border bg-muted-foreground/3 z-0 h-full w-full rounded-xl border',
        className,
      )}
    >
      <div className="border-border flex items-center justify-between border-b p-4">
        <div className="flex flex-row gap-x-2">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </div>
        <div className="text-muted-foreground font-mono text-xs">
          whisperpiano@portfolio ~ %
        </div>
        <div className="text-muted-foreground/75 relative font-mono text-xs">
          {isMounted
            ? currentTime.split('').map((char, index) => {
                const prevChar = prevTime[index];
                const hasChanged = char !== prevChar;

                return (
                  <motion.span
                    key={`${index}-${char}`}
                    initial={
                      hasChanged ? { y: -8, opacity: 0 } : { y: 0, opacity: 1 }
                    }
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, type: 'spring' }}
                    className={cn('inline-block')}
                  >
                    {char}
                  </motion.span>
                );
              })
            : '--:--:--'}
        </div>
      </div>
      <pre className="p-4">
        <code className="grid gap-y-1 overflow-auto">{children}</code>
      </pre>
    </div>
  );
};
