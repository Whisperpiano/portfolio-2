import type { Project } from '@/lib/data/projects';
import { Card, CardContent } from '../../ui/card';

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <Card className="bg-muted-foreground/3 group col-span-4 h-full gap-0 rounded-3xl px-0 py-0">
      <CardContent className="flex flex-col justify-between pb-6">
        <span className="text-muted-foreground/50 pt-6 pb-3 text-sm font-medium tracking-widest uppercase">
          Name
        </span>
        <p className="text-muted-foreground text-base">{project.name}</p>
        <span className="text-muted-foreground/50 pt-6 pb-3 text-sm font-medium tracking-widest uppercase">
          Year
        </span>
        <p className="text-muted-foreground text-base">{project.year}</p>
        <span className="text-muted-foreground/50 pt-6 pb-3 text-sm font-medium tracking-widest uppercase">
          Timeline
        </span>
        <p className="text-muted-foreground text-base">{project.timeline}</p>
        <span className="text-muted-foreground/50 pt-6 pb-3 text-sm font-medium tracking-widest uppercase">
          Stack
        </span>
        <p className="text-muted-foreground text-base">
          {project.stack.join(', ')}
        </p>
      </CardContent>
    </Card>
  );
}
