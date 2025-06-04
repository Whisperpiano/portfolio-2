export const INTERESTS = [
  {
    emoji: '🎵',
    title: 'Music',
    description:
      'From classical piano to trance. Music helps me focus, breathe, and stay creative.',
    color: 'hover:bg-[#0077B575]',
  },
  {
    emoji: '🕹️',
    title: 'Videogames',
    description:
      'I enjoy rich narratives, clever mechanics, and the charm of RPGs and indie gems.',
    color: 'hover:bg-[#6A5AFFB0]',
  },
  {
    emoji: '✈️',
    title: 'Travel',
    description:
      'New places, languages, and cultures fuel my curiosity and creative energy.',
    color: 'hover:bg-[#FF9500B0]',
  },
  {
    emoji: '🍽️',
    title: 'Cook',
    description:
      'Cooking blends detail and soul. I love reimagining Spanish dishes and sharing them.',
    color: 'hover:bg-[#E1306CB0]',
  },
];

export type InterestItem = (typeof INTERESTS)[number];
