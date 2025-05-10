import Image from 'next/image';
import { PageSectionWrapper } from './page-section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SunflowerIcon } from '../icons/sunflower-icon';

export function Chapter1ElInicio() {
  return (
    <PageSectionWrapper className="bg-gradient-to-b from-yellow-100 to-green-100" containerClassName="max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-dancing-script text-secondary-foreground mb-4">Capítulo 1: El Inicio</h2>
        <SunflowerIcon className="w-16 h-16 text-accent mx-auto"/>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Card className="shadow-lg bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-quicksand text-2xl text-secondary-foreground">El Comienzo de Todo</CardTitle>
          </CardHeader>
          <CardContent className="text-left space-y-4 text-secondary-foreground/90 font-quicksand text-lg">
            <p>
              Nuestra historia comenzó en un día inesperado, como suelen suceder las cosas más maravillosas.
              El sol brillaba de una manera especial, o quizás éramos nosotros quienes veíamos todo con otros ojos.
              Un cruce de miradas, una sonrisa tímida, y el universo conspiró para unir nuestros caminos.
            </p>
            <p>
              Desde ese instante, supimos que algo mágico estaba por comenzar. Las conversaciones se extendían por horas,
              descubriendo mundos compartidos y sueños por cumplir. Cada pequeño detalle se convertía en un recuerdo imborrable.
            </p>
            <p className="font-semibold text-accent-foreground italic">
              “Ese día empezó todo…” y el mundo se pintó de girasoles.
            </p>
          </CardContent>
        </Card>
        
        <div className="relative aspect-square  md:aspect-auto md:h-full rounded-lg overflow-hidden shadow-xl group">
            <Image
                src="https://picsum.photos/seed/firstEncounter/600/600"
                alt="Escena del primer encuentro"
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-500 group-hover:scale-110"
                data-ai-hint="couple first encounter"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
                <p className="text-white text-lg font-dancing-script">Un momento inolvidable.</p>
            </div>
        </div>
      </div>
    </PageSectionWrapper>
  );
}
