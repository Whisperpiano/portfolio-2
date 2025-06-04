import type { Project } from '@/lib/data/projects';
import { Card, CardContent } from '../../ui/card';

import Image from 'next/image';

export default function ProjectThumbnail({ project }: { project: Project }) {
  return (
    <Card className="col-span-12 overflow-hidden rounded-3xl bg-transparent p-0">
      <CardContent className="relative aspect-video w-full overflow-hidden p-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
      </CardContent>
    </Card>
  );
}
