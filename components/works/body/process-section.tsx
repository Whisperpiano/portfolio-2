import type { Project } from '@/lib/data/projects';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { CodeBlock } from '@/components/shiki/code-block';

export default function ProcessSection({ project }: { project: Project }) {
  return (
    <>
      <h3 className="text-muted-foreground/50 mt-16 text-xl font-medium tracking-widest uppercase">
        Key Features
      </h3>
      <p className="prose prose-invert prose-sm text-muted-foreground mt-6 leading-relaxed">
        {project.documentation.features.text}
      </p>

      <div className="mt-10">
        <ul className="mt-8 space-y-12">
          {project.documentation.features.list.items.map((item, index) => (
            <li key={index} className="space-y-4">
              <h4 className="text-primary text-lg font-semibold">
                {item.title}
              </h4>
              <p className="prose prose-invert prose-sm text-muted-foreground leading-relaxed">
                {item.text}
              </p>

              {'code' in item && (
                <div className="mt-4">
                  <CodeBlock lang="tsx">{item.code}</CodeBlock>
                </div>
              )}

              {'image' in item && (
                <div className="mt-4">
                  <Card className="overflow-hidden rounded-3xl bg-transparent p-0 shadow-sm">
                    <CardContent className="aspect-video w-full overflow-hidden p-0">
                      <Image
                        src={item.image as string}
                        alt={item.title}
                        width={876}
                        height={493}
                        className="object-cover object-center"
                      />
                    </CardContent>
                  </Card>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
