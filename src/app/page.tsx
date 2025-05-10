'use client';

import { useState, useRef, useEffect } from 'react';
import { SymbolicLogin } from '@/components/custom/symbolic-login';
import { CoverPage } from '@/components/custom/cover-page';
import { Chapter1ElInicio } from '@/components/custom/chapter1-el-inicio';
import { Chapter3Cartas } from '@/components/custom/chapter3-cartas';
import { Chapter4Poemas } from '@/components/custom/chapter4-poemas';
import { Chapter5NuestroFuturo } from '@/components/custom/chapter5-nuestro-futuro';
import { FloatingPetals } from '@/components/custom/floating-petals';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const coverRef = useRef<HTMLDivElement>(null);
  const chapter1Ref = useRef<HTMLDivElement>(null);
  const chapter2Ref = useRef<HTMLDivElement>(null);
  const chapter3Ref = useRef<HTMLDivElement>(null);
  const chapter4Ref = useRef<HTMLDivElement>(null);
  const chapter5Ref = useRef<HTMLDivElement>(null);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    // Optionally scroll to cover after login
    // setTimeout(() => scrollToRef(coverRef), 100); 
  };

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollTop]);


  if (!isAuthenticated) {
    return <SymbolicLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <main className="flex flex-col items-center min-h-screen bg-background text-foreground font-quicksand relative">
      <FloatingPetals />
      
      <div ref={coverRef} id="cover" className="w-full">
        <CoverPage onStartReading={() => scrollToRef(chapter1Ref)} />
      </div>
      
      <section ref={chapter1Ref} id="chapter1" className="w-full scroll-mt-0 md:scroll-mt-16">
        <Chapter1ElInicio />
      </section>
      
      
      <section ref={chapter3Ref} id="chapter3" className="w-full scroll-mt-0 md:scroll-mt-16">
        <Chapter3Cartas />
      </section>
      
      <section ref={chapter4Ref} id="chapter4" className="w-full scroll-mt-0 md:scroll-mt-16">
        <Chapter4Poemas />
      </section>
      
      <section ref={chapter5Ref} id="chapter5" className="w-full scroll-mt-0 md:scroll-mt-16">
        <Chapter5NuestroFuturo onReadAgain={() => scrollToRef(coverRef)} />
      </section>
      {showScrollTop && (
        <Button
          onClick={() => scrollToRef(coverRef)}
          className="fixed bottom-8 right-8 z-50 rounded-full p-3 h-12 w-12 bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 transition-opacity"
          aria-label="Volver al inicio"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </main>
  );
}
