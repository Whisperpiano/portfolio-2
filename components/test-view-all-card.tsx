import Link from 'next/link';
import { Card, CardContent } from './ui/card';
import { ArrowRight, LayoutGrid } from 'lucide-react';

export default function ViewAllCard() {
  return (
    <Link
      href="/works"
      className="group min-h-[400px] min-w-[280px] flex-1 cursor-pointer"
      prefetch
    >
      <Card className="from-muted/5 to-background hover:border-muted-foreground/50 h-full overflow-hidden bg-gradient-to-br via-transparent py-0 transition-all duration-300">
        <CardContent className="relative flex h-full flex-col items-center justify-center gap-6 p-6">
          <div className="absolute inset-0 -z-10 opacity-5">
            <div className="from-primary/20 absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] via-transparent to-transparent"></div>
          </div>

          <div className="bg-muted-foreground/5 absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

          <div className="border-muted-foreground/20 bg-background group-hover:border-primary/50 group-hover:shadow-primary/20 flex aspect-square items-center justify-center rounded-full border p-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
            <LayoutGrid
              size={40}
              className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
            />
          </div>

          <div className="z-20 mt-4 text-center transition-transform duration-300 group-hover:-translate-y-2">
            <h2 className="mb-2 text-2xl font-bold tracking-tight">
              Explore All Projects
            </h2>
            <p className="text-muted-foreground/75 max-w-[280px] text-sm">
              Discover my complete collection of works and creative solutions
            </p>
          </div>

          <div className="absolute right-6 bottom-6 z-20">
            <div className="group-hover:border-primary/50 relative inline-flex aspect-square overflow-hidden rounded-full border p-3 transition-all">
              <div className="bg-primary/10 absolute inset-0 scale-0 rounded-full transition-transform duration-500 group-hover:scale-100" />
              <ArrowRight
                size={20}
                className="text-muted-foreground/75 group-hover:text-primary transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
