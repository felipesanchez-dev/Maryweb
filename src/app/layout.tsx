import type { Metadata } from 'next';
import { Dancing_Script, Quicksand } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  weight: ['400', '700'],
});

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Nuestro cuento de amor',
  description: 'Una página web interactiva celebrando la historia de Pipe & Mariana.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" style={{ scrollBehavior: 'smooth' }}>
      <body
        className={cn(
          dancingScript.variable,
          quicksand.variable,
          'font-quicksand antialiased'
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
