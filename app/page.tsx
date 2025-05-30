import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from 'react-icons/fa6';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const SOCIALS = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/jesus',
    class: 'hover:bg-[#0077B575]',
    icon: FaLinkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/jesus',
    class: 'hover:bg-[#24292e75]',
    icon: FaGithub,
  },
  {
    name: 'Email',
    href: 'mailto:jesus@jesus.com',
    class: 'hover:bg-[#D1483675]',
    icon: FaEnvelope,
  },

  {
    name: 'Instagram',
    href: 'https://instagram.com/jesus',
    class: 'hover:bg-[#E1306C75]',
    icon: FaInstagram,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/jesus',
    class: 'hover:bg-[#1877F275]',
    icon: FaFacebook,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/jesus',
    class: 'hover:bg-[#1DA1F275]',
    icon: FaXTwitter,
  },
];

export default function Home() {
  return (
    <main className="h-full max-h-dvh min-h-dvh p-4">
      <section className="grid grid-cols-7 gap-4 rounded-3xl border-2 p-4">
        {/* Intro card */}
        <Card className="bg-muted-foreground/3 col-span-4 rounded-3xl px-6 py-0">
          <CardContent className="flex h-full flex-col justify-center gap-4 rounded-3xl">
            <h1 className="text-primary text-3xl font-medium">
              Hey there! I&apos;m Jesús
            </h1>
            <p className="text-muted-foreground/50 text-xl">
              A front-end developer, piano teacher and music composer making
              magic happen in Stavanger, Norway
            </p>
          </CardContent>
        </Card>

        {/* Social card */}
        <Card className="col-span-3 border-0 bg-transparent py-0">
          <CardContent className="grid grid-cols-3 gap-4 rounded-3xl p-0">
            {SOCIALS.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className={`bg-muted-foreground/5 group inline-flex aspect-square rounded-3xl border transition-all duration-300 hover:border-transparent ${social.class} flex items-center justify-center`}
              >
                <social.icon
                  size={26}
                  className="text-primary/80 group-hover:text-primary transition-colors"
                />
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Picture card */}
        <Card className="col-span-3 overflow-x-hidden rounded-3xl bg-transparent py-0">
          <CardContent className="flex h-full items-center justify-center px-0">
            <Image
              src="/images/placeheolder.jpg"
              alt="Jesus"
              width={500}
              height={500}
              className="object-cover"
            />
          </CardContent>
        </Card>

        {/* About card */}
        {/* About card */}
        <Link href="/about" className="col-span-2">
          <Card className="bg-muted-foreground/3 group hover:border-muted-foreground/50 hover:bg-muted-foreground/5 h-full cursor-pointer gap-0 rounded-3xl px-0 py-0 transition-colors">
            <CardHeader>
              <h2 className="text-muted-foreground/50 group-hover:text-muted-foreground/75 pt-6 pb-3 font-medium tracking-widest transition-colors">
                ABOUT
              </h2>
            </CardHeader>
            <CardContent className="flex h-full flex-col justify-between">
              <p className="text-muted-foreground text-2xl font-medium">
                Passionate musician and developer from Spain.
              </p>
              <div className="flex justify-end pb-6">
                <div className="group-hover:border-muted-foreground/50 relative inline-flex aspect-square overflow-hidden rounded-full border p-3 transition-colors">
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground/75 transition-transform duration-200 group-hover:translate-x-20 group-hover:-translate-y-20"
                  />
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground absolute -translate-x-20 translate-y-20 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </section>
    </main>
    // <main className="min-h-screen bg-[#0A0A0A] px-4 py-8 text-white md:h-screen md:overflow-auto md:p-10">
    //   {/* Bento Grid Layout */}
    //   <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
    //     {/* Intro Card - Spans 2 columns */}
    //     <div className="flex flex-col justify-between rounded-3xl bg-[#111] p-8 md:col-span-2">
    //       <div>
    //         <h1 className="mb-2 text-3xl font-bold md:text-4xl">
    //           Hi, I'm <span className="text-primary">John Doe</span> —
    //         </h1>
    //         <p className="text-lg text-gray-400">
    //           Lead product designer, currently working at
    //           <Link
    //             href="https://example.com"
    //             className="hover:text-primary ml-1 text-white underline underline-offset-4"
    //           >
    //             acme
    //           </Link>{' '}
    //           based in Cairo
    //         </p>
    //       </div>
    //     </div>

    //     {/* Social Media Grid - Single column */}
    //     <div className="flex flex-col rounded-3xl bg-[#111] p-6">
    //       <div className="grid grid-cols-2 gap-4">
    //         <Link
    //           href="https://twitter.com"
    //           className="flex aspect-square items-center justify-center rounded-2xl bg-[#1A1A1A] transition-colors hover:bg-[#222]"
    //         >
    //           <Twitter className="h-6 w-6" />
    //         </Link>
    //         <Link
    //           href="https://dribbble.com"
    //           className="flex aspect-square items-center justify-center rounded-2xl bg-[#1A1A1A] transition-colors hover:bg-[#222]"
    //         >
    //           <Dribbble className="h-6 w-6" />
    //         </Link>
    //         <Link
    //           href="https://instagram.com"
    //           className="flex aspect-square items-center justify-center rounded-2xl bg-[#1A1A1A] transition-colors hover:bg-[#222]"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             className="h-6 w-6"
    //           >
    //             <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    //             <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    //             <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    //           </svg>
    //         </Link>
    //         <Link
    //           href="https://linkedin.com"
    //           className="flex aspect-square items-center justify-center rounded-2xl bg-[#1A1A1A] transition-colors hover:bg-[#222]"
    //         >
    //           <Linkedin className="h-6 w-6" />
    //         </Link>
    //       </div>
    //     </div>

    //     {/* About Card */}
    //     <div className="rounded-3xl bg-[#111] p-8">
    //       <h2 className="mb-3 text-xl font-semibold">ABOUT</h2>
    //       <p className="text-gray-400">
    //         Passionate about design and enjoy solving problems.
    //       </p>
    //     </div>

    //     {/* Profile Picture Card */}
    //     <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#111]">
    //       <Image
    //         src="/profile-image.jpg"
    //         alt="John Doe"
    //         fill
    //         className="object-cover"
    //       />
    //       <div className="absolute right-4 bottom-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/50">
    //         <span className="text-xs">+</span>
    //       </div>
    //     </div>

    //     {/* Projects Card - All projects in one card */}
    //     <div className="rounded-3xl bg-[#111] p-8 md:col-span-2">
    //       <h2 className="mb-4 text-xl font-semibold">PROJECTS</h2>
    //       <div className="flex flex-col gap-6">
    //         {PROJECTS.slice(0, 3).map((project) => (
    //           <Link
    //             href={`/works/${project.slug}`}
    //             key={project.slug}
    //             className="group flex items-start gap-4 rounded-xl bg-[#1A1A1A] p-4 transition-colors hover:bg-[#222]"
    //           >
    //             <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
    //               <Image
    //                 src={project.image}
    //                 alt={project.title}
    //                 fill
    //                 className="object-cover"
    //               />
    //             </div>
    //             <div className="flex-grow">
    //               <h3 className="group-hover:text-primary mb-1 text-base font-bold">
    //                 {project.title}
    //               </h3>
    //               <p className="line-clamp-2 text-xs text-gray-400">
    //                 {project.description}
    //               </p>
    //               <div className="mt-2 flex flex-wrap gap-1">
    //                 {project.stack.slice(0, 2).map((tech) => (
    //                   <span
    //                     key={tech}
    //                     className="inline-block rounded-full bg-[#333] px-2 py-0.5 text-xs font-medium text-gray-300"
    //                   >
    //                     {tech}
    //                   </span>
    //                 ))}
    //               </div>
    //             </div>
    //           </Link>
    //         ))}
    //         <Link
    //           href="/works"
    //           className="group inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white"
    //         >
    //           View all projects
    //           <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    //         </Link>
    //       </div>
    //     </div>

    //     {/* Stack I Use Card */}
    //     <div className="rounded-3xl bg-[#111] p-8">
    //       <h2 className="mb-6 text-xl font-semibold">Stack I use</h2>
    //       <div className="grid grid-cols-3 gap-4">
    //         {[
    //           { icon: '/logos/react.svg', name: 'React' },
    //           { icon: '/logos/nextjs.svg', name: 'Next.js' },
    //           { icon: '/logos/typescript.svg', name: 'TypeScript' },
    //           { icon: '/logos/tailwind.svg', name: 'Tailwind' },
    //           { icon: '/logos/figma.svg', name: 'Figma' },
    //           { icon: '/logos/aws.svg', name: 'AWS' },
    //         ].map((tech, i) => (
    //           <div key={i} className="flex flex-col items-center">
    //             <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1A1A1A]">
    //               <div className="h-6 w-6 text-center text-xs">
    //                 {tech.name.charAt(0)}
    //               </div>
    //             </div>
    //             <p className="text-center text-xs">{tech.name}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Dark Mode Toggle */}
    //     <div className="flex items-center justify-center rounded-3xl bg-[#111] p-6">
    //       <div className="relative flex h-8 w-16 items-center rounded-full bg-[#1A1A1A] px-1">
    //         <div className="absolute right-1 h-6 w-6 rounded-full bg-white"></div>
    //       </div>
    //     </div>

    //     {/* Resources Card */}
    //     <div className="rounded-3xl bg-[#111] p-8 md:col-span-2">
    //       <h2 className="mb-3 text-xl font-semibold">RESOURCES</h2>
    //       <p className="mb-6 text-gray-400">Resources to speed your workflow</p>
    //       <div className="flex flex-col items-center rounded-2xl bg-[#1A1A1A] p-6 md:flex-row">
    //         <div className="relative mb-4 h-32 w-full md:mr-6 md:mb-0 md:w-32">
    //           <Image
    //             src="/resources-image.jpg"
    //             alt="Resources"
    //             fill
    //             className="rounded-xl object-cover"
    //           />
    //         </div>
    //         <div>
    //           <h3 className="mb-2 text-lg font-medium">Design Resources</h3>
    //           <p className="mb-4 text-sm text-gray-400">
    //             A collection of tools and resources to boost your design
    //             workflow.
    //           </p>
    //           <Button variant="outline" className="text-xs">
    //             View Resources
    //           </Button>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Newsletter Signup */}
    //     <div className="rounded-3xl bg-[#111] p-8 md:col-span-2">
    //       <h2 className="mb-4 text-xl font-medium">
    //         Get design tips & guides straight to your inbox for free!
    //       </h2>
    //       <div className="flex">
    //         <input
    //           type="email"
    //           placeholder="Your email address"
    //           className="flex-1 rounded-l-lg border border-[#333] bg-[#1A1A1A] p-3 text-sm focus:outline-none"
    //         />
    //         <Button className="rounded-l-none">Subscribe</Button>
    //       </div>
    //     </div>

    //     {/* Project Contact Card */}
    //     <div className="rounded-3xl bg-[#111] p-8 md:col-span-2">
    //       <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
    //         <h2 className="mb-4 text-xl font-medium md:mb-0">
    //           Have a project in mind?
    //         </h2>
    //         <div className="w-full md:w-auto">
    //           <input
    //             type="email"
    //             placeholder="Copy email"
    //             className="w-full rounded-lg border border-[#333] bg-[#1A1A1A] p-3 text-sm focus:outline-none md:w-auto"
    //             value="hello@example.com"
    //             readOnly
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     {/* Get This Template Card */}
    //     <div className="flex items-center justify-between rounded-3xl bg-[#111] p-6 md:col-span-4">
    //       <div className="text-sm"> 2024 John Doe</div>
    //       <Button variant="outline" className="text-xs">
    //         Get this template
    //       </Button>
    //     </div>
    //   </div>
    // </main>
  );
}
