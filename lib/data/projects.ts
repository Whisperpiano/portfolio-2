import { BIDLY_PROCESS } from './bidly/bidly-process';
import { NORDHEIM_PROCESS } from './nordheim/nordheim-process';
import { SHORTLEAP_PROCESS } from './shortleap/shortleap-process';

export const PROJECTS = [
  {
    title: 'Shortleap',
    name: 'Shortleap',
    slug: 'shortleap',
    image: '/projects/shortleap/shortleap-thumbnail.webp',

    description:
      'Shortleap is an open-source URL shortener built with Next.js and TypeScript, featuring a modern, dark-themed UI and advanced performance optimizations. It includes features like custom URL shortening, analytics, and quick QR code generation. ',
    context:
      'Developed as a personal fullstack challenge during the exam period, despite being exempt thanks to my previous work at Plantasjen. I used this opportunity to push my skills further and explore advanced concepts beyond the course requirements.',
    timeline: '5 weeks',
    year: '2025',
    link: 'https://shortleap.vercel.app',
    code: 'https://github.com/Whisperpiano/url-shortener',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'Turso SQLite',
      'Shadcn UI',
      'Framer Motion',
      'Zod',
    ],
    documentation: SHORTLEAP_PROCESS,
  },
  {
    title: 'Nordheim',
    name: 'Nordheim',
    slug: 'nordheim',
    image: '/projects/nordheim/nordheim-thumbnail.webp',
    description:
      'Nordheim is a premium backpack brand that blends Scandinavian minimalism with functionality, offering high-quality backpacks for both urban and outdoor lifestyles. This project was built as a full-stack e-commerce platform, focusing on performance, usability, and a seamless shopping experience.',
    context:
      'This project was developed during the JS Frameworks module at Noroff to practice building modern web apps with React. The project focused on routing, state management, and clean component structure within a responsive store concept.',
    timeline: '5 weeks',
    year: '2025',
    link: 'https://nordheim.netlify.app',
    code: 'https://github.com/Whisperpiano/nordheim',
    stack: [
      'Vite',
      'React',
      'TypeScript',
      'Zustand',
      'Tailwind CSS',
      'Supabase',
      'Framer Motion',
      'Zod',
    ],
    documentation: NORDHEIM_PROCESS,
  },
  {
    title: 'Bidly',
    name: 'Bidly',
    slug: 'bidly',
    image: '/projects/bidly/bidly-thumbnail.webp',
    description:
      'Bidly is an exclusive auction platform, where users can create, explore, and bid on products or services in a secure and private environment. Designed with a seamless user experience, it features advanced visual effects, robust authentication, and dynamic real-time data handling.',
    context:
      'Bidly was developed as part of Semester Project 2 during my second year at Noroff. It’s a full-featured auction platform with user authentication, listing management, and a strong focus on clean UI, accessibility, and structured data handling.',
    timeline: '5 weeks',
    year: '2024',
    link: 'https://bidlify.netlify.app/home',
    code: 'https://github.com/Whisperpiano/Bidly',
    stack: [
      'Vite',
      'React',
      'TypeScript',
      'React Hook Form',
      'React Router',
      'Tailwind CSS',
    ],
    documentation: BIDLY_PROCESS,
  },
];

export type Project = (typeof PROJECTS)[number];
