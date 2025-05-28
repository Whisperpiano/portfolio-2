import { PROJECTS } from '@/lib/data/projects';
import Image from 'next/image';
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
      <Image
        src={
          'https://images.unsplash.com/photo-1747619701359-13e985bc31e8?q=80&w=1489&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        alt={project?.title}
        width={1450}
        height={1450}
      />
    </section>
  );
}
