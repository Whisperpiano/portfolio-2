import { PROJECTS } from '@/lib/data/projects';
import { notFound } from 'next/navigation';

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
    <section>
      <h1>Work</h1>
      <p>Here you can find my work</p>
      <p>{project?.title}</p>
      <p>{project?.description}</p>
      <img src={project?.image} alt={project?.title} />
      <a href={project?.link}>Link</a>
      <p>test</p>
      <p>test2</p>
    </section>
  );
}
