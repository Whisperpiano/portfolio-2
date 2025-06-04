import type { ExperienceItem } from '@/lib/data/experience';

export default function ExperienceItem({
  experience,
}: {
  experience: ExperienceItem;
}) {
  return (
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
  );
}
