import { PROJECTS } from '@/lib/data/projects';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight, ChevronLeft, X, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import ProjectCard from '@/components/home/projects/project-card';
import { EscapeToHome } from '@/components/escape-to-home';
import { BackToTop } from '@/components/back-to-top';
import IconButton from '@/components/shared/icon-button';

export const metadata = {
  title: 'Works | Portfolio',
  description: 'Explore my portfolio projects organized by year',
};

export default function Works() {
  // Agrupar proyectos por año
  const projectsByYear = PROJECTS.reduce<Record<string, typeof PROJECTS>>(
    (acc, project) => {
      const year = project.year || 'Unknown';
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(project);
      return acc;
    },
    {},
  );

  const years = Object.keys(projectsByYear).sort((a, b) => b.localeCompare(a));

  return (
    <main className="h-full min-h-dvh p-0 sm:p-4">
      <EscapeToHome />
      <BackToTop />
      <section className="rounded-3xl border-0 p-4 sm:border-2">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="flex items-center justify-center gap-4 py-8 pb-10 sm:py-12 lg:py-20">
            <Link href="/" className="cursor-pointer" prefetch>
              <IconButton icon={X} />
            </Link>
          </div>

          <div className="mb-16 flex flex-col gap-3">
            <div className="w-full text-center">
              <div className="text-muted-foreground/30 pb-2 text-sm tracking-widest uppercase">
                Archive
              </div>
              <h1 className="text-muted-foreground mt-2 pb-6 text-center text-2xl font-medium tracking-widest uppercase">
                Project Timeline
              </h1>
              <div className="from-primary/0 via-primary/20 to-primary/0 mt-6 h-px w-full bg-gradient-to-r"></div>
            </div>
          </div>

          {years.map((year, yearIndex) => {
            const projects = projectsByYear[year];
            const hasEnoughProjects = projects.length >= 3;

            return (
              <section key={year} className="mb-32">
                <div className="mb-10">
                  <div className="flex items-center justify-center gap-4">
                    <div className="from-background to-muted-foreground/5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br">
                      <h2 className="text-2xl font-bold">{year}</h2>
                    </div>
                  </div>
                </div>

                <div
                  className={cn(
                    'grid gap-6',
                    hasEnoughProjects
                      ? 'grid-cols-1 md:grid-cols-12'
                      : 'grid-cols-1 md:grid-cols-2',
                  )}
                >
                  {projects.map((project) => {
                    return (
                      <ProjectCard key={project.title} project={project} />
                    );
                  })}
                </div>
              </section>
            );
          })}
          {/* Gradient bottom */}
          <div className="to-background pointer-events-none fixed right-0 bottom-0 left-0 z-10 h-20 w-full bg-gradient-to-b from-transparent" />
        </div>
      </section>
    </main>
  );
}
