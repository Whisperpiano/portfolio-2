import { PROJECTS } from '@/lib/data/projects';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
      <section className="rounded-3xl border-2 p-4">
        <article className="mx-auto max-w-6xl">
          {/* Back button and project title row */}
          <div className="mb-8 grid grid-cols-12 gap-4">
            <Card className="bg-muted-foreground/3 col-span-3 rounded-3xl">
              <CardContent className="flex h-full items-center p-6">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Back to Home
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-muted-foreground/3 col-span-9 rounded-3xl">
              <CardContent className="p-6">
                <h1 className="text-4xl font-bold md:text-5xl">
                  {project.title}
                </h1>
                <p className="mt-2 text-lg text-gray-400">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-12 gap-4">
            {/* Featured Image - Large card */}
            <Card className="col-span-12 overflow-hidden rounded-3xl bg-transparent">
              <CardContent className="p-0">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Project details and action buttons */}
            <div className="col-span-8 grid grid-cols-8 gap-4">
              {/* Action Buttons */}
              <Card className="bg-muted-foreground/3 col-span-8 rounded-3xl">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex flex-wrap gap-4">
                    <Link href={project.link} target="_blank">
                      <Button className="flex items-center gap-2">
                        Visit Website
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button variant="outline">Contact Me</Button>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-gray-400">
                      Year
                    </span>
                    <p className="text-white">2024</p>
                  </div>
                </CardContent>
              </Card>

              {/* Project Overview */}
              <Card className="bg-muted-foreground/3 col-span-8 rounded-3xl">
                <CardHeader>
                  <h2 className="text-muted-foreground/50 pt-6 pb-0 font-medium tracking-widest uppercase">
                    Project Overview
                  </h2>
                </CardHeader>
                <CardContent className="space-y-4 p-6 text-gray-300">
                  <p>
                    {project.title} is a premium template designed with modern
                    aesthetics and functionality in mind. This project focuses
                    on delivering a seamless user experience while maintaining
                    high performance standards.
                  </p>
                  <p>
                    The design emphasizes clean typography, generous spacing,
                    and thoughtful interactions that guide users through the
                    interface intuitively. Dark theme implementation enhances
                    visual hierarchy and reduces eye strain during extended
                    viewing sessions.
                  </p>
                </CardContent>
              </Card>

              {/* Gallery images */}
              <Card className="col-span-4 overflow-hidden rounded-3xl bg-transparent">
                <CardContent className="p-0">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1747619701359-13e985bc31e8?q=80&w=1489&auto=format&fit=crop"
                      alt="Project screenshot"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-4 overflow-hidden rounded-3xl bg-transparent">
                <CardContent className="p-0">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                    <Image
                      src="https://via.placeholder.com/600x400/1a1a1a/ffffff"
                      alt="Project screenshot"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right column - Tech stack and highlights */}
            <div className="col-span-4 grid grid-cols-4 gap-4">
              {/* Services */}
              <Card className="bg-muted-foreground/3 col-span-4 rounded-3xl">
                <CardHeader>
                  <h2 className="text-muted-foreground/50 pt-6 pb-0 font-medium tracking-widest uppercase">
                    Services
                  </h2>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-white">
                    UI/UX Design, Frontend Development
                  </p>
                </CardContent>
              </Card>

              {/* Tech stack */}
              <Card className="bg-muted-foreground/3 col-span-4 rounded-3xl">
                <CardHeader>
                  <h2 className="text-muted-foreground/50 pt-6 pb-0 font-medium tracking-widest uppercase">
                    Tech Stack
                  </h2>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block rounded-full bg-[#222] px-3 py-1 text-xs font-medium text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Project Highlights */}
              <Card className="bg-muted-foreground/3 col-span-4 rounded-3xl">
                <CardHeader>
                  <h2 className="text-muted-foreground/50 pt-6 pb-0 font-medium tracking-widest uppercase">
                    Project Highlights
                  </h2>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <ArrowRight className="h-3 w-3" />
                      </span>
                      <span>
                        Responsive design that works across all device sizes
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <ArrowRight className="h-3 w-3" />
                      </span>
                      <span>
                        Optimized performance with modern web technologies
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <ArrowRight className="h-3 w-3" />
                      </span>
                      <span>
                        Accessibility features built-in from the ground up
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <ArrowRight className="h-3 w-3" />
                      </span>
                      <span>
                        Elegant animations that enhance the user experience
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Navigation footer */}
          <div className="mt-8 grid grid-cols-12 gap-4">
            <Card className="bg-muted-foreground/3 col-span-6 rounded-3xl">
              <CardContent className="p-6">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Back to All Projects
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-muted-foreground/3 col-span-6 rounded-3xl">
              <CardContent className="flex justify-end p-6">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
                >
                  Next Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </article>
      </section>
    </main>
  );
}
