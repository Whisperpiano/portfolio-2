import { PROJECTS } from '@/lib/data/projects';
import { X } from 'lucide-react';
import { EscapeToHome } from '@/components/escape-to-home';
import { BackToTop } from '@/components/back-to-top';

import Link from 'next/link';
import ProjectCard from '@/components/home/projects/project-card';
import IconButton from '@/components/shared/icon-button';

export const metadata = {
  title: 'Works | Portfolio',
  description: 'Explore my portfolio projects organized by year',
};

export default function Works() {
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

          <div className="flex flex-col">
            <div className="w-full text-center">
              <h1 className="text-muted-foreground mt-2 pb-14 text-center text-2xl font-medium tracking-widest uppercase">
                Project archive
              </h1>
            </div>
          </div>

          {years.map((year) => {
            const projects = projectsByYear[year];

            return (
              <section key={year} className="rounded-3xl pb-6">
                <div className="bg-muted-foreground/3 mb-6 flex justify-center rounded-3xl border">
                  <h2 className="text-muted-foreground/50 group-hover:text-muted-foreground/75 pt-6 pb-8 text-xl font-medium tracking-widest uppercase transition-colors">
                    {year}
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-6">
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
