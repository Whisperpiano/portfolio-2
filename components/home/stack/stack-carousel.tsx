import { Marquee } from '@/components/magicui/marquee';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { STACK } from '@/lib/data/tech-stack';
import StackIcon from './stack-icon';

export default function StackCarousel() {
  return (
    <Card className="bg-muted-foreground/3 group hover:border-muted-foreground/50 hover:bg-muted-foreground/5 col-span-12 h-full cursor-none gap-0 rounded-3xl px-0 py-0 transition-colors">
      <CardHeader>
        <h2 className="text-muted-foreground/50 group-hover:text-muted-foreground/75 pt-6 pb-3 font-medium tracking-widest uppercase transition-colors">
          Tech stack
        </h2>
      </CardHeader>
      <CardContent className="relative flex h-full flex-col justify-between mask-r-from-70% mask-r-to-100% mask-l-from-70% mask-l-to-100%">
        <Marquee pauseOnHover className="mb-6 [--duration:60s]">
          {STACK.map((stack) => (
            <StackIcon key={stack.name} stack={stack} />
          ))}
        </Marquee>
      </CardContent>
    </Card>
  );
}
