'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Card } from '../ui/card';

interface CarouselProps {
  images: string[];
}

export default function GallerySlider({ images }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <Card className="col-span-1 rounded-3xl bg-transparent p-0">
      <div className="relative h-full w-full overflow-hidden rounded-3xl">
        <div className="h-full w-full overflow-hidden" ref={emblaRef}>
          <div className="flex h-full touch-pan-y">
            {images.map((src, index) => (
              <div
                key={index}
                className="bg-muted-foreground/10 relative h-full min-h-[300px] flex-[0_0_100%]"
              >
                <Image
                  src={src}
                  alt={`Slide ${index}`}
                  fill
                  sizes="(min-width: 567px) 566px, 100vw"
                  priority={index === 0}
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/40 p-2 text-white transition hover:bg-black/70"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/40 p-2 text-white transition hover:bg-black/70"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}

        <div className="bg-background/20 absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-3xl p-2">
          <div className="flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 w-2 cursor-pointer rounded-full transition ${
                  selectedIndex === index
                    ? 'bg-primary'
                    : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
