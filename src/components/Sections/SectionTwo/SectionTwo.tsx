import React from 'react';

import './SectionTwo.scss'
import {Separator} from "../../common/Separator/Separator";
import {Project} from "../../common/Project/Project";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";

export const SectionTwo = () => {

  const {projects} = useSelector((store: RootState) => store.cvData)
  console.log(projects)

  const generateProjectsView = () => projects
    .map((project, i, array) => {
      const {id} = project;
      if (array.length - 1 === i) {
        return (<Project
          key={id}
          id={id}
          title={project.title}
          backUrl={project.backUrl}
          demoUrl={project.demoUrl}
          describe={project.describe}
          frontUrl={project.frontUrl}
          tech={project.tech}/>)
      } else {
        return <div className='project-with-separator' key={`pws${id}`}>
          <Project
            id={id}
            key={id}
            title={project.title}
            backUrl={project.backUrl}
            demoUrl={project.demoUrl}
            describe={project.describe}
            frontUrl={project.frontUrl}
            tech={project.tech}/>
          <Separator key={`s-${i}`}/>
        </div>
      }
    })

  return (
    <>
      <section className="section-projects">
        <div className="projects-title"><h2>Moje projekty</h2></div>
        {generateProjectsView()}
      </section>
    </>
  )
}