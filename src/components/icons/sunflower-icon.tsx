import type { SVGProps } from 'react';

export function SunflowerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="3" fill="hsl(var(--accent-foreground))" stroke="hsl(var(--accent-foreground))" />
      <path d="M12 2v2" stroke="hsl(var(--accent))" />
      <path d="M12 20v2" stroke="hsl(var(--accent))" />
      <path d="m4.93 4.93 1.41 1.41" stroke="hsl(var(--accent))" />
      <path d="m17.66 17.66 1.41 1.41" stroke="hsl(var(--accent))" />
      <path d="M2 12h2" stroke="hsl(var(--accent))" />
      <path d="M20 12h2" stroke="hsl(var(--accent))" />
      <path d="m4.93 19.07 1.41-1.41" stroke="hsl(var(--accent))" />
      <path d="m17.66 6.34 1.41-1.41" stroke="hsl(var(--accent))" />
      <path d="M12 5.5A6.5 6.5 0 0 0 5.5 12A6.5 6.5 0 0 0 12 18.5A6.5 6.5 0 0 0 18.5 12A6.5 6.5 0 0 0 12 5.5Z" fill="hsl(var(--accent))" opacity="0.3" stroke="none"/>
    </svg>
  );
}
