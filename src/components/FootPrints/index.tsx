import { FootprintType } from '@/types/profileData';
import { FootprintElement } from './FootprintElement';
import { Part } from '../Part';

import styles from './footprints.module.scss';

interface FootprintProps {
  footprintData: FootprintType[];
}

export const FootPrints = ({ footprintData }: FootprintProps) => {
  return (
    <Part title='발자취'>
      <ul className={styles.footprintsWrapper}>
        {footprintData.map((footprint) => (
          <FootprintElement key={`footprint-${footprint.key}`} footprint={footprint} />
        ))}
      </ul>
    </Part>
  );
};
