import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
} from 'react-icons/fa6';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Marquee } from '@/components/magicui/marquee';
import { PROJECTS } from '@/lib/data/projects';
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from '@/components/magicui/terminal';

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

const STACK = [
  {
    name: 'HTML5',
    url: '/icons/html5.svg',
    bgClass: 'bg-[#E34F2615]',
    hoverBgClass: 'group-hover:bg-[#E34F2630]',
  },
  {
    name: 'CSS3',
    url: '/icons/css.svg',
    bgClass: 'bg-[#1572B615]',
    hoverBgClass: 'group-hover:bg-[#1572B630]',
  },
  {
    name: 'JavaScript',
    url: '/icons/javascript.svg',
    bgClass: 'bg-[#F7DF1E15]',
    hoverBgClass: 'group-hover:bg-[#F7DF1E30]',
  },
  {
    name: 'TypeScript',
    url: '/icons/typescript.svg',
    bgClass: 'bg-[#3178C615]',
    hoverBgClass: 'group-hover:bg-[#3178C630]',
  },
  {
    name: 'React',
    url: '/icons/react.svg',
    bgClass: 'bg-[#61DAFB15]',
    hoverBgClass: 'group-hover:bg-[#61DAFB30]',
  },
  {
    name: 'Next.js',
    url: '/icons/nextjs.svg',
    bgClass: 'bg-[#00000015]',
    hoverBgClass: 'group-hover:bg-[#00000030]',
  },
  {
    name: 'Astro',
    url: '/icons/astro.svg',
    bgClass: 'bg-[#FF5D0115]',
    hoverBgClass: 'group-hover:bg-[#FF5D0130]',
  },
  {
    name: 'Tailwind CSS',
    url: '/icons/tailwindcss.svg',
    bgClass: 'bg-[#06B6D415]',
    hoverBgClass: 'group-hover:bg-[#06B6D430]',
  },
  {
    name: 'React Router',
    url: '/icons/reactrouter.svg',
    bgClass: 'bg-[#CA424515]',
    hoverBgClass: 'group-hover:bg-[#CA424530]',
  },
  {
    name: 'React Query',
    url: '/icons/reactquery.svg',
    bgClass: 'bg-[#FF415415]',
    hoverBgClass: 'group-hover:bg-[#FF415430]',
  },
  {
    name: 'Prisma',
    url: '/icons/prisma.svg',
    bgClass: 'bg-[#2D374815]',
    hoverBgClass: 'group-hover:bg-[#2D374830]',
  },
  {
    name: 'PostgreSQL',
    url: '/icons/postgresql.svg',
    bgClass: 'bg-[#4169E115]',
    hoverBgClass: 'group-hover:bg-[#4169E130]',
  },
  {
    name: 'MySQL',
    url: '/icons/mysql.svg',
    bgClass: 'bg-[#4479A115]',
    hoverBgClass: 'group-hover:bg-[#4479A130]',
  },
  {
    name: 'Turso',
    url: '/icons/turso.svg',
    bgClass: 'bg-[#4FF8D215]',
    hoverBgClass: 'group-hover:bg-[#4FF8D230]',
  },
  {
    name: 'Supabase',
    url: '/icons/supabase.svg',
    bgClass: 'bg-[#3ECF8E15]',
    hoverBgClass: 'group-hover:bg-[#3ECF8E30]',
  },
  {
    name: 'Vercel',
    url: '/icons/vercel.svg',
    bgClass: 'bg-[#00000015]',
    hoverBgClass: 'group-hover:bg-[#00000030]',
  },
  {
    name: 'Netlify',
    url: '/icons/netlify.svg',
    bgClass: 'bg-[#00C7B715]',
    hoverBgClass: 'group-hover:bg-[#00C7B730]',
  },
  {
    name: 'Vite',
    url: '/icons/vitejs.svg',
    bgClass: 'bg-[#646CFF15]',
    hoverBgClass: 'group-hover:bg-[#646CFF30]',
  },
  {
    name: 'PNPM',
    url: '/icons/pnpm.svg',
    bgClass: 'bg-[#F6922015]',
    hoverBgClass: 'group-hover:bg-[#F6922030]',
  },
  {
    name: 'npm',
    url: '/icons/npm.svg',
    bgClass: 'bg-[#CB383715]',
    hoverBgClass: 'group-hover:bg-[#CB383730]',
  },
  {
    name: 'Adobe Photoshop',
    url: '/icons/photoshop.svg',
    bgClass: 'bg-[#31A8FF15]',
    hoverBgClass: 'group-hover:bg-[#31A8FF30]',
  },
  {
    name: 'Figma',
    url: '/icons/figma.svg',
    bgClass: 'bg-[#F24E1E15]',
    hoverBgClass: 'group-hover:bg-[#F24E1E30]',
  },
];

