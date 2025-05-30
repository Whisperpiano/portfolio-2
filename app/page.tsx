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
import { Marquee } from '@/components/magicui/marquee';

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

        {/* Stack */}
        <Card className="bg-muted-foreground/3 group hover:border-muted-foreground/50 hover:bg-muted-foreground/5 col-span-7 h-full cursor-pointer gap-0 rounded-3xl px-0 py-0 transition-colors">
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

                    <Image
                      src={stack.url}
                      alt={stack.name}
                      width={26}
                      height={26}
                      className="relative z-10 transition-all duration-300 group-hover:brightness-125"
                    />
                  </div>
                </div>
              ))}
            </Marquee>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
