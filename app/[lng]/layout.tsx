import AosInit from '@/components/AosInit';
import React from 'react';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AosInit />
      {children}
    </>
  );
}
