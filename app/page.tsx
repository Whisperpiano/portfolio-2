import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/lib/data/projects';
import Image from 'next/image';
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

      <Image
        src="https://images.unsplash.com/photo-1747985323857-5c1c16b2ac47?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        width={1450}
        height={1450}
      />
    </section>
  );
}
