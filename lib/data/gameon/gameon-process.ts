export const GAMEON_PROCESS = {
  features: {
    text: 'GameOn was my introduction to building dynamic web applications using pure JavaScript. The goal was to create an online store that could fetch products from an external API and offer basic e-commerce functionality with a clean UI.',

    list: {
      text: 'Key features implemented:',
      items: [
        {
          title: 'Dynamic Product Rendering from API',
          text: 'Game data is fetched from the Noroff API and displayed on the site, including details such as title, image, and description. Each product has a dynamically generated detail page.',
          image: '/projects/gameon/gameon-ux.webp',
        },
        {
          title: 'Shopping Cart System',
          text: 'Users can add and remove games from a local cart. The cart persists while navigating the site and includes total price calculation and quantity management using JavaScript.',
        },
        {
          title: 'Search Functionality',
          text: 'A real-time search bar allows users to quickly filter the list of games by title. Input is handled via event listeners and DOM manipulation without external libraries.',
        },
        {
          title: 'Responsive Design with CSS',
          text: 'The layout adapts to different screen sizes using media queries and flexible styling. Buttons, cards, and navigation elements were designed to ensure usability on mobile and desktop.',
        },
        {
          title: 'Clean and Structured Codebase',
          text: 'Special attention was given to separating concerns and organizing logic into manageable functions. This marked my first step toward writing scalable, readable JavaScript.',
        },
      ],
    },
  },
};
