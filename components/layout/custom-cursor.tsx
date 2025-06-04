'use client';

import { useMousePosition } from '@/lib/hooks/use-mouse-position';
import { useDetectDevice } from '@/lib/hooks/use-detect-device';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const position = useMousePosition();
  const isTouchDevice = useDetectDevice();

  if (isTouchDevice) {
    return null;
  }

  return (
    <motion.div
      className="bg-foreground/10 border-muted-foreground/50 pointer-events-none fixed top-0 left-0 z-50 size-6 overflow-hidden rounded-full border shadow-xl backdrop-blur-sm"
      animate={{ x: position.x - 12, y: position.y - 12 }}
      transition={{ type: 'spring', stiffness: 2000, damping: 100 }}
    />
  );
}
