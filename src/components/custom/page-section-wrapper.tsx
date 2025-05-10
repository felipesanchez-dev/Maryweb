import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface PageSectionWrapperProps extends PropsWithChildren {
  className?: string;
  containerClassName?: string;
}

export function PageSectionWrapper({ children, className, containerClassName }: PageSectionWrapperProps) {
  return (
    <div className={cn('w-full py-12 md:py-20 lg:py-28 relative overflow-hidden', className)}>
      <div className={cn('container mx-auto px-4 md:px-6', containerClassName)}>
        {children}
      </div>
    </div>
  );
}
