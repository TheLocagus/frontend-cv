import React from 'react';

import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {redirectTo} from "../../../utils/redirectTo";
import {MenuSwitchLanguageLi} from "../../common/MenuSwitchLanguageLi/MenuSwitchLanguageLi";
import {toEngFetch, toPlFetch} from "../../../utils/urls";
import './Menu.scss';

export const Menu = () => {
  const {projectsY, techY, contactY, language} = useSelector((store: RootState) => store.cvData)
  const slideToElement = (elementY: number) => {
    window.scrollTo({
      top: elementY,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <nav className="menu-container">
      <ul className="main-ul">
        <li onClick={() => slideToElement(techY)} className="main-ul__stack">
          <div>Stack</div>
        </li>
        <li onClick={() => slideToElement(projectsY)} className="main-ul__projects">
          {
            language === 'eng' ? 'Projects' : 'Projekty'
          }
        </li>
        <li onClick={() => slideToElement(contactY)} className="main-ul__contact">
          <div>
            {
              language === 'eng' ? 'Contact' : 'Kontakt'
            }
          </div>
        </li>
        <li onClick={() => redirectTo('https://github.com/TheLocagus')} className="main-ul__github">
          <div>Github</div>
        </li>
        {
          language === 'eng'
            ? <MenuSwitchLanguageLi languageUrl={toPlFetch} title={'Wersja polska'}/>
            : <MenuSwitchLanguageLi languageUrl={toEngFetch} title={'English version'}/>
        }

      </ul>
    </nav>

  )
}