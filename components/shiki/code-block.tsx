'use server';
import { BundledLanguage } from 'shiki';
import { codeToHtml } from 'shiki';
import { cn } from '@/lib/utils';

interface Props {
  children: string;
  lang: BundledLanguage;
  className?: string;
}

export async function CodeBlock(props: Props) {
  const out = await codeToHtml(props.children, {
    lang: props.lang,
    theme: 'houston',
  });

  return (
    <div
      className={cn(
        'my-4 overflow-hidden rounded-lg bg-[#17191e] shadow-lg',
        props.className,
      )}
    >
      <div
        className="no-scrollbar overflow-x-auto p-4 text-sm"
        dangerouslySetInnerHTML={{ __html: out }}
      />
    </div>
  );
}
