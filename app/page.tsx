import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/lib/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Header Section - 70vh instead of full height */}
      <section className="relative flex h-[70vh] w-full flex-col items-center justify-center overflow-hidden px-6">
        <div className="animate-gradient absolute inset-0 z-0 bg-gradient-to-br from-blue-900/30 via-purple-800/30 to-black"></div>
        <div className="animate-fade-in z-10 flex flex-col items-center justify-center text-center">
          <h1 className="mb-4 max-w-3xl text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            I&apos;m <span className="text-primary">John Doe</span>, Front-End
            Developer & UI/UX Enthusiast
          </h1>
          <p className="text-muted-foreground mb-8 max-w-xl text-lg tracking-wide md:text-xl">
            Crafting responsive, accessible, and performant web experiences with
            modern technologies
          </p>
          <Button
            size="lg"
            className="group hover:shadow-glow transition-all hover:scale-105"
          >
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        {/* Animated particles/shapes overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          {/* This would typically be implemented with a particles library or custom SVG elements */}
        </div>
      </section>

      {/* Feature Cards Section - Vertical layout with larger cards */}
      <section className="mx-auto w-full max-w-5xl px-6 py-24">
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight md:text-5xl">
          Featured Projects
        </h2>
        <div className="flex flex-col gap-16">
          {PROJECTS.map((project) => (
            <div
              key={project.slug}
              className="group overflow-hidden rounded-3xl bg-[#111] transition-all hover:bg-[#161616]"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-10">
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block rounded-full bg-[#222] px-3 py-1 text-xs font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="mb-3 text-2xl font-bold md:text-3xl">
                  {project.title}
                </h3>
                <p className="mb-8 text-gray-400">{project.description}</p>
                <div className="flex items-center gap-4">
                  <Link
                    href={`/works/${project.slug}`}
                    className="group/view flex items-center gap-2 rounded-lg bg-[#222] px-4 py-2 font-medium text-white transition-all hover:bg-[#333]"
                  >
                    View Project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/view:translate-x-1" />
                  </Link>
                  <Link
                    href={project.link}
                    className="group/link flex items-center gap-2 rounded-lg px-4 py-2 font-medium text-gray-400 transition-colors hover:text-white"
                    target="_blank"
                  >
                    Visit Site
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 3H21V9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 14L21 3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-16 text-center text-4xl font-light tracking-tight md:text-5xl">
            My Tech Stack
          </h2>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[
              { name: 'React', logo: '/react.svg', years: '5 years' },
              { name: 'Next.js', logo: '/next.svg', years: '3 years' },
              { name: 'TypeScript', logo: '/globe.svg', years: '4 years' },
              { name: 'TailwindCSS', logo: '/window.svg', years: '3 years' },
              { name: 'Framer Motion', logo: '/file.svg', years: '2 years' },
              { name: 'Supabase', logo: '/vercel.svg', years: '1 year' },
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center"
                style={{
                  animationDelay: `${index * 100}ms`,
                  transform: `translateY(${index % 2 ? 20 : 0}px)`,
                }}
              >
                <div className="group relative mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-[#111] p-5 shadow-lg transition-all hover:scale-110 hover:rotate-3 hover:shadow-xl">
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    width={64}
                    height={64}
                    className="h-12 w-12 object-contain transition-all group-hover:scale-110"
                  />
                  <div className="bg-card absolute -bottom-2 left-1/2 w-max -translate-x-1/2 transform rounded-full px-3 py-1 text-xs font-medium opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                    {tech.years}
                  </div>
                </div>
                <p className="text-center text-sm font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Stay Connected Section */}
      <section className="w-full bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-muted-foreground mb-3 flex items-center justify-center gap-4 text-sm font-light italic">
            <span className="bg-border h-px w-8"></span>
            Reach out anytime
            <span className="bg-border h-px w-8"></span>
          </p>
          <h2 className="mb-6 text-5xl font-bold">Let&apos;s Stay Connected</h2>
          <p className="text-muted-foreground mx-auto mb-10 max-w-xl text-lg">
            Got questions or want to collaborate? Feel free to reach
            out—I&apos;m open to new projects or just a casual chat.
          </p>
          <Button
            size="lg"
            className="group hover:shadow-glow mb-12 transition-all hover:scale-105"
          >
            Contact Me
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>

          <div className="mb-6 flex items-center justify-center gap-6">
            <Link
              href="https://twitter.com"
              target="_blank"
              className="bg-card hover:bg-accent hover:text-accent-foreground rounded-full p-3 transition-all hover:scale-110"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="bg-card hover:bg-accent hover:text-accent-foreground rounded-full p-3 transition-all hover:scale-110"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="bg-card hover:bg-accent hover:text-accent-foreground rounded-full p-3 transition-all hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:hello@example.com"
              className="bg-card hover:bg-accent hover:text-accent-foreground rounded-full p-3 transition-all hover:scale-110"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          <p className="text-muted-foreground text-sm">hello@example.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-[#222] bg-black py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="text-sm text-[#777]"> 2024 John Doe</div>
          <nav>
            <ul className="flex items-center gap-8">
              {['About', 'Projects', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-primary text-sm tracking-wide text-[#777] uppercase transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-xs tracking-wider text-[#777] uppercase">
            Built with Next.js • Designed by Me
          </div>
        </div>
      </footer>
    </main>
  );
}
