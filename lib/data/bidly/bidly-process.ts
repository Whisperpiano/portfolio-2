export const BIDLY_PROCESS = {
  features: {
    text: 'From authentication and AI integration to custom theming and state management, every feature was implemented with attention to performance, reusability, and developer experience.',

    list: {
      text: 'Three types of tests were implemented:',
      items: [
        {
          title: 'Refined User Interface and Interaction Design',
          text: 'The UI is built with a strong focus on clarity, responsiveness, and modern aesthetics. Smooth transitions, consistent spacing, and micro-interactions provide a polished feel, while accessibility best practices ensure the app remains usable across devices and user preferences.',
          image: '/projects/bidly/bidly-ux.webp',
        },
        {
          title: 'Full User Authentication and Form Validation',
          text: 'Registration and login flows are built using React Hook Form, Zod, and Supabase Auth. Input validation and real-time feedback ensure a smooth and secure onboarding process across devices.',
        },
        {
          title: 'AI-Powered Description Generator',
          text: 'Users can generate item descriptions for their auction listings via the Gemini API. This speeds up the listing process and ensures consistent, well-written content, especially for users less confident with writing.',
        },
        {
          title: 'Image Uploads via Imgur API',
          text: 'Bidly supports uploading custom avatars, banner images, and item photos using the Imgur API. This allows rich media content without managing file storage infrastructure directly, improving performance and flexibility.',
        },
        {
          title: 'Real-Time Auction System',
          text: 'Users can create, browse, and bid on auction listings. Listings are updated dynamically, and bid placements are validated and stored in real time, enabling a responsive and interactive marketplace experience.',
        },
        {
          title: 'Global State Management with Zustand',
          text: 'App-wide state is managed through Zustand, offering lightweight yet powerful control over user data, modals, and theme settings. This results in faster render cycles and a simplified developer experience.',
        },
        {
          title: 'Customizable Light and Dark Themes',
          text: 'Bidly offers a toggleable UI with both dark and light modes. Theme preferences are persisted and applied throughout the app, enhancing accessibility and user comfort in various lighting environments.',
        },
      ],
    },
  },
};
