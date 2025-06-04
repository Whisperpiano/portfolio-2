import { QUOTE } from '@/lib/data/quote';
import { Card, CardContent } from '../ui/card';

export default function QuoteCard() {
  return (
    <Card className="bg-muted-foreground/3 group hover:border-muted-foreground/50 hover:bg-muted-foreground/8 col-span-2 gap-0 rounded-3xl px-0 py-0 transition-colors">
      <CardContent className="flex h-full flex-col justify-between">
        <div className="flex flex-col items-center px-8 pt-8 text-center">
          <blockquote className="text-muted-foreground/90 mb-8 text-xl leading-relaxed italic">
            &quot;{QUOTE}&quot;
          </blockquote>
        </div>
      </CardContent>
    </Card>
  );
}
