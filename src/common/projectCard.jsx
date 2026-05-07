import React from 'react';
import { useTheme } from '../common/themeContext.jsx';

function ProjectCard({
  src,
  link,
  h3,
  p,
  skills,
  skillsClassName,
  cardClassName,
  projectLinkClassName,
  socialLinksClassName,
  socialLinkClassName,
  repoLink,
  videoLink,
  githubIcon,
  youtubeIcon,
}) {
  const { theme } = useTheme();
  return (
    <article className={cardClassName}>
      <a className={projectLinkClassName} href={link} target="_blank" rel="noreferrer">
        <img className="hover" src={src} alt={`${h3} logo`} />
      </a>
      <h3>{h3}</h3>
      <p>{p}</p>
      <div className={skillsClassName}>{skills}</div>
      <p className="divider" style={{ color: theme === 'light' ? "#222" : "#fff" }}>-------------------</p>
      <div className={socialLinksClassName}>
        {repoLink && (
          <a
            className={socialLinkClassName}
            href={repoLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`${h3} GitHub`}
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
        )}
        {videoLink && (
          <a
            className={socialLinkClassName}
            href={videoLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`${h3} YouTube`}
          >
            <img src={youtubeIcon} alt="YouTube" />
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;