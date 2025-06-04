import { PROJECTS } from '@/lib/data/projects';
import ProjectCard from './project-card';

export default function ProjectGrid() {
  return (
    <section className="col-span-12 flex flex-wrap gap-4">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </section>
  );
}
