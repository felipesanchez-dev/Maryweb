import Image from 'next/image';
import { PageSectionWrapper } from './page-section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SunflowerIcon } from '../icons/sunflower-icon';

export function Chapter1ElInicio() {
  return (
    <PageSectionWrapper className="bg-gradient-to-b from-yellow-100 to-green-100" containerClassName="max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-dancing-script text-secondary-foreground mb-4">Capítulo 1: El Inicio</h2>
        <SunflowerIcon className="w-16 h-16 text-accent mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Card className="shadow-lg bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-quicksand text-2xl text-secondary-foreground">
              Donde todo comenzó
            </CardTitle>
          </CardHeader>
          <CardContent className="text-left space-y-4 text-secondary-foreground/90 font-quicksand text-lg">
            <p>
              Nos conocimos de una forma distinta, inesperada, tal vez por una simple coincidencia o quizás por algo escrito por el destino.
              No hubo fuegos artificiales ni películas de amor alrededor... pero sí hubo un “click” silencioso y mágico.
            </p>
            <p>
              Empezamos hablando sin saber hasta dónde llegaríamos. Poco a poco, tus palabras se volvieron refugio y tus silencios también.
              Con cada conversación, fuimos quitándonos capas, dejando que nuestras almas se rozaran sin miedo.
            </p>
            <p>
              No sabíamos que ese día iba a marcar el inicio de una historia que, sin quererlo, se volvió lo más importante de nuestras vidas.
              Desde ese momento, mi mundo se volvió un poco más cálido... como si ya supiera que tú ibas a ser mi hogar.
            </p>
            <p className="font-semibold text-accent-foreground italic">
              “Así empezó todo… con un mensaje, una mirada distinta y un latido nuevo.”
            </p>
          </CardContent>
        </Card>

        <div className="relative aspect-square md:aspect-auto md:h-full rounded-lg overflow-hidden shadow-xl group">
          <Image
            src="https://i.pinimg.com/736x/11/92/11/11921119c28f8279d9ffc802ec3e0aa9.jpg"
            alt="Escena del primer encuentro"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 group-hover:scale-110"
            data-ai-hint="couple first encounter"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
            <p className="text-white text-lg font-dancing-script">Un momento que lo cambió todo.</p>
          </div>
        </div>
      </div>
    </PageSectionWrapper>
  );
}
