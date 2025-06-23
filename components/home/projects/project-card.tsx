import { type Project, type FeaturedProject } from '@/lib/data/projects';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import CornerButton from '@/components/corner-button';

export default function ProjectCard({
  project,
}: {
  project: Project | FeaturedProject;
}) {
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

          <div className="relative z-20 mb-8 max-h-[32px] overflow-hidden transition-all duration-500 group-hover:max-h-[100px]">
            <h2 className="mb-2 text-2xl font-bold">{project.title}</h2>
            <p className="text-muted-foreground/75 me-20 line-clamp-3 text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {project.subtitle}
            </p>
          </div>

          <CornerButton />
        </CardContent>
      </Card>
    </Link>
  );
}
