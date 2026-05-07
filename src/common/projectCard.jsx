import React from 'react';

function ProjectCard({ src, link, h3, p, skills, skillsClassName }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <div className={skillsClassName}>{skills}</div>
    </a>
  );
}

export default ProjectCard;