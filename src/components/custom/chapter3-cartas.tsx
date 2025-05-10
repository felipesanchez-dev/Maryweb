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
    content: `Pipe, desde aquel 21 de diciembre, mi mundo cambió para siempre. Tu forma de mirarme, de entenderme y de estar ahí incluso cuando no sabía cómo pedirlo, me enseñó que el amor verdadero sí existe. Fuiste luz en mis días grises, compañía en mis batallas, y alegría en mis victorias. Gracias por creer en mí, por estar en cada paso de este viaje, y por soñar conmigo en grande. Te amo con todo mi corazón, y no hay un solo día en que no me sienta afortunada de tenerte.`,
    from: 'Mariana',
  },
  {
    title: 'Mi querida Mariana',
    content: `Mariana, no llegaste por casualidad; fuiste el regalo más bonito que la vida me dio. Me enamoré de tu esencia, de tu lucha, de tu forma de amar sin medidas. Aunque no siempre pensamos igual, aprendí que el amor real no busca moldear, sino acompañar. Gracias por pintar mi mundo con tulipanes y girasoles, por ser mi hogar, mi calma, y la mujer con la que quiero formar una familia. Te amo profundamente, y cada día contigo es el mejor capítulo de mi historia.`,
    from: 'Pipe',
  },
  {
    title: 'Un secreto entre nosotros',
    content: `Recuerdo cuando todo comenzó… no sabíamos hasta dónde llegaríamos, pero algo dentro de nosotros decía que valdría la pena. Entre mensajes, peleas, risas y reconciliaciones, fuimos construyendo algo más fuerte que el tiempo. Hoy, después de todo lo vivido, sé que no cambiaría nada. Incluso en los días difíciles, te elegiría mil veces más. Este amor, aunque imperfecto, es nuestro. Y eso lo hace eterno.`,
    from: 'Ambos',
  },
];


export function Chapter3Cartas() {
  return (
    <PageSectionWrapper className="bg-gradient-to-b from-purple-100 to-pink-100" containerClassName="max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-dancing-script text-primary-foreground mb-4">Capítulo 2: Cartas desde mi Corazón</h2>
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
