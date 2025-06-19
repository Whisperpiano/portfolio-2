import { PROJECTS } from '@/lib/data/projects';
import ProjectCard from './project-card';
import {
  ArrowUpRight,
  Plus,
  ChevronRight,
  CircleEllipsis,
  MoveRight,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function ProjectGrid() {
  return (
    <div className="col-span-12 grid grid-cols-1 gap-4 lg:grid-cols-10">
      {/* Projects section - takes most of the space */}
      <section className="lg:col-span-9">
        <div className="flex h-full flex-wrap gap-4">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <div className="bg-muted-foreground/3 border-muted-foreground/10 hover:border-muted-foreground/50 flex items-center justify-center rounded-3xl border transition-colors duration-300 lg:col-span-1">
        <Link
          href="/works"
          className="group flex h-full w-full items-center justify-center"
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-5">
            <div className="border-muted-foreground/10 group-hover:border-primary/20 flex size-8 items-center justify-center rounded-full border transition-all duration-300">
              <Plus
                size={14}
                className="text-muted-foreground/50 group-hover:text-primary transition-all duration-300 group-hover:rotate-90"
              />
            </div>
            <div className="text-muted-foreground/30 group-hover:text-primary/50 text-xs tracking-wide uppercase transition-colors duration-300">
              projects
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
