import React from 'react';
import {
  TypographyH1,
  TypographyP,
  TypographyH3,
  TypographyH4,
  TypographyLarge,
  TypographyMuted,
} from '@/components/ui/typography';

type SectionWrapperProps = {
  children: React.ReactNode;
  title: string;
};

export default function SectionWrapper({
  children,
  title,
}: SectionWrapperProps) {
  return (
    <div className="mt-10 flex flex-col">
      <TypographyH3>{title}</TypographyH3>
      {children}
    </div>
  );
}
