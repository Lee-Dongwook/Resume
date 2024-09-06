import { Section } from './Section';

interface IntroduceProps {
  summaries: string[];
}

export const Introduce = ({ summaries }: IntroduceProps) => {
  return (
    <>
      <Section section={summaries} fontSize={14} lineGap={5} />
    </>
  );
};
