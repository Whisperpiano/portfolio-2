import { type StackItem } from '@/lib/data/tech-stack';
import Image from 'next/image';

export default function StackIcon({ stack }: { stack: StackItem }) {
  return (
    <div
      key={stack.name}
      className="mx-2 flex h-16 w-16 items-center justify-center"
    >
      <div
        className={`group relative flex aspect-square h-full w-full items-center justify-center rounded-xl ${stack.bgClass} backdrop-blur-sm transition-all duration-300`}
      >
        <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>

        <Image
          src={stack.url}
          alt={stack.name}
          width={26}
          height={26}
          className="pointer-events-none relative z-10 transition-all duration-300 group-hover:brightness-125"
        />
      </div>
    </div>
  );
}
