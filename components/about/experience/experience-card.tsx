import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { EXPERIENCE } from '@/lib/data/experience';
import ExperienceItem from './experience-item';

export default function ExperienceCard() {
  return (
    <Card className="bg-muted-foreground/3 group hover:border-muted-foreground/50 hover:bg-muted-foreground/8 col-span-1 h-full cursor-none gap-0 rounded-3xl px-0 py-0 transition-colors">
      <CardHeader>
        <h2 className="text-muted-foreground/50 group-hover:text-muted-foreground/75 pt-6 pb-3 font-medium tracking-widest transition-colors">
          EXPERIENCE
        </h2>
      </CardHeader>
      <CardContent className="flex h-full flex-col justify-between">
        <ol className="border-muted-foreground/20 relative mb-6 space-y-10 border-l px-6 pl-6">
          {EXPERIENCE.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
