import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/lib/data/projects';
import Link from 'next/link';

export default function Home() {
  return (
    <section>
      <h1 className="my-5 text-3xl font-bold text-red-500">Home</h1>
      <p className="text-xl">Welcome to my portfolio</p>
      <Button>Button</Button>

      {PROJECTS.map((project) => (
        <Link key={project.slug} href={`/works/${project.slug}`}>
          {project.title}
        </Link>
      ))}
    </section>
  );
}
