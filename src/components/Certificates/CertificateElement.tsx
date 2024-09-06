import { CertificateType } from '@/types/profileData';

import styles from './certificateElement.module.scss';

interface CertificateElementProps {
  certificate: CertificateType;
}

export const CertificateElement = ({ certificate }: CertificateElementProps) => {
  const date = `${certificate.year}. ${certificate.month.toString().padStart(2, '0')} ${
    certificate.day ? '. ' + certificate.day.toString().padStart(2, '0') : ''
  }`;

  return (
    <li className={styles.certificateWrapper}>
      <div className={styles.certificateTitle}>
        <h3>{certificate.title}</h3>
        <span>{date}</span>
      </div>
      <div className={styles.certificateScore}>
        <span>{certificate.score}</span>
      </div>
    </li>
  );
};
