import { PROJECTS } from '@/lib/data/projects';
import { Button } from '@/components/ui/button';
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
    <article className="mx-auto max-w-6xl px-6 py-16">
      {/* Back button */}
      <Link
        href="/"
        className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>

      {/* Project Header */}
      <div className="mb-12">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
          {project.title}
        </h1>
        <p className="max-w-3xl text-lg text-gray-400">{project.description}</p>
      </div>

      {/* Action Buttons */}
      <div className="mb-16 flex flex-wrap gap-4">
        <Link href={project.link} target="_blank">
          <Button className="flex items-center gap-2">
            Visit Website
            <ExternalLink className="h-4 w-4" />
          </Button>
        </Link>
        <Button variant="outline">Contact Me</Button>
      </div>

      {/* Project Details Grid */}
      <div className="mb-16 grid grid-cols-1 gap-x-12 gap-y-8 border-t border-b border-[#222] py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="mb-2 text-sm font-medium text-gray-400">Category</h3>
          <p className="text-white">Web Development</p>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium text-gray-400">Services</h3>
          <p className="text-white">UI/UX Design, Frontend Development</p>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium text-gray-400">Stack</h3>
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
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium text-gray-400">Year</h3>
          <p className="text-white">2024</p>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative mb-16 aspect-video w-full overflow-hidden rounded-3xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Project Content */}
      <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="mb-6 text-2xl font-bold">Project Overview</h2>
          <div className="space-y-6 text-gray-300">
            <p>
              {project.title} is a premium template designed with modern
              aesthetics and functionality in mind. This project focuses on
              delivering a seamless user experience while maintaining high
              performance standards.
            </p>
            <p>
              The design emphasizes clean typography, generous spacing, and
              thoughtful interactions that guide users through the interface
              intuitively. Dark theme implementation enhances visual hierarchy
              and reduces eye strain during extended viewing sessions.
            </p>
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-2xl font-bold">Project Highlights</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                <ArrowRight className="h-3 w-3" />
              </span>
              <span>Responsive design that works across all device sizes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                <ArrowRight className="h-3 w-3" />
              </span>
              <span>Optimized performance with modern web technologies</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                <ArrowRight className="h-3 w-3" />
              </span>
              <span>Accessibility features built-in from the ground up</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                <ArrowRight className="h-3 w-3" />
              </span>
              <span>Elegant animations that enhance the user experience</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Additional Screenshots */}
      <div className="mb-24">
        <h2 className="mb-8 text-2xl font-bold">Project Gallery</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1747619701359-13e985bc31e8?q=80&w=1489&auto=format&fit=crop"
              alt="Project screenshot"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <Image
              src="https://via.placeholder.com/600x400/1a1a1a/ffffff"
              alt="Project screenshot"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Next/Prev Navigation */}
      <div className="flex items-center justify-between border-t border-[#222] pt-12">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to All Projects
        </Link>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
        >
          Next Project
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
