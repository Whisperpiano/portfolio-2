'use client';

import { Share } from 'lucide-react';
import { PROJECTS } from '@/lib/data/projects';
import { toast } from 'sonner';

export const ShareButton = ({
  project,
}: {
  project: (typeof PROJECTS)[number];
}) => {
  const handleShare = async () => {
    if (!navigator.share) {
      toast('Sharing is not supported in this browser.');
      return;
    }

    try {
      await navigator.share({
        title: project.title,
        text: `Check out this project: ${project.title}`,
        url: window.location.href,
      });
    } catch (error) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'name' in error &&
        error.name !== 'AbortError'
      ) {
        console.error('Error sharing:', error);
        toast('Something went wrong while trying to share.');
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="group hover:border-muted-foreground/50 relative inline-flex aspect-square cursor-pointer overflow-hidden rounded-full border p-3 transition-colors"
    >
      <div className="bg-primary/10 absolute inset-0 scale-0 rounded-full transition-transform duration-500 group-hover:scale-100" />

      <Share
        size={20}
        className="text-muted-foreground/75 transition-transform duration-200 group-hover:translate-x-20 group-hover:-translate-y-20"
      />

      <Share
        size={20}
        className="text-primary absolute -translate-x-20 translate-y-20 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0"
      />
    </button>
  );
};
