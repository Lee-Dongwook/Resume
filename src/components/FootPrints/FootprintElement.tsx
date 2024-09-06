import { FootprintType } from '@/types/profileData';
import { getPeriodString } from '@/utils';
import { Digest } from '../Digest';

import styles from './footprintElement.module.scss';

interface FootPrintElementProps {
  footprint: FootprintType;
}

export const FootprintElement = ({ footprint }: FootPrintElementProps) => {
  const { startDateYear, startDateMonth, startDateDay, endDateYear, endDateMonth, endDateDay } = footprint;

  const periodString = getPeriodString({
    startDateYear,
    startDateMonth,
    startDateDay,
    endDateYear,
    endDateMonth,
    endDateDay,
  });

  return (
    <li className={styles.footprintWrapper}>
      <div className={styles.footprintTitle}>
        <h3>{footprint.title}</h3>
        <span>{footprint.summary}</span>
      </div>
      <span className={styles.footprintTimestamp}>{periodString}</span>
      {footprint.digest && (
        <Digest elementKey={footprint.title} digest={footprint.digest} className={styles.footprintDigest} />
      )}
    </li>
  );
};
