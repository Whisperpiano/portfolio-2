export const NOROFF_SOCIAL_PROCESS = {
  features: {
    text: 'From profile customization and image posting to user-to-user interaction, each feature was designed to reinforce a fluid user experience. The project focuses on clean UI, scalable architecture, and efficient component logic built entirely in React and TypeScript.',

    list: {
      text: 'Key features implemented:',
      items: [
        {
          title: 'Refined UI and Responsive Design',
          text: 'The interface is built using Tailwind CSS with careful attention to layout, spacing, and responsiveness. The result is a modern, minimal look that adapts well across devices and screen sizes.',
          image: '/projects/noroffsocial/noroffsocial-ux.webp',
        },
        {
          title: 'User Authentication and Profile Management',
          text: 'Users can log in, view profiles, and edit their own, including avatar and banner images. Profile data is synced with the Noroff API and includes persistent session handling.',
        },
        {
          title: 'Post Creation with Image Support',
          text: 'Users can publish posts containing text and images, which are uploaded via the Imgur API. Uploaded content is rendered dynamically and integrated into the user feed.',
        },
        {
          title: 'Follow System and Social Graph',
          text: 'The platform includes basic social functionality, allowing users to follow and unfollow others. This affects the feed and enables a personalized content experience.',
        },
        {
          title: 'Routing and Page Structure with React Router',
          text: 'All views are handled through React Router, including dynamic routing for user profiles and post details. Navigation is smooth and preserves state where appropriate.',
        },
        {
          title: 'Clean, Modular Codebase',
          text: 'The app follows a structured and scalable architecture with reusable components, typed props, and organized folder logic. This improves maintainability and simplifies future iterations.',
        },
      ],
    },
  },
};
