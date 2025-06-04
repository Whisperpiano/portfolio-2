import { PROJECTS } from '@/lib/data/projects';
import { notFound } from 'next/navigation';
import { ShareButton } from '@/components/ui/share-button';
import { BackToTop } from '@/components/back-to-top';
import { X } from 'lucide-react';

import Link from 'next/link';
import IconButton from '@/components/shared/icon-button';
import ProjectThumbnail from '@/components/works/header/project-thumbnail';
import ProjectDetails from '@/components/works/header/project-details';
import ProjectOverview from '@/components/works/header/project-overview';
import ChallengeSection from '@/components/works/body/challenge-section';
import ProcessSection from '@/components/works/body/process-section';
import SolutionSection from '@/components/works/body/solution-section';
import ProjectNavigation from '@/components/works/footer/navigation/project-navigation';

export default async function Work({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((project) => project.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <main className="h-full max-h-dvh min-h-dvh p-4">
      <BackToTop />
      <section className="rounded-3xl border-2">
        <div className="flex items-center justify-center gap-4 pt-20 pb-10">
          <Link href="/" className="cursor-none">
            <IconButton icon={X} />
          </Link>
          <ShareButton project={project} />
        </div>
        <article className="mx-auto max-w-5xl">
          {/* <div className="fixed bottom-0 z-10 h-40 w-full mask-t-from-0 backdrop-blur-2xl" /> */}
          <h1 className="text-muted-foreground mt-2 pb-14 text-center text-2xl font-medium tracking-widest uppercase">
            {project.title}
          </h1>

          <div className="mb-4 grid grid-cols-12 gap-4">
            <ProjectDetails project={project} />
            <ProjectOverview project={project} />
          </div>

          <ProjectThumbnail project={project} />

          <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ChallengeSection project={project} />

            <ProcessSection project={project} />

            <SolutionSection project={project} />
          </section>
        </article>

        <ProjectNavigation currentSlug={slug} projects={PROJECTS} />
      </section>
    </main>
  );
}
