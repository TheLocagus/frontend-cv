import React from 'react';

import './Banner.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../../store";

export const Banner = () => {

  const {banner} = useSelector((store: RootState) => store.cvData)
  const {title, name, firstParagraph, secondParagraph, language} = banner;
  return (
    <section className="section-about-me">
      <div className="banner" style={{backgroundImage: 'url(programmer-background.png)'}}>
        <div className="content">
          <div className='first-part'><p>{name}</p></div>
          <div className='second-part'><p>{title}</p></div>
          <div className='third-part'><p>{firstParagraph}</p></div>
          <div className='fourth-part'><p>{secondParagraph}</p></div>
        </div>
      </div>
    </section>
  )
}