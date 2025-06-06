'use client';

import { useMousePosition } from '@/lib/hooks/use-mouse-position';
import { useDetectDevice } from '@/lib/hooks/use-detect-device';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const position = useMousePosition();
  const isTouchDevice = useDetectDevice();
  const [isInteractive, setIsInteractive] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isOverInteractive = target.closest('button') || target.closest('a');
      setIsInteractive(!!isOverInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (isTouchDevice) return null;

  const getScale = () => {
    if (isClicking) return 0.8;
    if (isInteractive) return 1.6;
    return 1;
  };

  return (
    <motion.div
      className="bg-foreground/10 border-muted-foreground/50 pointer-events-none fixed top-0 left-0 z-50 overflow-hidden rounded-full border shadow-xl backdrop-blur-sm"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: getScale(),
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 40 }}
      style={{ width: 24, height: 24 }}
    />
  );
}
