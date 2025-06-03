import { PROJECTS } from '@/lib/data/projects';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { LinkIcon, X } from 'lucide-react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { FaGithub } from 'react-icons/fa6';
import { ShareButton } from '@/components/ui/share-button';

import { CodeBlock } from '@/components/shiki/code-block';

export default async function Work({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((project) => project.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <main className="h-full max-h-dvh min-h-dvh p-4">
      <section className="rounded-3xl border-2">
        <div className="flex items-center justify-center gap-4 pt-20 pb-10">
          <Link
            href="/"
            className="group hover:border-muted-foreground/50 relative inline-flex aspect-square overflow-hidden rounded-full border p-3 transition-colors"
          >
            <div className="bg-primary/10 absolute inset-0 scale-0 rounded-full transition-transform duration-500 group-hover:scale-100" />
            <X
              size={20}
              className="text-muted-foreground/75 transition-transform duration-200 group-hover:translate-x-20 group-hover:-translate-y-20"
            />
            <X
              size={20}
              className="text-primary absolute -translate-x-20 translate-y-20 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0"
            />
          </Link>
          <ShareButton project={project} />
        </div>
        <article className="mx-auto max-w-5xl">
          {/* <div className="fixed bottom-0 z-10 h-40 w-full mask-t-from-0 backdrop-blur-2xl" /> */}

          <h1 className="text-muted-foreground mt-2 pb-14 text-center text-2xl font-medium tracking-widest uppercase">
            {project.title}
          </h1>

          <div className="mb-4 grid grid-cols-12 gap-4">
            <Card className="bg-muted-foreground/3 group col-span-4 h-full gap-0 rounded-3xl px-0 py-0">
              <CardContent className="flex flex-col justify-between pb-6">
                <span className="text-muted-foreground/50 pt-6 pb-3 text-sm font-medium tracking-widest uppercase">
                  Name
                </span>
                <p className="text-muted-foreground text-base">
                  {project.name}
                </p>
                <span className="text-muted-foreground/50 pt-6 pb-3 text-sm font-medium tracking-widest uppercase">
                  Year
                </span>
                <p className="text-muted-foreground text-base">
                  {project.year}
                </p>
                <span className="text-muted-foreground/50 pt-6 pb-3 text-sm font-medium tracking-widest uppercase">
                  Timeline
                </span>
                <p className="text-muted-foreground text-base">
                  {project.timeline}
                </p>
                <span className="text-muted-foreground/50 pt-6 pb-3 text-sm font-medium tracking-widest uppercase">
                  Stack
                </span>
                <p className="text-muted-foreground text-base">
                  {project.stack.join(', ')}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted-foreground/3 group col-span-8 h-full gap-0 rounded-3xl px-0 py-0">
              <CardContent className="flex flex-col justify-between pb-6">
                <span className="text-muted-foreground/50 pt-6 pb-3 text-sm font-medium tracking-widest uppercase">
                  Description
                </span>
                <p className="text-muted-foreground text-base">
                  {project.description}
                </p>
                <span className="text-muted-foreground/50 pt-6 pb-3 text-sm font-medium tracking-widest uppercase">
                  Context
                </span>
                <p className="text-muted-foreground text-base">
                  {project.context}
                </p>
                <div className="mt-10 flex gap-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: 'default' }),
                      'rounded-full',
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
                      'rounded-full',
                    )}
                  >
                    <FaGithub />
                    View Code
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

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

          <section className="mx-auto max-w-4xl">
            {/* <div>
              <h3 className="text-muted-foreground/50 mt-10 text-xl font-medium tracking-widest uppercase">
                Features
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {project.features?.map((feature, index) => (
                  <Card
                    key={index}
                    className="bg-muted-foreground/3 group border-muted-foreground/10 hover:border-primary/30 relative overflow-hidden rounded-3xl border py-0 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)]"
                  >
                    <CardContent className="p-6">
                      <div className="mb-2 flex items-center gap-3">
                        <h3 className="text-primary text-base font-semibold">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.text}
                      </p>
                      <div className="bg-primary/5 absolute -right-6 -bottom-6 h-24 w-24 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div> */}
            <h3 className="text-muted-foreground/50 mt-10 text-xl font-medium tracking-widest uppercase">
              Challenge
            </h3>
            <p className="text-muted-foreground mt-6 text-base">
              {project.documentation.challenge}
            </p>

            <h3 className="text-muted-foreground/50 mt-10 text-xl font-medium tracking-widest uppercase">
              Process
            </h3>
            <div className="text-muted-foreground mt-6 text-base">
              {project.documentation.process.text}
            </div>

            <div className="mt-8">
              <h4 className="text-muted-foreground/80 text-base font-medium">
                {project.documentation.process.list.text}
              </h4>
              <ul className="mt-6 space-y-8">
                {project.documentation.process.list.items.map((item, index) => (
                  <li key={index} className="border-primary/10 border-l-2 pl-4">
                    <h4 className="text-primary text-base font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {item.text}
                    </p>
                    <div className="mt-3">
                      {'code' in item && item.code && (
                        <CodeBlock lang="tsx">{item.code}</CodeBlock>
                      )}
                      {'image' in item && item.image && (
                        <Card className="col-span-12 overflow-hidden rounded-3xl bg-transparent p-0">
                          <CardContent className="aspect-video w-full overflow-hidden p-0">
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={876}
                              height={493}
                              className="object-cover"
                            />
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-muted-foreground/50 mt-10 text-xl font-medium tracking-widest uppercase">
              Solution
            </h3>
            <p className="text-muted-foreground mt-6 text-base">
              {project.documentation.solution}
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
