'use client';
import React from 'react';

interface AosSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  effect?: string;
  delay?: number;
}

export function AosSection({ children, effect = 'fade-up', delay = 0, ...rest }: AosSectionProps) {
  return (
    <div data-aos={effect} data-aos-delay={delay} {...rest}>
      {children}
    </div>
  );
}
