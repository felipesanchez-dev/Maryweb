'use client';

import { PageSectionWrapper } from './page-section-wrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Mail, Heart } from 'lucide-react';
import { SunflowerIcon } from '../icons/sunflower-icon';

const letters = [
  {
    title: 'Para ti, mi amor Pipe',
    content: `Pipe, cada día a tu lado es un regalo. Tu sonrisa ilumina mis mañanas y tu abrazo es mi refugio. Gracias por ser mi compañero, mi confidente y el amor de mi vida. Eres mi sol en días nublados y la melodía de mi corazón. Te amo más de lo que las palabras pueden expresar.`,
    from: 'Mariana',
  },
  {
    title: 'Mi querida Mariana',
    content: `Mariana, llegaste a mi vida para llenarla de colores y alegría. Tu ternura, tu fuerza y tu forma de ver el mundo me inspiran cada día. Contigo he aprendido el verdadero significado del amor. Sueño con un futuro lleno de aventuras a tu lado. Eres mi girasol, siempre buscando la luz. Te amo infinitamente.`,
    from: 'Pipe',
  },
  {
    title: 'Un secreto entre nosotros',
    content: `Recuerdo aquella tarde lluviosa, cuando compartimos nuestros miedos más profundos y nuestros sueños más locos. Ese día, supe que nuestra conexión era única. Gracias por abrirme tu corazón y permitirme ser parte de tu vida. Cada momento contigo es un tesoro.`,
    from: 'Ambos',
  },
];

export function Chapter3Cartas() {
  return (
    <PageSectionWrapper className="bg-gradient-to-b from-purple-100 to-pink-100" containerClassName="max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-dancing-script text-primary-foreground mb-4">Capítulo 3: Cartas desde mi Corazón</h2>
        <Mail className="w-16 h-16 text-accent mx-auto" />
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {letters.map((letter, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="bg-card/80 backdrop-blur-sm border-primary/30 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <AccordionTrigger className="p-6 text-xl font-quicksand font-semibold text-primary-foreground hover:no-underline">
              <div className="flex items-center">
                <Heart className="w-5 h-5 mr-3 text-pink-500" />
                {letter.title}
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0">
              <div className="border-l-2 border-accent pl-4">
                <p className="text-md font-quicksand text-primary-foreground/90 whitespace-pre-line leading-relaxed">
                  {letter.content}
                </p>
                <p className="text-right mt-4 font-dancing-script text-lg text-accent-foreground">
                  Con amor, {letter.from}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="text-center mt-12">
        <SunflowerIcon className="inline-block w-8 h-8 text-accent opacity-60 mx-1" />
        <SunflowerIcon className="inline-block w-10 h-10 text-accent opacity-80 mx-1" />
        <SunflowerIcon className="inline-block w-8 h-8 text-accent opacity-60 mx-1" />
      </div>
    </PageSectionWrapper>
  );
}
