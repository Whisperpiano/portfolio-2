import { BIDLY_PROCESS } from './bidly/bidly-process';
import { CSM_PROCESS } from './csm/csm-process';
import { GAMEON_PROCESS } from './gameon/gameon-process';
import { NORDHEIM_PROCESS } from './nordheim/nordheim-process';
import { NOROFF_SOCIAL_PROCESS } from './noroffsocial/noroffsocial-process';
import { SHORTLEAP_PROCESS } from './shortleap/shortleap-process';
import { SOUNDWAVES_PROCESS } from './soundwaves/soundwaves-process';

export const FEATURED_PROJECTS = [
  {
    title: 'Shortleap',
    name: 'Shortleap',
    slug: 'shortleap',
    image: '/projects/shortleap/shortleap-thumbnail.webp',
    description:
      'Shortleap is an open-source URL shortener built with Next.js and TypeScript, featuring a modern, dark-themed UI and advanced performance optimizations. It includes features like custom URL shortening, analytics, and quick QR code generation. ',
  },
  {
    title: 'Nordheim',
    name: 'Nordheim',
    slug: 'nordheim',
    image: '/projects/nordheim/nordheim-thumbnail.webp',
    description:
      'Nordheim is a premium backpack brand that blends Scandinavian minimalism with functionality, offering high-quality backpacks for both urban and outdoor lifestyles. This project was built as a full-stack e-commerce platform, focusing on performance, usability, and a seamless shopping experience.',
  },
  {
    title: 'Bidly',
    name: 'Bidly',
    slug: 'bidly',
    image: '/projects/bidly/bidly-thumbnail.webp',
    description:
      'Bidly is an exclusive auction platform, where users can create, explore, and bid on products or services in a secure and private environment. Designed with a seamless user experience, it features advanced visual effects, robust authentication, and dynamic real-time data handling.',
  },
];

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
  {
    title: 'Social Media Noroff',
    name: 'Social Media Noroff',
    slug: 'social-media-noroff',
    image: '/projects/noroffsocial/noroffsocial-thumbnail.webp',
    description:
      'A lightweight yet functional social media platform where users can post content, follow other users, and personalize their profiles. Built with React and TypeScript, it features responsive design, image uploads via Imgur API, and a clean, maintainable codebase.',
    context:
      'This project was originally a Noroff assignment, intended to use plain JavaScript and the Noroff API. I extended the original scope by rebuilding it in React and TypeScript to improve performance, maintainability, and developer experience. The result is a fully functional social app that reflects modern frontend practices.',
    timeline: '3 weeks',
    year: '2024',
    link: 'https://your-deployed-url.com',
    code: 'https://github.com/Whisperpiano/SocialMediaNoroff',
    stack: ['React', 'TypeScript', 'React Router', 'Tailwind CSS', 'Imgur API'],
    documentation: NOROFF_SOCIAL_PROCESS,
  },
  {
    title: 'SoundWaves',
    name: 'SoundWaves',
    slug: 'soundwaves',
    image: '/projects/soundwaves/soundwaves-thumbnail.webp',
    description:
      'SoundWaves is a blog platform focused on emerging music, trivia, and artist discovery. Built with vanilla JavaScript, it features dynamic content rendering, admin tools, and a clean, responsive design crafted without any frameworks.',
    context:
      'This was the final project of my first year at Noroff, designed to demonstrate everything I had learned about front-end development using only HTML, CSS, and JavaScript. The challenge was to build a fully functional and visually appealing blog platform that connects to a blog API, while also including an admin panel with post management features.',
    timeline: '3 weeks',
    year: '2024',
    link: 'https://your-deployed-url.com',
    code: 'https://github.com/Whisperpiano/Soundwaves',
    stack: ['HTML', 'CSS', 'JavaScript'],
    documentation: SOUNDWAVES_PROCESS,
  },
  {
    title: 'Community Science Museum',
    name: 'Community Science Museum',
    slug: 'community-science-museum',
    image: '/projects/csm/csm-thumbnail.webp',
    description:
      'A responsive website designed for a children’s science museum, targeting ages 7 to 15. Built with only HTML and CSS, the site offers an engaging, friendly interface focused on accessibility, clear structure, and visual appeal.',
    context:
      'CSM was my second project during the first year of my front-end studies at Noroff. The assignment simulated a client brief where I had to plan, design, and implement a public-facing site for a fictional museum. The focus was on applying fundamental HTML and CSS skills to deliver a functional, attractive, and audience-appropriate interface. JavaScript was not permitted, which pushed me to explore advanced CSS techniques, including nesting and responsive layout strategies.',
    timeline: '2 weeks',
    year: '2023',
    link: 'https://your-deployed-url.com',
    code: 'https://github.com/Whisperpiano/CommunityScienceMuseum',
    stack: ['HTML', 'CSS', 'Figma'],
    documentation: CSM_PROCESS,
  },
  {
    title: 'GameOn',
    name: 'GameOn',
    slug: 'gameon',
    image: '/projects/gameon/gameon-thumbnail.webp',
    description:
      'GameOn is an online storefront where users can browse and purchase video games. Built with HTML, CSS, and vanilla JavaScript, the site fetches game data from an external API and includes product detail views, a working cart, and a dynamic search system.',
    context:
      'This was my very first project at Noroff, created during the first semester of the Front-end Development program. The goal was to build a functional, responsive e-commerce website using only native web technologies. I focused on applying basic design principles, practicing clean JavaScript structure, and rendering pages dynamically from a real API.',
    timeline: '2 weeks',
    year: '2023',
    link: 'https://your-deployed-url.com',
    code: 'https://github.com/Whisperpiano/GameOn',
    stack: ['HTML', 'CSS', 'JavaScript'],
    documentation: GAMEON_PROCESS,
  },
];

export type Project = (typeof PROJECTS)[number];
export type FeaturedProject = (typeof FEATURED_PROJECTS)[number];
