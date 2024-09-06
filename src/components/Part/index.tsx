import styles from './part.module.scss';

interface PartProps {
  title: string;
  children: JSX.Element;
}

export const Part = ({ title, children }: PartProps) => {
  return (
    <section className={styles.sectionWrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.inner}>{children}</div>
    </section>
  );
};
