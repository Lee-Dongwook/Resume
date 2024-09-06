import { Header, Introduce, Project, FootPrints, Certificates } from '@/components';
import { getCertificates, getFootPrints, getProfile, getProjects } from '@/services';

import styles from './resume.module.scss';

const Page = async () => {
  const profileData = await getProfile();
  const projectData = await getProjects();
  const footprintData = await getFootPrints();
  const certificateData = await getCertificates();

  return (
    <>
      <Header profileData={profileData} />
      <main className={styles.mainWrapper}>
        <Introduce summaries={profileData.summaries} />
        <Project projectData={projectData} />
        <FootPrints footprintData={footprintData} />
        <Certificates certificateData={certificateData} />
      </main>
    </>
  );
};

export default Page;
