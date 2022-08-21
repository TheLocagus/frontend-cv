import React from 'react';

interface Props {
  title: string;
  describe: string;
  tech: string;
  frontUrl: string;
  backUrl: string;
  demoUrl: string;
}

export const Project = ({title, describe, tech, frontUrl, demoUrl, backUrl}: Props) => {

  return (
    <div className="project" >
      <h3>{title}</h3>
      <div className="project__details">
        <p className="project__details__describe">
          {describe}
        </p>
        <p className="project__details__tech">
          {tech}
        </p>
      </div>
      <div className="project__urls">
        <a className="project__urls__github-front" href={frontUrl}> {'>'} Github Frontend </a>
        <a className="project__urls__github-back" href={backUrl}> {'>'} Github Backend </a>
        <a className="project__urls__demo" href={demoUrl}> {'>'} Demo </a>
      </div>
    </div>
  )
}