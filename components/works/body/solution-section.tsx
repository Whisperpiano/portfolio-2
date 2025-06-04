import type { Project } from '@/lib/data/projects';

export default function SolutionSection({ project }: { project: Project }) {
  return (
    <>
      <h3 className="text-muted-foreground/50 mt-20 text-xl font-medium tracking-widest uppercase">
        Solution
      </h3>
      <p className="prose prose-invert prose-sm text-muted-foreground mt-6 leading-relaxed">
        {project.documentation.solution}
      </p>
    </>
  );
}
