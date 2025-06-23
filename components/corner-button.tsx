import { ArrowUpRight } from 'lucide-react';

export default function CornerButton() {
  return (
    <div className="absolute right-6 bottom-6 z-20">
      <div className="group-hover:border-muted-foreground/50 relative inline-flex aspect-square overflow-hidden rounded-full border p-3 transition-colors">
        <div className="bg-primary/10 absolute inset-0 scale-0 rounded-full transition-transform duration-500 group-hover:scale-100" />
        <ArrowUpRight
          size={20}
          className="text-muted-foreground/75 transition-transform duration-200 group-hover:translate-x-20 group-hover:-translate-y-20"
        />
        <ArrowUpRight
          size={20}
          className="text-primary absolute -translate-x-20 translate-y-20 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0"
        />
      </div>
    </div>
  );
}
