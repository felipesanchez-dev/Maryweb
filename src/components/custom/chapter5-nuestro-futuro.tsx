import Image from 'next/image';
import { PageSectionWrapper } from './page-section-wrapper';
import { Button } from '@/components/ui/button';
import { Home, TreePine, RefreshCw } from 'lucide-react'; // TreePine for 'árbol de guayaba' concept
import { SunflowerIcon } from '../icons/sunflower-icon';

interface Chapter5FutureProps {
  onReadAgain: () => void;
}

export function Chapter5NuestroFuturo({ onReadAgain }: Chapter5FutureProps) {
  return (
    <PageSectionWrapper className="bg-gradient-to-b from-yellow-50 to-background" containerClassName="max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-dancing-script text-primary-foreground mb-4">Capítulo 5: Nuestro Futuro Soñado</h2>
        <div className="flex justify-center items-center space-x-3">
            <Home className="w-12 h-12 text-green-500" />
            <SunflowerIcon className="w-16 h-16 text-accent" />
            <TreePine className="w-12 h-12 text-green-700" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 relative aspect-video md:aspect-auto md:h-[400px] rounded-lg overflow-hidden shadow-xl group">
            <Image
                src="https://picsum.photos/seed/dreamHouseGarden/800/600"
                alt="Casa con jardín soñada"
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-500 group-hover:scale-105"
                data-ai-hint="dream house garden sunset"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                <p className="text-white text-2xl font-dancing-script">Donde los sueños florecen...</p>
            </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <p className="font-quicksand text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-6">
            “Una casa con jardín, tulipanes acariciando la brisa, girasoles sonriendo al sol, y un árbol de guayaba cargado de dulces promesas... 
            Ese es el lienzo de nuestro futuro, pintado con los colores del amor, la complicidad y la alegría compartida.
            Un hogar donde cada rincón cuente una historia, y cada amanecer sea una nueva página de este cuento sin fin.”
          </p>
          <Button onClick={onReadAgain} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 rounded-full shadow-md transition-transform hover:scale-105 group">
            <RefreshCw className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
            Leer Otra Vez
          </Button>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="font-dancing-script text-3xl text-muted-foreground">
            Y vivieron felices, escribiendo su historia cada día...
        </p>
        <div className="flex justify-center space-x-4 mt-4">
            <SunflowerIcon className="w-8 h-8 text-accent animate-spin-slow opacity-70" />
            <SunflowerIcon className="w-10 h-10 text-accent animate-spin-slow-reverse" />
            <SunflowerIcon className="w-8 h-8 text-accent animate-spin-slow opacity-70" />
        </div>
      </div>
       <style jsx>{`
        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
      `}</style>
    </PageSectionWrapper>
  );
}
