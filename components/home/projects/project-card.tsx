import { type Project } from '@/lib/data/projects';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      key={project.title}
      href={`/works/${project.slug}`}
      className="group min-h-[400px] min-w-[280px] flex-1 cursor-pointer"
      prefetch
    >
      <Card className="from-background hover:border-muted-foreground/50 h-full overflow-hidden bg-gradient-to-t via-transparent to-transparent py-0 transition-colors duration-300">
        <CardContent className="relative flex h-full flex-col justify-end gap-0 px-6 pt-6">
          <div className="absolute inset-0 -z-10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-center transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
            />
          </div>

          <div className="bg-muted-foreground/5 absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

          <div className="relative z-20 mb-8 transition-transform duration-300 group-hover:-translate-y-8">
            <h2 className="mb-0 text-2xl font-bold">{project.title}</h2>
          </div>

          <div className="absolute bottom-9 left-6 z-20 translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-muted-foreground/75 line-clamp-3 text-sm">
              {project.name}
            </p>
          </div>

          <div className="absolute right-6 bottom-6 z-20">
            <div className="group-hover:border-muted-foreground/50 relative inline-flex aspect-square overflow-hidden rounded-full border p-3 transition-colors">
              <div className="bg-primary/10 absolute inset-0 scale-0 rounded-full transition-transform duration-500 group-hover:scale-100" />
              <ArrowUpRight
                size={20}
                className="text-muted-foreground/75 transition-transform duration-200 group-hover:translate-x-20 group-hover:-translate-y-20"
              />
              <ArrowUpRight
                size={20}
                className="text-primary absolute -translate-x-20 translate-y-20 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
