import {
  TypographyH1,
  TypographyP,
  TypographyH3,
  TypographyH4,
  TypographyLarge,
  TypographyMuted,
} from '@/components/ui/typography';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Badge } from '@/components/ui/badge';

type ExperienceProps = {
  time: string;
  jobTitle: string;
  company: string;
  jobDesc: string;
  technologies: string[];
}

export default function Experience({
  time,
  jobTitle,
  company,
  jobDesc,
  technologies,
}: ExperienceProps) {
  return (
    <div>
      <TypographyMuted>{time}</TypographyMuted>
      <TypographyLarge>{`${jobTitle} - ${company}`}</TypographyLarge>
      <TypographyP>{jobDesc}</TypographyP>
      {technologies.map((tech) => (
        <Badge key={Math.random()} variant="outline">{tech}</Badge>
      ))}
    </div>
  );
}
