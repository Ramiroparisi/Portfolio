import React, { useState } from 'react';
import { useTheme } from '../common/themeContext.jsx';

function ProjectCard({
  src,
  link,
  h3,
  p,
  backText,
  backText2,
  skills,
  skillsClassName,
  cardClassName,
  projectLinkClassName,
  socialLinksClassName,
  socialLinkClassName,
  repoLink,
  videoLink,
  videoLink2,
  githubIcon,
  youtubeIcon,
}) {
  const { theme } = useTheme();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const textColor = theme === 'light' ? "#222" : "#fff";
  const iconColor = theme === 'light' ? "#00C8D9" : "#00C8D9";
  
  const cardBgColor = theme === 'light' ? "#fff" : "#222"; 

const ArrowIcon = () => (
  <svg 
    className="flip-icon" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={iconColor} 
    strokeWidth="8"
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="14 6 20 12 14 18" />
  </svg>
);

  return (
    <div className="flip-card">
      <article className={`${cardClassName} flip-card-inner ${isFlipped ? 'isFlipped' : ''}`}>
        
        <div className="flip-card-front" style={{ backgroundColor: cardBgColor }}>
          <a className={projectLinkClassName} href={link} target="_blank" rel="noreferrer">
            <img className="hover" src={src} alt={`${h3} logo`} />
          </a>
          <h3 style={{ color: textColor }}>{h3}</h3>
          <p style={{ color: textColor }}>{p}</p>
          <div className={skillsClassName}>{skills}</div>
          <p className="divider" style={{ color: textColor }}>-------------------</p>
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

          <button className="flip-btn" onClick={handleFlip} aria-label="Ver descripción">
            <ArrowIcon />
          </button>
        </div>

        <div className="flip-card-back" style={{ backgroundColor: cardBgColor }}>
          <h3 style={{ color: textColor }}>{h3}</h3>
          <p className="project-description" style={{ color: textColor }}>
            {backText}
          </p>
          <p className="project-description" style={{ color: textColor }}>
            {backText2}
          </p>
          <div className={socialLinksClassName}>
            {videoLink2 && (  
              <a
                className={socialLinkClassName}
                href={videoLink2}
                target="_blank"
                rel="noreferrer"
                aria-label={`${h3} YouTube`}
              >
                <img src={youtubeIcon} alt="YouTube" />
              </a>
            )}
          </div>
          <button className="flip-btn" onClick={handleFlip} aria-label="Volver al frente">
            <ArrowIcon />
          </button>
        </div>

      </article>
    </div>
  );
}

export default ProjectCard;