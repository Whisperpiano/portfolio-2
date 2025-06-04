export const EXPERIENCE = [
  {
    id: 1,
    name: 'Front-end Developer',
    company: 'Plantasjen',
    date: 'Summer 2024',
    description:
      'During a two-month internship at Plantasjen, recommended by a professor, I worked closely with two developers to redesign and launch the company’s new website.',
  },
  {
    id: 2,
    name: 'Piano teacher',
    company: 'Sandnes Kulturskole',
    date: '2021 - Present',
    description:
      'Responsible for teaching piano performance, music theory, and harmony to students ranging from young beginners to advanced pianists.',
  },
];

export type ExperienceItem = (typeof EXPERIENCE)[number];
