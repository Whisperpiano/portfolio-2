import { Card, CardContent, CardHeader } from '../ui/card';

export default function AboutCard() {
  return (
    <Card className="bg-muted-foreground/3 group hover:border-muted-foreground/50 hover:bg-muted-foreground/5 col-span-1 h-full gap-0 rounded-3xl px-0 py-0 transition-colors">
      <CardHeader>
        <h2 className="text-muted-foreground/50 group-hover:text-muted-foreground/75 pt-6 pb-3 font-medium tracking-widest uppercase transition-colors">
          About
        </h2>
      </CardHeader>
      <CardContent className="relative flex h-full flex-col justify-between gap-4 pb-6">
        <p className="text-muted-foreground">
          I&apos;m Jesús Alberola Herrero, a passionate musician and programmer
          from Spain. From a young age, my two great loves have been music and
          technology.
        </p>

        <p className="text-muted-foreground">
          In 2019, after a decade of intensive studies at the Villena
          Professional Conservatory of Music, I graduated as a piano teacher and
          music composer. That was when I decided to embark on a new adventure
          and moved to picturesque Norway. Currently, I have the honor of being
          a piano teacher at Sandnes Kulturskole, where I enjoy sharing my love
          for music with young talents.
        </p>

        <p className="text-muted-foreground">
          But... there was always an additional spark in my life: programming.
          Since childhood, I have been fascinated by video games and computers,
          and that interest never disappeared. So, in 2023, I decided to make an
          exciting career shift and started studying front-end development to
          fulfill that latent passion.
        </p>
      </CardContent>
    </Card>
  );
}
