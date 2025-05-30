import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Button>Button</Button>
      <Link href="/works/saas-platform">saas-platform</Link>
      <Link href="/works/ecommerce-dashboard">ecommerce-dashboard</Link>
      <Link href="/works/portfolio-website">portfolio-website</Link>
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
