'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const EscapeToHome = () => {
  const router = useRouter();

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      router.push('/');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return null;
};
