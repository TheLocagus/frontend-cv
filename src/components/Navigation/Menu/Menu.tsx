import React, {useEffect, useRef, useState} from 'react';

import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {redirectTo} from "../../../utils/redirectTo";
import {MenuSwitchLanguageLi} from "../../common/MenuSwitchLanguageLi/MenuSwitchLanguageLi";
import {toEngFetch, toPlFetch} from "../../../utils/urls";
import {AiOutlineLink} from "react-icons/ai";
import {FaBars} from "react-icons/fa";
import {ImCancelCircle} from "react-icons/im";
import './Menu.scss';


export const Menu = () => {
  const {projectsY, techY, contactY, language} = useSelector((store: RootState) => store.cvData);
  const navRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {

    if (!isMenuOpen) {
      navRef.current.className = navRef.current.className.replace(" show-menu", "");
      document.body.style.overflow = 'scroll'
    } else {
      navRef.current.className += ' show-menu';
      document.body.style.overflow = 'hidden'
    }

  }, [isMenuOpen])

  const slideToElement = (elementY: number) => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
    document.body.style.overflow = 'scroll';
    window.scrollTo({
      top: elementY,
      left: 0,
      behavior: 'smooth'
    });
  }

  const toggleMenu = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  }
  return (
    <>
      {
        isMenuOpen
          ? <ImCancelCircle className='mobile-menu-bar' onClick={toggleMenu}/>
          : <FaBars className='mobile-menu-bar' onClick={toggleMenu}/>
      }
      <nav className="menu-container" ref={navRef}>
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
          <li onClick={() => redirectTo('https://github.com/TheLocagus', isMenuOpen, setIsMenuOpen)}
              className="main-ul__github">
            <AiOutlineLink className='link-icon'/>
            <div>Github</div>
          </li>
          {
            language === 'eng'
              ? <MenuSwitchLanguageLi languageUrl={toPlFetch} title={'Wersja polska'} isMenuOpen={isMenuOpen}
                                      setIsMenuOpen={setIsMenuOpen}/>
              : <MenuSwitchLanguageLi languageUrl={toEngFetch} title={'English version'} isMenuOpen={isMenuOpen}
                                      setIsMenuOpen={setIsMenuOpen}/>
          }

        </ul>
      </nav>
    </>

  )
}
