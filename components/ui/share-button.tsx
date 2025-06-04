'use client';

import { Share } from 'lucide-react';
import { PROJECTS } from '@/lib/data/projects';
import { toast } from 'sonner';
import IconButton from '../shared/icon-button';

export const ShareButton = ({
  project,
}: {
  project: (typeof PROJECTS)[number];
}) => {
  const handleShare = async () => {
    if (!navigator.share) {
      navigator.clipboard.writeText(window.location.href);
      toast('Link copied to clipboard!');
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
    <button onClick={handleShare} className="cursor-none">
      <IconButton icon={Share} />
    </button>
  );
};
