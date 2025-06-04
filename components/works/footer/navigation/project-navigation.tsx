import type { Project } from '@/lib/data/projects';
import { NavButton } from './nav-button';

interface ProjectNavigationProps {
  currentSlug: string;
  projects: Project[];
}

export default function ProjectNavigation({
  currentSlug,
  projects,
}: ProjectNavigationProps) {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <section className="border-muted-foreground/10 mx-auto mt-16 max-w-4xl border-t px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
        <NavButton direction="previous" project={prevProject} />

        <NavButton direction="next" project={nextProject} />
      </div>
    </section>
  );
}
