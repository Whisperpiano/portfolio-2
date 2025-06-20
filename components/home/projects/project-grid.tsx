import { PROJECTS } from '@/lib/data/projects';
import { Plus } from 'lucide-react';
import ProjectCard from './project-card';
import Link from 'next/link';

export default function ProjectGrid() {
  return (
    <div className="col-span-12 grid grid-cols-1 gap-4 lg:grid-cols-10">
      {/* projects */}
      <section className="lg:col-span-9">
        <div className="flex h-full flex-wrap gap-4">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* view all */}
      <div className="bg-muted-foreground/3 hover:bg-primary/5 border-muted-foreground/10 hover:border-muted-foreground/50 relative flex items-center justify-center overflow-hidden rounded-3xl border transition-all duration-500 lg:col-span-1">
        <Link
          href="/works"
          className="group flex h-full min-h-[120px] w-full items-center justify-center"
        >
          {/* overlay */}
          <div className="from-primary/20 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-25"></div>

          {/* main content */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="bg-primary/80 group-hover:bg-primary group-hover:shadow-primary/20 flex size-9 items-center justify-center rounded-full border border-transparent transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <Plus
                size={18}
                className="text-background transition-transform duration-300 group-hover:rotate-90"
              />
            </div>
            <span className="text-muted-foreground/80 text-sm font-medium uppercase transition-colors duration-300 group-hover:text-white">
              Show more
            </span>
          </div>

          {/* reflection */}
          <div className="bg-primary/10 absolute -right-5 -bottom-5 h-25 w-25 rounded-full opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-60"></div>
        </Link>
      </div>
    </div>
  );
}
