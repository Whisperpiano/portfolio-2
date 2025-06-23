export const NORDHEIM_PROCESS = {
  features: {
    text: 'Through this project, I have explored best practices in frontend development, designing a scalable data structure, optimizing workflows, and manually optimizing images to improve loading performance. This project challenged me to refine my frontend skills while integrating backend services, authentication, and state management, delivering a polished and functional product.',
    list: {
      text: 'Five types of tests were implemented:',
      items: [
        {
          title: 'Modern UI/UX with Motion and Precision',
          text: 'The entire interface is crafted using TailwindCSS and Framer Motion, delivering a minimalist aesthetic with subtle transitions and interactive feedback. Design choices prioritize clarity, accessibility, and a refined shopping experience across all devices.',
          image: '/projects/nordheim/nordheim-ux.webp',
        },
        {
          title: 'Secure and Seamless Authentication',
          text: 'User accounts are managed through Supabase Auth, enabling secure registration, login, and session handling. Auth-protected routes allow users to view and track their order history in a personalized dashboard.',
        },
        {
          title: 'Order History and Tracking',
          text: 'Customers can view previous purchases, with structured storage for product details, pricing, and order statuses. This adds transparency and builds trust, mimicking real-world e-commerce standards.',
          image: '/projects/nordheim/nordheim-orders.webp',
        },
        {
          title: 'Performance-Driven Data Handling',
          text: 'React Query is used to cache and synchronize data, enabling fast, low-latency interactions with the backend. This ensures a smooth, app-like experience even under network variability, while minimizing redundant API calls.',
        },
        {
          title: 'Scalable Architecture for Future Growth',
          text: 'Database schema and frontend state logic are designed with scalability in mind, allowing for future additions like product variants, reviews, or admin management without major refactoring.',
        },
        {
          title: 'Clean Codebase and Developer Experience',
          text: 'The project follows clear file structure conventions, modular component design, and reusable hooks for forms and data handling. This not only improves maintainability, but also reflects professional frontend engineering practices.',
        },
      ],
    },
  },
};
