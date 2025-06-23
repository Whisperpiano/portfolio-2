import { Metadata } from 'next';
import { PROJECTS } from '@/lib/data/projects';
import { notFound } from 'next/navigation';
import { ShareButton } from '@/components/ui/share-button';
import { BackToTop } from '@/components/back-to-top';
import { EscapeToHome } from '@/components/escape-to-home';

import ProjectThumbnail from '@/components/works/header/project-thumbnail';
import ProjectDetails from '@/components/works/header/project-details';
import ProjectOverview from '@/components/works/header/project-overview';
import ProcessSection from '@/components/works/body/process-section';
import ProjectNavigation from '@/components/works/footer/navigation/project-navigation';
import GoBackButton from '@/components/go-back-button';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: '404 | Whisperpiano',
    };
  }

  return {
    title: `${project.title} | Whisperpiano`,
    description: project.description || 'Project by Whisperpiano',
    openGraph: {
      title: `${project.title} | Whisperpiano`,
      description: project.description || 'Project by Whisperpiano',
      images: project.image ? [project.image] : [],
    },
  };
}

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
    <main className="h-full min-h-dvh p-0 sm:p-4">
      <EscapeToHome />
      <BackToTop />
      <section className="rounded-3xl border-0 p-4 sm:border-2">
        <div className="flex items-center justify-center gap-4 py-8 pb-10 sm:py-12 lg:py-20">
          <GoBackButton />
          <ShareButton project={project} />
        </div>
        <article className="mx-auto max-w-5xl">
          <h1 className="text-muted-foreground mt-2 pb-14 text-center text-2xl font-medium tracking-widest uppercase">
            {project.title}
          </h1>

          <div className="mb-4 grid grid-cols-12 gap-4">
            <ProjectDetails project={project} />
            <ProjectOverview project={project} />
          </div>

          <ProjectThumbnail project={project} />

          <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* <ChallengeSection project={project} /> */}

            <ProcessSection project={project} />

            {/* <SolutionSection project={project} /> */}
          </section>
        </article>

        {/* Gradient bottom */}
        <div className="to-background pointer-events-none fixed right-0 bottom-0 left-0 z-10 h-20 w-full bg-gradient-to-b from-transparent" />

        <ProjectNavigation currentSlug={slug} projects={PROJECTS} />
      </section>
    </main>
  );
}
