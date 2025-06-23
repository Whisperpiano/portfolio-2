export const SHORTLEAP_PROCESS = {
  features: {
    text: 'Shortleap is a custom URL shortener built entirely from scratch. It includes user authentication, link management, analytics tracking, and UI/UX polish through animations and visual feedback. The backend uses a relational database (Turso) with Drizzle ORM, and the frontend is crafted with React, Tailwind CSS, and Recharts for data visualization. All features are designed to be accessible, responsive, and scalable.',
    list: {
      text: 'Key features implemented:',
      items: [
        {
          title: 'Custom URL Shortening',
          text: 'Users can generate personalized short links with optional slugs, ensuring readability and branding. Input is validated and stored securely in a Turso database using Drizzle ORM.',
          image: '/projects/shortleap/shortleap-urls.webp',
        },
        {
          title: 'Real-Time Click Analytics',
          text: 'Every visit is tracked with metadata including timestamp, geolocation (country, region, city), device, OS, and browser. Data is visualized with Recharts for clear insights into link performance.',
          image: '/projects/shortleap/shortleap-analytics.webp',
        },
        {
          title: 'QR Code Generation',
          text: 'Each link automatically generates a scannable QR code, enabling fast access across devices and extending usability to print and offline scenarios.',
          image: '/projects/shortleap/shortleap-qrcodes.webp',
        },
        {
          title: 'Authentication and Access Control',
          text: 'Auth.js manages secure login via credentials and OAuth (GitHub, Google). JWT-based sessions protect user data and restrict dashboard access to authenticated users.',
        },
        {
          title: 'Server-Side Middleware for Analytics',
          text: 'Custom Next.js middleware intercepts shortlink requests to handle redirects and log click data accurately from the server side, ensuring better performance and data reliability.',
        },
        {
          title: 'Per-User Limits and Admin Controls',
          text: 'Users are limited to a configurable number of links. Admin-defined global settings are stored in the database, allowing for centralized control over application constraints.',
        },
        {
          title: 'Modern, Scalable Stack',
          text: 'The app is built with Next.js, Drizzle ORM, Turso, Tailwind CSS, and Recharts. Emphasis is placed on performance, scalability, responsive design, and clean UI with accessible interactions.',
        },
        {
          title: 'Enhanced UX with Visual Feedback',
          text: 'Animations, transitions, and contextual tooltips offer a refined experience, improving usability and guiding user actions without interrupting workflows.',
        },
      ],
    },
  },
};
