export const SHORTLEAP_PROCESS = {
  challenge:
    'Shortleap was developed as a fullstack application challenge, where the objective was to go beyond the frontend and design a complete solution from database to user interface. Built with Next.js, TypeScript, Drizzle ORM, Turso, and Auth.js, the project combines backend logic, authentication, analytics, and a responsive, user-focused interface. This project reflects my ability to plan, implement, and polish a full product experience — including technical depth, clean design, and attention to performance.',
  process: {
    text: 'Shortleap is a custom URL shortener built entirely from scratch. It includes user authentication, link management, analytics tracking, and UI/UX polish through animations and visual feedback. The backend uses a relational database (Turso) with Drizzle ORM, and the frontend is crafted with React, Tailwind CSS, and Recharts for data visualization. All features are designed to be accessible, responsive, and scalable.',
    list: {
      text: 'Key features implemented:',
      items: [
        {
          title: 'Authentication System',
          text: 'Secure login and registration flow using Auth.js, supporting both OAuth (GitHub, Google) and credentials. Sessions are managed with JWTs, and protected routes ensure that only authenticated users can access the dashboard. This provides a seamless experience while enforcing security best practices.',
        },
        {
          title: 'Custom Link Management',
          text: 'Users can create short links with custom slugs, which are validated and stored in a Turso database. The dashboard lists all user-created links with features like search, sorting, and deletion. This empowers users to manage their content intuitively and efficiently.',
          image: '/projects/shortleap/shortleap-dashboard.webp',
        },
        {
          title: 'Click Analytics',
          text: 'Each visit to a short link is logged with detailed metadata: timestamp, browser, operating system, country, region, city, and device type. This data is aggregated and displayed with Recharts (bar and pie charts), allowing users to monitor the performance of their links in real time.',
          image: '/projects/shortleap/test2.png',
        },
        {
          title: 'Copy and QR Features',
          text: 'Users can instantly copy short links to the clipboard or generate a QR code with one click. These actions are enhanced with smooth animations and tooltips, improving usability and supporting mobile and offline use cases.',
          image: '/projects/shortleap/shortleap-qr-codes.webp',
        },
        {
          title: 'Server Middleware for Click Tracking',
          text: 'A custom Next.js middleware intercepts requests to short URLs, fetches the corresponding target link from the database, logs the visit with geolocation and user-agent data, and redirects the user. This logic runs server-side for accuracy and performance.',
        },
      ],
    },
  },
  solution:
    'Shortleap demonstrates my ability to deliver a full product from backend logic to frontend polish. The result is a performant, modern, and user-friendly URL shortener that balances technical architecture with thoughtful UI. This project allowed me to deepen my experience in backend development while applying advanced frontend practices.',
};
