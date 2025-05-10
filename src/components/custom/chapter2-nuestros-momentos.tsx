'use client';

import Image from 'next/image';
import { PageSectionWrapper } from './page-section-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { HeartIcon } from '../icons/heart-icon';
import { SunflowerIcon } from '../icons/sunflower-icon';

const moments = [
  {
    src: 'https://picsum.photos/seed/moment1/600/400',
    caption: 'Aquel viaje inolvidable.',
    aiHint: 'couple travel',
  },
  {
    src: 'https://picsum.photos/seed/moment2/600/400',
    caption: 'Celebrando nuestros sueños.',
    aiHint: 'couple celebration',
  },
  {
    src: 'https://picsum.photos/seed/moment3/600/400',
    caption: 'Risas bajo el atardecer.',
    aiHint: 'couple sunset',
  },
  {
    src: 'https://picsum.photos/seed/moment4/600/400',
    caption: 'Simplemente nosotros.',
    aiHint: 'couple candid',
  },
  {
    src: 'https://picsum.photos/seed/moment5/600/400',
    caption: 'Aventuras y complicidad.',
    aiHint: 'couple adventure',
  },
];

export function Chapter2NuestrosMomentos() {
  return (
    <PageSectionWrapper className="bg-gradient-to-b from-green-100 to-purple-100" containerClassName="max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-dancing-script text-primary-foreground mb-4">Capítulo 2: Nuestros Momentos</h2>
        <HeartIcon className="w-16 h-16 text-pink-400 mx-auto" />
      </div>

      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {moments.map((moment, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden shadow-lg group border-2 border-accent/50 hover:border-accent transition-all duration-300">
                  <CardContent className="flex aspect-[3/2] items-center justify-center p-0 relative">
                    <Image
                      src={moment.src}
                      alt={moment.caption}
                      layout="fill"
                      objectFit="cover"
                      className="transform transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={moment.aiHint}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300 flex flex-col items-center justify-end p-4 text-center">
                      <p className="text-white font-quicksand font-semibold text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                        {moment.caption}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-accent-foreground bg-accent/70 hover:bg-accent disabled:bg-muted disabled:text-muted-foreground -left-4 md:-left-12 h-10 w-10">
          <HeartIcon className="w-5 h-5 transform rotate-180" />
        </CarouselPrevious>
        <CarouselNext className="text-accent-foreground bg-accent/70 hover:bg-accent disabled:bg-muted disabled:text-muted-foreground -right-4 md:-right-12 h-10 w-10">
           <HeartIcon className="w-5 h-5" />
        </CarouselNext>
      </Carousel>
      <div className="flex justify-center mt-8">
        <SunflowerIcon className="w-10 h-10 text-accent opacity-70 mx-2" />
        <SunflowerIcon className="w-12 h-12 text-accent opacity-90 mx-2" />
        <SunflowerIcon className="w-10 h-10 text-accent opacity-70 mx-2" />
      </div>
    </PageSectionWrapper>
  );
}
