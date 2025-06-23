export const SOUNDWAVES_PROCESS = {
  features: {
    text: 'SoundWaves was built without any frameworks or libraries, focusing entirely on native web technologies. Every feature was implemented manually, allowing full control over application flow, UI logic, and responsiveness.',

    list: {
      text: 'Key features implemented:',
      items: [
        {
          title: 'Responsive Blog Layout',
          text: 'The blog pages are styled with CSS to adapt across devices, maintaining a clean and modern visual identity. Typography, spacing, and layout decisions were made to enhance readability and focus on content.',
          image: '/projects/soundwaves/soundwaves-ui.webp',
        },
        {
          title: 'Dynamic Post Rendering with Vanilla JavaScript',
          text: 'Posts are fetched from an external blogging API and rendered dynamically in the UI. Custom DOM manipulation logic was written from scratch to handle routing, content injection, and user interactions.',
        },
        {
          title: 'Hidden Konami Code Login Access',
          text: 'Access to the admin panel is protected by a fun and unexpected “Konami Code” Easter egg. When the user enters the correct key sequence, a hidden route to the login and register interface is revealed.',
        },
        {
          title: 'Admin Panel for Post Management',
          text: 'Authenticated users can create, edit, and delete blog posts through a custom-built admin interface. All interactions are performed using raw JavaScript and directly connected to the external API.',
        },
        {
          title: 'Clean, Maintainable JavaScript Codebase',
          text: 'The code was structured with reusability and readability in mind. Clear separation of concerns and modular script organization contribute to a maintainable base even without modern tooling.',
        },
      ],
    },
  },
};
