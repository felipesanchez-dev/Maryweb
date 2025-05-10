'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { HeartIcon } from '@/components/icons/heart-icon';
import { SunflowerIcon } from '@/components/icons/sunflower-icon';

interface SymbolicLoginProps {
  onLoginSuccess: () => void;
}

export function SymbolicLogin({ onLoginSuccess }: SymbolicLoginProps) {
  const [answer, setAnswer] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim() === '21') {
      toast({
        title: '¡Correcto!',
        description: 'Nuestra historia continúa...',
      });
      onLoginSuccess();
    } else {
      toast({
        title: 'Respuesta incorrecta',
        description: 'Intenta recordar ese día especial...',
        variant: 'destructive',
      });
      setAnswer('');
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 relative bg-gradient-to-br from-yellow-200 via-yellow-50 to-green-100">
      <Image
        src="https://picsum.photos/seed/sunflowerfield/1920/1080"
        alt="Campo de girasoles"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-40"
        data-ai-hint="sunflower field"
      />
      <div className="absolute inset-0 bg-background/30 backdrop-blur-sm z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center mb-8">
        <SunflowerIcon className="w-24 h-24 text-accent mb-4" />
        <h1 className="text-5xl font-dancing-script text-primary-foreground drop-shadow-md">Eternal Bloom</h1>
        <p className="text-xl text-primary-foreground/80 mt-2 font-quicksand">Pipe & Mariana</p>
      </div>

      <Card className="w-full max-w-md z-10 shadow-2xl bg-card/90 backdrop-blur-md">
        <CardHeader className="text-center">
          <CardTitle className="font-dancing-script text-3xl text-primary-foreground">Inicio de Nuestra Historia</CardTitle>
          <CardDescription className="text-muted-foreground">
            Un pequeño acertijo para comenzar nuestro cuento.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="respuesta" className="text-lg font-quicksand font-medium text-primary-foreground">
                ¿Qué día comenzó nuestra historia?
              </Label>
              <Input
                id="respuesta"
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Ingresa el número del día"
                className="bg-background/80 focus:bg-background text-primary-foreground placeholder:text-muted-foreground"
                required
                autoFocus
              />
            </div>
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6">
              Desbloquear Recuerdo
              <HeartIcon className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
            <p className="text-xs text-muted-foreground">Solo el número del día es necesario.</p>
        </CardFooter>
      </Card>
    </div>
  );
}
