import { ProjectListType } from '@/types/profileData';
import { ProjectElement } from './ProjectElement';
import { Part } from '../Part';

import styles from './project.module.scss';

interface ProjectProps {
  projectData: ProjectListType;
}

export const Project = ({ projectData }: ProjectProps) => {
  const projectKeys = Object.keys(projectData);
  return (
    <Part title='프로젝트'>
      <ul className={styles.projectsWrapper}>
        {projectKeys.map(
          (projectKey, idx) =>
            projectData[projectKey].digest && (
              <ProjectElement project={projectData[projectKey]} key={`project-${idx}`} />
            )
        )}
      </ul>
    </Part>
  );
};
