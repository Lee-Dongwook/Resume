import { CertificateType } from '@/types/profileData';

import certificate from '@/assets/data/certificate.json';

export async function getCertificates() {
  const data = await new Promise<CertificateType[]>((resolve) => {
    resolve(certificate);
  });

  return data;
}
