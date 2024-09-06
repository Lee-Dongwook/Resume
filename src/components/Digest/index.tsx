import cx from 'classnames';
import { LinkButton, GithubButton } from '../Button';

import styles from './digest.module.scss';

interface DigestProps {
  elementKey: string;
  digest: {
    description: string;
    link?: string[];
    githubLink?: string[];
  }[];
  className?: string;
}

export const Digest = ({ elementKey, digest, className }: DigestProps) => {
  return (
    <ul className={cx(styles.listWrapper, className)}>
      {digest.map(({ description, link, githubLink }, idx) => (
        <li key={`${elementKey}-${idx}`}>
          <span>{description}</span>
          {link?.map((href, linkIdx) => (
            <LinkButton href={href} key={`${elementKey}-${idx}-${linkIdx}`} className={styles.linkButton} />
          ))}
          {githubLink?.map((href, linkIdx) => (
            <GithubButton href={href} key={`${elementKey}-${idx}-${linkIdx}`} className={styles.linkButton} />
          ))}
        </li>
      ))}
    </ul>
  );
};
