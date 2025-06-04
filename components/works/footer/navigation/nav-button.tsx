import type { Project } from '@/lib/data/projects';
import Link from 'next/link';

interface NavButtonProps {
  direction: 'previous' | 'next';
  project: Project | null;
}

export function NavButton({ direction, project }: NavButtonProps) {
  const isNext = direction === 'next';
  const label = isNext ? 'Next' : 'Previous';
  const arrow = isNext ? '→' : '←';
  const arrowClass = isNext
    ? 'transition-transform duration-300 group-hover:translate-x-1'
    : 'transition-transform duration-300 group-hover:-translate-x-1';
  const alignment = isNext
    ? 'items-center sm:items-end'
    : 'items-center sm:items-start';
  const flexOrder = isNext ? 'order-normal' : 'flex-row-reverse';

  return (
    <div className={`flex flex-col ${alignment}`}>
      <span className="text-muted-foreground/50 text-sm font-medium tracking-widest uppercase">
        {label}
      </span>

      {project ? (
        <Link
          href={`/works/${project.slug}`}
          className={`text-primary hover:text-primary/80 group mt-2 flex ${flexOrder} cursor-none items-center gap-2 transition-colors`}
        >
          <span>{project.title}</span>

          <span className={arrowClass}>{arrow}</span>
        </Link>
      ) : (
        <span className="text-muted-foreground/30 mt-2">
          No {direction} project
        </span>
      )}
    </div>
  );
}
