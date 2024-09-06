import styles from './section.module.scss';

interface SectionProps {
  section: string[];
  lineGap: number;
  fontSize?: number;
}

export const Section = ({ section, fontSize = 15, lineGap }: SectionProps) => {
  return (
    <>
      {section.map((sentence, idx) => (
        <p
          key={`section-${idx}`}
          style={{ marginBottom: lineGap, fontSize: fontSize + 'px', lineHeight: fontSize + 5 + 'px' }}
          className={styles.section}
        >
          {sentence}
        </p>
      ))}
    </>
  );
};
