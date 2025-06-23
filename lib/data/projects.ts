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
      'This project was developed during the JS Frameworks module at Noroff to practice building modern web apps with React. The project focused on routing, state management, and clean component structure within a responsive store concept.',
    context:
      'Nordheim is a premium backpack brand that blends Scandinavian minimalism with functionality, offering high-quality backpacks for both urban and outdoor lifestyles. This project was built as a full-stack e-commerce platform, focusing on performance, usability, and a seamless shopping experience.',
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
      'Bidly was developed as part of Semester Project 2 during my second year at Noroff. It’s a full-featured auction platform with user authentication, listing management, and a strong focus on clean UI, accessibility, and structured data handling.',
    context:
      'Bidly is an exclusive auction platform, where users can create, explore, and bid on products or services in a secure and private environment. Designed with a seamless user experience, it features advanced visual effects, robust authentication, and dynamic real-time data handling.',
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

// features: [
//   {
//     title: 'Custom URL Shortening',
//     text: 'Users can generate personalized short links with optional slugs for easy sharing and recognition.',
//   },
//   {
//     title: 'Real-Time Click Analytics',
//     text: 'Track clicks per link, including location, device, browser, and operating system data.',
//   },
//   {
//     title: 'QR Code Generation',
//     text: 'Instant QR codes are created for every shortened URL to enable quick access on any device.',
//   },
//   {
//     title: 'User Authentication and Rate Limiting',
//     text: 'Protected routes and limits per user ensure secure and controlled usage, powered by Auth.js.',
//   },
//   {
//     title: 'Modern Fullstack Stack',
//     text: 'Built with Next.js, Drizzle ORM, Turso, and Tailwind for a fast, scalable, and elegant experience.',
//   },
//   {
//     title: 'Admin Settings and Link Limits',
//     text: 'Per-user link limits and admin-managed global settings stored securely in the database.',
//   },
// ],

// features: [
//   {
//     title: 'Scalable Data Structure',
//     text: 'Designed to support future growth while maintaining performance and flexibility.',
//   },
//   {
//     title: 'Secure Authentication',
//     text: 'User registration and login powered by Supabase Auth.',
//   },
//   {
//     title: 'Modern UI/UX ',
//     text: 'Built with TailwindCSS and Framer Motion for a clean design and smooth animations.',
//   },
//   {
//     title: 'Optimized Workflows',
//     text: 'Efficient API calls and state management to enhance responsiveness and user experience.',
//   },
//   {
//     title: 'Order Management System',
//     text: 'Users can place orders, with structured storage for tracking purchases.',
//   },
//   {
//     title: 'Performance-Driven Development',
//     text: 'Focused on maintaining fast load times and optimized resource usage.',
//   },
// ],

// features: [
//   {
//     title: 'User Registration and Authentication',
//     text: 'Implemented using React Hook Form for a seamless and secure experience.',
//   },
//   {
//     title: 'Dynamic Descriptions with Gemini API',
//     text: 'Generate item descriptions quickly and efficiently using the Gemini API.',
//   },
//   {
//     title: 'Image Uploading with Imgur API',
//     text: 'Users can upload images for their auction listings, update their avatars, and customize their profile banners.',
//   },
//   {
//     title: 'Global State Management',
//     text: 'State management powered by Zustand for a smooth and efficient user experience.',
//   },
//   {
//     title: 'Auction Listings',
//     text: 'Users can create, view, and place bids on auction listings effortlessly.',
//   },
//   {
//     title: 'Dark and Light Theme',
//     text: 'Switch between dark and light themes for personalized viewing preferences.',
//   },
// ],
