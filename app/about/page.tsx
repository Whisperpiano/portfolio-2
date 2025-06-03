import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { X } from 'lucide-react';
import Link from 'next/link';
import Carousel from '@/components/about/carousel';

const EXPERIENCE = [
  {
    name: 'Front-end Developer',
    company: 'Plantasjen',
    date: 'Summer 2024',
    description:
      'During a two-month internship at Plantasjen, recommended by a professor, I worked closely with two developers to redesign and launch the company’s new website.',
  },
  {
    name: 'Piano teacher',
    company: 'Sandnes Kulturskole',
    date: '2021 - Present',
    description:
      'Responsible for teaching piano performance, music theory, and harmony to students ranging from young beginners to advanced pianists.',
  },
];

const CAROUSEL_IMAGES = [
  '/gallery/1.webp',
  '/gallery/2.webp',
  '/gallery/3.webp',
  '/gallery/4.webp',
];

const INTERESTS = [
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

export default function About() {
  return (
    <main className="h-full max-h-dvh p-4">
      <section className="min-h-dvh rounded-3xl border-2">
        <div className="flex items-center justify-center py-20">
          <Link
            href="/"
            className="group hover:border-muted-foreground/50 relative inline-flex aspect-square overflow-hidden rounded-full border p-3 transition-colors"
          >
            <div className="bg-primary/10 absolute inset-0 scale-0 rounded-full transition-transform duration-500 group-hover:scale-100" />
            <X
              size={20}
              className="text-muted-foreground/75 transition-transform duration-200 group-hover:translate-x-20 group-hover:-translate-y-20"
            />
            <X
              size={20}
              className="text-primary absolute -translate-x-20 translate-y-20 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0"
            />
          </Link>
        </div>

        <section className="mx-auto grid max-w-5xl grid-cols-2 gap-4">
          <Card className="bg-muted-foreground/3 group hover:border-muted-foreground/50 hover:bg-muted-foreground/5 col-span-1 h-full gap-0 rounded-3xl px-0 py-0 transition-colors">
            <CardHeader>
              <h2 className="text-muted-foreground/50 group-hover:text-muted-foreground/75 pt-6 pb-3 font-medium tracking-widest uppercase transition-colors">
                About
              </h2>
            </CardHeader>
            <CardContent className="relative flex h-full flex-col justify-between gap-4 pb-6">
              <p className="text-muted-foreground">
                I&apos;m Jesús Alberola Herrero, a passionate musician and
                programmer from Spain. From a young age, my two great loves have
                been music and technology.
              </p>

              <p className="text-muted-foreground">
                In 2019, after a decade of intensive studies at the Villena
                Professional Conservatory of Music, I graduated as a piano
                teacher and music composer. That was when I decided to embark on
                a new adventure and moved to picturesque Norway. Currently, I
                have the honor of being a piano teacher at Sandnes Kulturskole,
                where I enjoy sharing my love for music with young talents.
              </p>

              <p className="text-muted-foreground">
                But... there was always an additional spark in my life:
                programming. Since childhood, I have been fascinated by video
                games and computers, and that interest never disappeared. So, in
                2023, I decided to make an exciting career shift and started
                studying front-end development to fulfill that latent passion.
              </p>
            </CardContent>
          </Card>

          {/* Carousel */}

          <Card className="col-span-1 rounded-3xl bg-transparent p-0">
            <Carousel images={CAROUSEL_IMAGES} />
          </Card>

          {/* experience */}

          <Card className="bg-muted-foreground/3 group hover:border-muted-foreground/50 hover:bg-muted-foreground/8 col-span-1 h-full cursor-pointer gap-0 rounded-3xl px-0 py-0 transition-colors">
            <CardHeader>
              <h2 className="text-muted-foreground/50 group-hover:text-muted-foreground/75 pt-6 pb-3 font-medium tracking-widest transition-colors">
                EXPERIENCE
              </h2>
            </CardHeader>
            <CardContent className="flex h-full flex-col justify-between">
              <ol className="border-muted-foreground/20 relative mb-6 space-y-10 border-l px-6 pl-6">
                {EXPERIENCE.map((experience) => (
                  <li key={experience.name} className="group/item mb-6 ml-2">
                    <div className="bg-muted group-hover/item:bg-primary absolute -left-[6.5px] mt-2 h-3 w-3 rounded-full transition-colors"></div>

                    <div className="flex items-center justify-between">
                      <h3 className="text-muted-foreground group-hover/item:text-primary mb-1 text-base font-medium uppercase transition-all duration-300 group-hover/item:translate-x-1">
                        {experience.name}
                      </h3>
                      <time className="text-muted-foreground/75 mb-1 block text-sm font-normal">
                        {experience.date}
                      </time>
                    </div>

                    <p className="text-muted-foreground/75 text-base tracking-wider uppercase">
                      {experience.company}
                    </p>
                    {experience.description && (
                      <p className="text-muted-foreground/75 mt-2 text-sm font-normal">
                        {experience.description}
                      </p>
                    )}
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {/* things I enjoy */}
          <Card className="bg-muted-foreground/3 col-span-1 gap-0 rounded-3xl px-0 py-0">
            <CardHeader>
              <h2 className="text-muted-foreground/50 group-hover:text-muted-foreground/75 pt-6 pb-3 font-medium tracking-widest uppercase transition-colors">
                Things I enjoy
              </h2>
            </CardHeader>
            <CardContent className="grid h-full grid-cols-2 gap-4 pb-6">
              {INTERESTS.map((item) => (
                <div
                  key={item.title}
                  className={`group relative h-full cursor-pointer rounded-3xl border transition-all duration-300 hover:border-transparent ${item.color} flex flex-col items-center justify-center overflow-hidden py-6`}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="flex flex-col items-center transition-opacity duration-300 group-hover:opacity-0">
                    <span className="mb-2 text-4xl">{item.emoji}</span>
                    <h3 className="text-muted-foreground text-sm font-medium">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-primary absolute px-4 text-center text-sm opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {item.description}
                  </p>
                  <div className="absolute -right-1 -bottom-1 h-12 w-12 rounded-full bg-white/5 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* quote */}
          <Card className="bg-muted-foreground/3 group hover:border-muted-foreground/50 hover:bg-muted-foreground/8 col-span-2 gap-0 rounded-3xl px-0 py-0 transition-colors">
            <CardContent className="flex h-full flex-col justify-between">
              <div className="flex flex-col items-center px-8 pt-8 text-center">
                <blockquote className="text-muted-foreground/90 mb-8 text-xl leading-relaxed italic">
                  &quot;Talk is cheap. Show me the code.&quot;
                </blockquote>
              </div>
            </CardContent>
          </Card>

          <div className="col-span-1 flex flex-col gap-4"></div>
        </section>
      </section>
    </main>
  );
}
