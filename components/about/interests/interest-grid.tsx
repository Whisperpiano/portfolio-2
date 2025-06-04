import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { INTERESTS } from '@/lib/data/interests';
import InterestCard from './interest-card';

export default function InterestGrid() {
  return (
    <Card className="bg-muted-foreground/3 col-span-1 gap-0 rounded-3xl px-0 py-0">
      <CardHeader>
        <h2 className="text-muted-foreground/50 group-hover:text-muted-foreground/75 pt-6 pb-3 font-medium tracking-widest uppercase transition-colors">
          Things I enjoy
        </h2>
      </CardHeader>
      <CardContent className="grid h-full grid-cols-2 gap-4 pb-6">
        {INTERESTS.map((item) => (
          <InterestCard key={item.title} item={item} />
        ))}
      </CardContent>
    </Card>
  );
}
