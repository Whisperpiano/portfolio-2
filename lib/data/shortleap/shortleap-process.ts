export const SHORTLEAP_PROCESS = {
  challenge:
    'While Shortleap was initially built to showcase fullstack functionality, its original version lacked visual refinement — no responsive design, no animations, and no theme support. The challenge was to revisit the project not to add features, but to transform the user experience through UI polish and thoughtful enhancements without altering the core logic.',

  process: {
    text: 'To elevate the visual and functional quality of Shortleap, I revisited the landing page and dashboard with a strong focus on frontend polish. I implemented a full light/dark theme system, improved layout responsiveness across screen sizes, and incorporated smooth animations using Framer Motion. These changes enhance usability, performance, and overall perception of the product.',

    list: {
      text: 'Key improvements added:',
      items: [
        {
          title: 'Light and Dark Theme Support',
          text: "The landing page now adapts to the user's system theme. Images and components dynamically respond to the selected theme using `next-themes`. This allows a visually consistent experience across modes.",
          image: '/projects/shortleap/shortleap-theme.webp',
          code: `// Get the current theme and function to update it
const { resolvedTheme } = useTheme();

// Dynamically switch image depending on current theme
const imageSrc = resolvedTheme === "dark"
  ? "/images/dashboard_dark_big.webp"
  : "/images/dashboard_light_big.webp";`,
        },

        {
          title: 'Visual Animations with Framer Motion',
          text: 'Key visual elements now include smooth animations using Framer Motion, giving more life and rhythm to the UI while guiding attention.',
          code: `// Animated background using Framer Motion
<motion.div
  animate={{
    background: [
      "radial-gradient(circle, rgba(236, 72, 228, 0.25)...", // Gradient A
      "radial-gradient(circle, rgba(168, 85, 247, 0.25)..."  // Gradient B
    ],
    scale: [1, 1.3, 1.15], // Pulsing scale
    skewX: [0, 25, -20, 30, -15, 0], // Subtle distortion
  }}
  transition={{
    duration: 12, // Long smooth cycle
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>`,
        },
        {
          title: 'Responsive Layout and Components',
          text: "All layouts were refactored using Tailwind's responsive utilities. Grids and spacing scale smoothly from mobile to desktop, ensuring good readability and structure on all screen sizes.",
          image: '/projects/shortleap/shortleap-responsive.webp',
          code: `// Responsive grid layout using Tailwind breakpoints
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 p-3 sm:p-4 bg-muted-foreground/5">
  {features.map((feature, index) => (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 20 }} // Initial hidden state
      whileInView={{ opacity: 1, y: 0 }} // Fade + slide in when in view
      transition={{
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
        delay: index * 0.1, // Staggered animation per card
      }}
      viewport={{ once: true, amount: 0.2 }} // Only animate once when 20% in view
    >
    </motion.div>
  ))}
</section>`,
        },
      ],
    },
  },

  solution:
    'With these visual and interaction improvements, Shortleap now feels more complete — both in terms of functionality and user experience. This update demonstrates my ability to revisit existing codebases and enhance them through UI thinking, design systems, and smooth technical implementation without breaking what already works.',
};
