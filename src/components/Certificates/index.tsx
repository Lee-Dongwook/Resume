import { CertificateType } from '@/types/profileData';
import { Part } from '../Part';
import { CertificateElement } from './CertificateElement';

import styles from './certificate.module.scss';

interface CertificateProps {
  certificateData: CertificateType[];
}

export const Certificates = ({ certificateData }: CertificateProps) => {
  return (
    <Part title='자격증 및 언어'>
      <ul className={styles.certificatesWrapper}>
        {certificateData.map((certificate) => (
          <CertificateElement certificate={certificate} key={`${certificate.key}`} />
        ))}
      </ul>
    </Part>
  );
};
