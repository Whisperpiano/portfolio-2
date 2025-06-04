import { X } from 'lucide-react';
import { GALLERY_IMAGES } from '@/lib/data/gallery';
import { Metadata } from 'next';

import Link from 'next/link';
import AboutCard from '@/components/about/about-card';
import GallerySlider from '@/components/about/gallery-slider';
import ExperienceCard from '@/components/about/experience/experience-card';
import InterestGrid from '@/components/about/interests/interest-grid';
import QuoteCard from '@/components/about/quote-card';
import IconButton from '@/components/shared/icon-button';

export const metadata: Metadata = {
  title: 'About | Whisperpiano',
  description: 'About me',
};

export default function About() {
  return (
    <main className="h-full min-h-dvh p-0 sm:p-4">
      <section className="min-h-[calc(100vh-32px)] rounded-3xl border-0 sm:border-2">
        <div className="flex items-center justify-center py-8 sm:py-12 lg:py-20">
          <Link href="/" className="cursor-none">
            <IconButton icon={X} />
          </Link>
        </div>

        <section className="mx-auto grid max-w-5xl grid-cols-1 gap-4 p-4 lg:grid-cols-2">
          {/* About */}
          <AboutCard />

          {/* Gallery */}

          <GallerySlider images={GALLERY_IMAGES} />

          {/* Experience */}

          <ExperienceCard />

          {/* Interests */}
          <InterestGrid />

          {/* Quote */}
          <QuoteCard />

          <div className="col-span-1 flex flex-col gap-4"></div>
        </section>
      </section>
    </main>
  );
}
