'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import IconButton from '@/components/shared/icon-button';

export default function GoBackButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="cursor-pointer">
      <IconButton icon={X} />
    </button>
  );
}
