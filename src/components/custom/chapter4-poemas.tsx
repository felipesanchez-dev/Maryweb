'use client';

import { useState } from 'react';
import { PageSectionWrapper } from './page-section-wrapper';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2, Edit3 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { suggestPoemType, type SuggestPoemTypeOutput } from '@/ai/flows/poem-selection';
import { StarIcon } from '../icons/star-icon';


export function Chapter4Poemas() {
  const [sentiment, setSentiment] = useState('');
  const [poemSuggestion, setPoemSuggestion] = useState<SuggestPoemTypeOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sentiment.trim()) {
      toast({
        title: 'Sentimiento vacío',
        description: 'Por favor, describe tus sentimientos para sugerirte un tipo de poema.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    setPoemSuggestion(null);

    try {
      const result = await suggestPoemType({ sentiment });
      setPoemSuggestion(result);
      toast({
        title: '¡Sugerencia Lista!',
        description: `Un poema ${result.poemType.toLowerCase()} sería ideal.`,
      });
    } catch (error) {
      console.error('Error suggesting poem type:', error);
      toast({
        title: 'Error',
        description: 'No se pudo obtener la sugerencia. Inténtalo de nuevo.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageSectionWrapper className="bg-gradient-to-b from-pink-100 to-yellow-50" containerClassName="max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-dancing-script text-primary-foreground mb-4">Capítulo 4: Poemas Para Ti</h2>
        <Edit3 className="w-16 h-16 text-muted-foreground mx-auto" />
      </div>

      <Card className="shadow-lg bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-quicksand text-2xl text-primary-foreground">Inspiración Poética</CardTitle>
          <CardDescription className="text-muted-foreground">
            Describe lo que sientes, y te ayudaré a encontrar el tipo de poema perfecto para expresarlo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="sentiment" className="font-quicksand text-lg text-primary-foreground">
                ¿Qué sientes hoy por esa persona especial?
              </Label>
              <Textarea
                id="sentiment"
                value={sentiment}
                onChange={(e) => setSentiment(e.target.value)}
                placeholder="Ej: 'Siento una alegría inmensa y un amor profundo cada vez que veo su sonrisa...'"
                rows={4}
                className="mt-2 bg-background/70 focus:bg-background text-primary-foreground placeholder:text-muted-foreground/80"
              />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-4 w-4" />
              )}
              Sugerir Tipo de Poema
            </Button>
          </form>
        </CardContent>
        {poemSuggestion && (
          <CardFooter className="flex flex-col items-start space-y-2 pt-4 border-t border-border">
            <h3 className="text-xl font-dancing-script text-accent-foreground">Sugerencia:</h3>
            <p className="font-quicksand text-primary-foreground">
              <strong className="text-accent-foreground">Tipo de Poema:</strong> {poemSuggestion.poemType}
            </p>
            <p className="font-quicksand text-primary-foreground">
              <strong className="text-accent-foreground">Razón:</strong> {poemSuggestion.reason}
            </p>
            <div className="w-full text-center mt-4">
              <p className="font-dancing-script text-2xl text-muted-foreground italic">
                "... Y así, las palabras se visten de emoción ..."
              </p>
            </div>
          </CardFooter>
        )}
      </Card>
      <div className="text-center mt-12 flex justify-center space-x-2">
        <StarIcon className="w-6 h-6 text-accent opacity-50" />
        <StarIcon className="w-8 h-8 text-accent opacity-70" />
        <StarIcon className="w-6 h-6 text-accent opacity-50" />
      </div>
    </PageSectionWrapper>
  );
}