// const EXPERIENCE = [
//   {
//     name: 'Front-end Developer',
//     company: 'Plantasjen',
//     date: 'Summer 2024',
//     description:
//       "During a two-month summer job, I worked closely with two developers to redesign and launch the company's new website.",
//   },
//   {
//     name: 'Piano teacher',
//     company: 'Sandnes Kulturskole',
//     date: '2021 - Present',
//     description:
//       'Responsible for teaching piano performance, music theory, and harmony to students ranging from young beginners to advanced pianists.',
//   },
// ];

export default function Home() {
  return (
    <main className="h-full max-h-dvh min-h-dvh p-4">
      <section className="">
        <section className="col-span-2 grid grid-cols-8 gap-4 rounded-3xl border-2 p-4">
          {/* Picture card */}
          <Card className="col-span-2 h-full overflow-x-hidden rounded-3xl bg-transparent py-0">
            <CardContent className="relative flex h-full items-center justify-center px-0">
              <Image
                src="/images/profile.png"
                alt="Jesus"
                fill
                className="object-cover"
              />
            </CardContent>
          </Card>

          {/* Intro card */}
          <Link href="/about" className="group relative col-span-3">
            <Terminal>
              <TypingAnimation>&gt; whoami</TypingAnimation>
              <AnimatedSpan delay={1000} className="text-blue-400">
                <span>jesús @ stavanger-machine ~ 🇳🇴</span>
              </AnimatedSpan>

              <TypingAnimation delay={1800}>
                &gt; cat about_me.txt
              </TypingAnimation>
              <AnimatedSpan delay={3200} className="text-yellow-300">
                <span>
                  - Frontend dev with a keyboard in one hand and a piano in the
                  other 🎹💻
                </span>
              </AnimatedSpan>
              <AnimatedSpan delay={4200} className="text-yellow-300">
                <span>
                  - Based in Stavanger, where code meets fjords and lo-fi beats
                </span>
              </AnimatedSpan>

              <TypingAnimation delay={5300}>
                &gt; cat skills.txt
              </TypingAnimation>
              <AnimatedSpan delay={6500} className="text-green-400">
                <span>
                  ✓ Frontend Development (React + TypeScript enthusiast)
                </span>
              </AnimatedSpan>
              <AnimatedSpan delay={7100} className="text-green-400">
                <span>
                  ✓ Piano & Music Production (ex-conservatory student 🎼)
                </span>
              </AnimatedSpan>
              <AnimatedSpan delay={7700} className="text-green-400">
                <span>✓ UI/UX Design with a clean aesthetic obsession</span>
              </AnimatedSpan>
              <AnimatedSpan delay={8300} className="text-green-400">
                <span>
                  ✓ Teaching, mentoring & explaining things with metaphors 😄
                </span>
              </AnimatedSpan>
              <AnimatedSpan delay={8900} className="text-green-400">
                <span>✓ Solving bugs like it&apos;s jazz improvisation 🎷</span>
              </AnimatedSpan>

              <TypingAnimation delay={9200}>
                &gt; ./launch_portfolio.sh
              </TypingAnimation>
              <AnimatedSpan delay={11200} className="text-pink-400">
                <span>🚀 Initializing...</span>
              </AnimatedSpan>
              <AnimatedSpan delay={11700} className="text-pink-400">
                <span>🌐 Opening in browser...</span>
              </AnimatedSpan>
              <AnimatedSpan delay={13200} className="text-pink-400">
                <span>✅ Ready. Welcome to my portfolio!</span>
              </AnimatedSpan>
            </Terminal>
            <div className="absolute right-6 bottom-6 z-20">
              <div className="group-hover:border-muted-foreground/50 relative inline-flex aspect-square overflow-hidden rounded-full border p-3 transition-colors">
                <div className="bg-primary/10 absolute inset-0 scale-0 rounded-full transition-transform duration-500 group-hover:scale-100" />
                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground/75 transition-transform duration-200 group-hover:translate-x-20 group-hover:-translate-y-20"
                />
                <ArrowUpRight
                  size={20}
                  className="text-primary absolute -translate-x-20 translate-y-20 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </div>
            </div>
          </Link>

          <div className="col-span-3 flex flex-col gap-4">
            <Card className="col-span-2 border-0 bg-transparent py-0">
              <CardContent className="grid grid-cols-3 gap-4 rounded-3xl p-0">
                {SOCIALS.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    className={`group relative inline-flex aspect-square rounded-3xl border transition-all duration-300 hover:border-transparent ${social.class} flex items-center justify-center overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <social.icon
                      size={50}
                      className="text-primary/80 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                    />
                    <div className="absolute -right-1 -bottom-1 h-12 w-12 rounded-full bg-white/5 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"></div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* badge */}
          {/* <Card className="bg-muted-foreground/3 group hover:border-muted-foreground/50 hover:bg-muted-foreground/8 col-span-2 h-full cursor-pointer gap-0 overflow-hidden rounded-3xl px-0 py-0 transition-colors">
            <CardContent className="relative flex h-full flex-col items-start justify-between p-6">
              <div className="flex items-center justify-center">
                <span className="relative -z-[1] inline-flex overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                  <div className="inline-flex w-full items-center justify-center rounded-3xl bg-neutral-800/15 px-3 py-1 text-xs whitespace-nowrap text-white backdrop-blur-3xl lg:text-sm">
                    Available for work
                  </div>
                </span>
              </div>
            </CardContent>
          </Card> */}

          {/* experience */}

          {/* <Card className="bg-muted-foreground/3 group hover:border-muted-foreground/50 hover:bg-muted-foreground/8 col-span-3 h-full cursor-pointer gap-0 rounded-3xl px-0 py-0 transition-colors">
            <CardHeader>
              <h2 className="text-muted-foreground/50 group-hover:text-muted-foreground/75 pt-6 pb-3 font-medium tracking-widest transition-colors">
                EXPERIENCE
              </h2>
            </CardHeader>
            <CardContent className="flex h-full flex-col justify-between">
              <ol className="border-muted-foreground/20 relative mb-6 space-y-10 border-l px-6 pl-6">
                {EXPERIENCE.map((experience) => (
                  <li key={experience.name} className="group/item mb-4 ml-2">
                    <div className="bg-muted group-hover/item:bg-primary absolute -left-[6.5px] mt-2 h-3 w-3 rounded-full transition-colors"></div>

                    <div className="flex items-center justify-between">
                      <h3 className="text-primary/90 mb-1 text-xl font-medium transition-all duration-300 group-hover/item:translate-x-1">
                        {experience.name}
                      </h3>
                      <time className="text-muted-foreground/50 mb-1 block text-sm font-normal">
                        {experience.date}
                      </time>
                    </div>

                    <p className="text-muted-foreground/70 text-base font-medium">
                      {experience.company}
                    </p>
                    {experience.description && (
                      <p className="text-muted-foreground/50 mt-2 text-sm font-normal">
                        {experience.description}
                      </p>
                    )}
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card> */}

          {/* Social card */}
          {/* <Card className="col-span-2 border-0 bg-transparent py-0">
            <CardContent className="grid grid-cols-3 gap-4 rounded-3xl p-0">
              {SOCIALS.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className={`bg-muted-foreground/5 group inline-flex aspect-square rounded-3xl border transition-all duration-300 hover:border-transparent ${social.class} flex items-center justify-center`}
                >
                  <social.icon
                    size={26}
                    className="text-primary/80 group-hover:text-primary transition-colors"
                  />
                </Link>
              ))}
            </CardContent>
          </Card> */}

          {/* <Card className="bg-muted-foreground/3 col-span-3 rounded-3xl px-6 py-8">
            <CardContent className="flex h-full flex-col items-start justify-center gap-6 rounded-3xl">
              <div className="space-y-3">
                <h2 className="text-primary text-3xl font-medium">
                  Have a project in mind?
                </h2>
                <p className="text-muted-foreground/50 text-lg">
                  Let&apos;s collaborate and bring your ideas to life. From
                  concept to deployment.
                </p>
              </div>

              <div className="mt-4 ml-auto flex gap-4">
                <InteractiveHoverButton>Get in touch</InteractiveHoverButton>
              </div>
            </CardContent>
          </Card> */}

          {/* Terminal card */}
          {/* <Card className="bg-muted-foreground/3 col-span-2 rounded-3xl">
            <CardContent className="h-full">
              <TypingAnimation>&gt; whoami</TypingAnimation>
              <AnimatedSpan delay={800} className="text-blue-400">
                <span>jesús @ developer-machine</span>
              </AnimatedSpan>

              <TypingAnimation delay={1500}>
                &gt; cat skills.txt
              </TypingAnimation>
              <AnimatedSpan delay={2200} className="text-green-400">
                <span>✓ Frontend Development</span>
              </AnimatedSpan>
              <AnimatedSpan delay={2600} className="text-green-400">
                <span>✓ Piano & Music Production</span>
              </AnimatedSpan>
              <AnimatedSpan delay={3000} className="text-green-400">
                <span>✓ Teaching & Mentoring</span>
              </AnimatedSpan>
              <AnimatedSpan delay={3400} className="text-green-400">
                <span>✓ Problem Solving</span>
              </AnimatedSpan>

              <TypingAnimation delay={4200}>
                &gt; ls current_projects/
              </TypingAnimation>
              <AnimatedSpan delay={4800} className="text-cyan-400">
                <span>📱 mobile-app/</span>
              </AnimatedSpan>
              <AnimatedSpan delay={5100} className="text-cyan-400">
                <span>🌐 portfolio-v3/</span>
              </AnimatedSpan>
              <AnimatedSpan delay={5400} className="text-cyan-400">
                <span>🎵 music-visualizer/</span>
              </AnimatedSpan>

              <TypingAnimation delay={6200}>&gt; git status</TypingAnimation>
              <AnimatedSpan delay={6800} className="text-yellow-400">
                <span>On branch main</span>
              </AnimatedSpan>
              <AnimatedSpan delay={7200} className="text-green-400">
                <span>
                  Your branch is up to date with &apos;origin/main&apos;
                </span>
              </AnimatedSpan>
              <AnimatedSpan delay={7600} className="text-green-400">
                <span>Nothing to commit, working tree clean ✨</span>
              </AnimatedSpan>

              <TypingAnimation delay={8400}>
                &gt; echo &quot;Ready for new challenges!&quot;
              </TypingAnimation>
              <AnimatedSpan delay={9000} className="text-purple-400">
                <span>Ready for new challenges! 🚀</span>
              </AnimatedSpan>
            </CardContent>
          </Card> */}

          {/* About card */}
          {/* <Link href="/about" className="col-span-2">
            <Card className="bg-muted-foreground/3 group hover:border-muted-foreground/50 hover:bg-muted-foreground/8 h-full cursor-pointer gap-0 rounded-3xl px-0 py-0 transition-colors">
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
          </Link> */}

          <section className="col-span-8 flex gap-5">
            {PROJECTS.map((project) => (
              <Link
                key={project.title}
                href={`/works/${project.slug}`}
                className="group h-125 flex-1"
              >
                <Card className="from-background hover:border-muted-foreground/50 h-full overflow-hidden bg-gradient-to-t via-transparent to-transparent py-0 transition-colors duration-300">
                  <CardContent className="relative flex h-full flex-col justify-end gap-0 px-6 pt-6">
                    <div className="absolute inset-0 -z-10">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-center transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
                      />
                    </div>

                    <div className="bg-muted-foreground/5 absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                    <div className="relative z-20 mb-8 transition-transform duration-300 group-hover:-translate-y-8">
                      <h2 className="mb-0 text-2xl font-bold">
                        {project.title}
                      </h2>
                    </div>

                    <div className="absolute bottom-9 left-6 z-20 translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-muted-foreground/75 line-clamp-3 text-sm">
                        {project.description}
                      </p>
                    </div>

                    <div className="absolute right-6 bottom-6 z-20">
                      <div className="group-hover:border-muted-foreground/50 relative inline-flex aspect-square overflow-hidden rounded-full border p-3 transition-colors">
                        <div className="bg-primary/10 absolute inset-0 scale-0 rounded-full transition-transform duration-500 group-hover:scale-100" />
                        <ArrowUpRight
                          size={20}
                          className="text-muted-foreground/75 transition-transform duration-200 group-hover:translate-x-20 group-hover:-translate-y-20"
                        />
                        <ArrowUpRight
                          size={20}
                          className="text-primary absolute -translate-x-20 translate-y-20 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </section>

          {/* Connect card */}
          {/* <Card className="bg-muted-foreground/3 group hover:border-muted-foreground/50 hover:bg-muted-foreground/5 col-span-8 h-full cursor-pointer gap-0 rounded-3xl px-0 py-0 transition-colors">
            <CardHeader>
              <h2 className="text-muted-foreground/50 group-hover:text-muted-foreground/75 pt-6 pb-3 font-medium tracking-widest uppercase transition-colors">
                Projects
              </h2>
            </CardHeader>
          </Card> */}

          {/* Stack */}
          <Card className="bg-muted-foreground/3 group hover:border-muted-foreground/50 hover:bg-muted-foreground/5 col-span-8 h-full cursor-pointer gap-0 rounded-3xl px-0 py-0 transition-colors">
            <CardHeader>
              <h2 className="text-muted-foreground/50 group-hover:text-muted-foreground/75 pt-6 pb-3 font-medium tracking-widest uppercase transition-colors">
                Tech stack
              </h2>
            </CardHeader>
            <CardContent className="relative flex h-full flex-col justify-between mask-r-from-70% mask-r-to-100% mask-l-from-70% mask-l-to-100%">
              <Marquee pauseOnHover className="mb-6 [--duration:60s]">
                {STACK.map((stack) => (
                  <div
                    key={stack.name}
                    className="mx-2 flex h-16 w-16 items-center justify-center"
                  >
                    <div
                      className={`group relative flex aspect-square h-full w-full items-center justify-center rounded-xl ${stack.bgClass} backdrop-blur-sm transition-all duration-300`}
                    >
                      <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>

                      <Image
                        src={stack.url}
                        alt={stack.name}
                        width={26}
                        height={26}
                        className="pointer-events-none relative z-10 transition-all duration-300 group-hover:brightness-125"
                      />
                    </div>
                  </div>
                ))}
              </Marquee>
            </CardContent>
          </Card>
        </section>
      </section>
    </main>
  );
}
