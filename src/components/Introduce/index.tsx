import { Part } from '../Part';
import { Section } from './Section';

interface IntroduceProps {
  summaries: string[];
}

export const Introduce = ({ summaries }: IntroduceProps) => {
  return (
    <Part title='소개'>
      <Section section={summaries} fontSize={14} lineGap={5} />
    </Part>
  );
};
