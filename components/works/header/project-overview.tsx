import type { Project } from '@/lib/data/projects';
import { Card, CardContent } from '../../ui/card';
import { LinkIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../../ui/button';
import { FaGithub } from 'react-icons/fa6';

import Link from 'next/link';

export default function ProjectOverview({ project }: { project: Project }) {
  return (
    <Card className="bg-muted-foreground/3 group col-span-8 h-full gap-0 rounded-3xl px-0 py-0">
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
            className={cn(
              buttonVariants({ variant: 'default' }),
              'cursor-none rounded-full',
            )}
          >
            <LinkIcon />
            Visit Website
          </Link>
          <Link
            href={project.code}
            target="_blank"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'cursor-none rounded-full',
            )}
          >
            <FaGithub />
            View Code
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
