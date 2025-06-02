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
        <div className="flex items-center justify-center gap-4 py-20">
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
        <article className="mx-auto max-w-6xl">
          {/* <div className="fixed bottom-0 z-10 h-40 w-full mask-t-from-0 backdrop-blur-2xl" /> */}

          <h1 className="text-muted-foreground mt-2 pb-10 text-center text-2xl font-medium tracking-widest uppercase">
            {project.title}
          </h1>

          <div className="mb-4 grid grid-cols-12 gap-4">
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

          {/* Project details and action buttons */}
          <div className="col-span-8 mx-auto mt-4 grid max-w-5xl grid-cols-8 gap-4">
            {/* Action Buttons */}
            <div className="col-span-8 overflow-hidden">
              <div className="p-0">
                <div className="space-y-6">
                  {project.documentation.map((doc) => (
                    <article key={doc.title} className="">
                      <div className="p-6">
                        <h3 className="text-primary mb-3 text-lg font-semibold">
                          {doc.title}
                        </h3>
                        <div className="text-muted-foreground prose prose-invert prose-sm max-w-none">
                          <p className="leading-relaxed">{doc.text}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
