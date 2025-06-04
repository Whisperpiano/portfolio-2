import type { InterestItem } from '@/lib/data/interests';

export default function InterestCard({ item }: { item: InterestItem }) {
  return (
    <div
      key={item.title}
      className={`group relative h-full cursor-none rounded-3xl border transition-all duration-300 hover:border-transparent ${item.color} flex flex-col items-center justify-center overflow-hidden py-6`}
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
  );
}
