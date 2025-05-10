'use client';

import { useEffect, useState } from 'react';
import { SunflowerIcon } from '@/components/icons/sunflower-icon'; // Using sunflower as a petal substitute for now

const NUM_PETALS = 15;

export function FloatingPetals() {
  const [petals, setPetals] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  useEffect(() => {
    const generatePetals = () => {
      const newPetals = Array.from({ length: NUM_PETALS }).map((_, i) => {
        const duration = Math.random() * 5 + 5; // 5-10 seconds
        const delay = Math.random() * 5; // 0-5 seconds delay
        const xStart = Math.random() * 100; // vw
        const size = Math.random() * 15 + 10; // 10-25px
        return {
          id: i,
          style: {
            position: 'absolute' as const,
            left: `${xStart}vw`,
            top: `${Math.random() * -20 - 10}vh`, // Start above screen
            width: `${size}px`,
            height: `${size}px`,
            animation: `floatPetal ${duration}s linear ${delay}s infinite`,
            zIndex: -1, // Behind content
            color: `hsla(45, 100%, 70%, ${Math.random() * 0.5 + 0.3})`, // Varying opacity sunflower yellow
          },
        };
      });
      setPetals(newPetals);
    };
    generatePetals();
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden h-screen w-screen z-0">
      {petals.map(petal => (
          <SunflowerIcon key={petal.id} style={petal.style} className="opacity-50" />
      ))}
    </div>
  );
}
