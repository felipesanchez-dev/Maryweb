import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PageSectionWrapper } from './page-section-wrapper';
import { SunflowerIcon } from '../icons/sunflower-icon';
import { HeartIcon } from '../icons/heart-icon';

interface CoverPageProps {
  onStartReading: () => void;
}

export function CoverPage({ onStartReading }: CoverPageProps) {
  return (
    <PageSectionWrapper className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-yellow-100 relative text-center">
       <div className="absolute top-4 left-4 animate-pulse">
        <SunflowerIcon className="w-12 h-12 text-accent opacity-70" />
      </div>
      <div className="absolute bottom-4 right-4 animate-pulse">
        <SunflowerIcon className="w-12 h-12 text-accent opacity-70 transform rotate-90" />
      </div>
       <div className="absolute top-1/4 right-10 animate-ping opacity-30">
        <HeartIcon className="w-8 h-8 text-pink-300" />
      </div>
      <div className="absolute bottom-1/3 left-10 animate-ping opacity-30 delay-500">
        <HeartIcon className="w-6 h-6 text-pink-300" />
      </div>
      
      <Image
        src="https://picsum.photos/seed/fairytaleCouple/800/600"
        alt="Ilustración de Pipe y Mariana"
        width={400}
        height={300}
        className="rounded-xl shadow-2xl mb-8 object-cover"
        data-ai-hint="couple illustration fairytale"
      />
      <h1 className="text-6xl md:text-7xl font-dancing-script text-primary-foreground mb-4">
        Nuestro Cuento de Amor
      </h1>
      <p className="text-3xl md:text-4xl font-dancing-script text-primary-foreground/80 mb-10">
        Pipe & Mariana
      </p>
      <Button onClick={onStartReading} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
        Comenzar a Leer
        <HeartIcon className="ml-3 h-5 w-5" />
      </Button>
      <div className="absolute bottom-10 text-muted-foreground animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
      </div>
    </PageSectionWrapper>
  );
}
