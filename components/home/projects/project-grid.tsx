import { FEATURED_PROJECTS } from '@/lib/data/projects';

import ProjectCard from './project-card';
import ShowAllButton from '@/components/show-all-button';

export default function ProjectGrid() {
  return (
    <div className="col-span-12 grid grid-cols-1 gap-4 lg:grid-cols-10">
      <section className="lg:col-span-9">
        <div className="flex h-full flex-wrap gap-4">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <ShowAllButton />
    </div>
  );
}
