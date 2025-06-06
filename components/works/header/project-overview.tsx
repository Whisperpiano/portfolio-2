import type { Project } from '@/lib/data/projects';
import { Card, CardContent } from '../../ui/card';
import { LinkIcon } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

import Link from 'next/link';

export default function ProjectOverview({ project }: { project: Project }) {
  return (
    <Card className="bg-muted-foreground/3 group col-span-12 h-full gap-0 rounded-3xl px-0 py-0 md:col-span-8">
      <CardContent className="flex flex-col justify-between pb-6">
        <span className="text-muted-foreground/50 pt-6 pb-3 text-sm font-medium tracking-widest uppercase">
          Description
        </span>
        <p className="text-muted-foreground text-base">{project.description}</p>
        <span className="text-muted-foreground/50 pt-6 pb-3 text-sm font-medium tracking-widest uppercase">
          Context
        </span>
        <p className="text-muted-foreground text-base">{project.context}</p>
        <div className="mt-10 flex gap-4">
          <Link
            href={project.link}
            target="_blank"
            className="group hover:border-foreground hover:bg-foreground/10 flex items-center gap-2 rounded-full border p-2 px-6 transition-all"
          >
            <LinkIcon size={15} />
            Visit Website
          </Link>
          <Link
            href={project.code}
            target="_blank"
            className="group hover:border-foreground hover:bg-foreground/10 flex items-center gap-2 rounded-full border p-2 px-6 transition-all"
          >
            <FaGithub size={15} />
            View Code
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
