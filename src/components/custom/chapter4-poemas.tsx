'use client';

import { PageSectionWrapper } from './page-section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Edit3 } from 'lucide-react';
import { StarIcon } from '../icons/star-icon';

const lovePoems = [
  {
    title: 'Poema 1: Eres Tú',
    content: `Eres tú la luz de mi mañana,\nla paz que en mi alma habita,\nel susurro que calma el viento,\ny la risa que mi día invita.`,
  },
  {
    title: 'Poema 2: Nuestro Amor',
    content: `Camino contigo sin miedo,\nbajo cielos de eternidad,\nmi mano en la tuya es promesa,\nde un amor que siempre será.`,
  },
  {
    title: 'Poema 3: Contigo',
    content: `Contigo aprendí a soñar despierto,\na ver la vida con otra ilusión,\ntu voz es mi más dulce verso,\ntu abrazo, mi bendición.`,
  },
];

export function Chapter4Poemas() {
  return (
    <PageSectionWrapper className="bg-gradient-to-b from-pink-100 to-yellow-50" containerClassName="max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-dancing-script text-primary-foreground mb-4">Capítulo 3: Poemas Para Ti</h2>
        <Edit3 className="w-16 h-16 text-muted-foreground mx-auto" />
      </div>

      {lovePoems.map((poem, index) => (
        <Card key={index} className="shadow-lg bg-card/80 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle className="font-quicksand text-2xl text-accent-foreground">{poem.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-line font-quicksand text-primary-foreground leading-relaxed">
              {poem.content}
            </p>
          </CardContent>
        </Card>
      ))}

      <div className="text-center mt-12 flex justify-center space-x-2">
        <StarIcon className="w-6 h-6 text-accent opacity-50" />
        <StarIcon className="w-8 h-8 text-accent opacity-70" />
        <StarIcon className="w-6 h-6 text-accent opacity-50" />
      </div>
    </PageSectionWrapper>
  );
}
