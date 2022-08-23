import React from 'react';

import './Menu.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {redirectTo} from "../../../utils/redirectTo";

export const Menu = () => {
    const {projectsY, techY, contactY} = useSelector((store: RootState) => store.cvData)
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
                    {/*<ul className="dropdown main-ul__about-me_dropdown">*/}
                    {/*    <li>O mnie</li>*/}
                    {/*    <li>Technologie</li>*/}
                    {/*</ul>*/}
                </li>
                <li onClick={() => slideToElement(projectsY)} className="main-ul__projects">
                    Projekty
                </li>
                <li onClick={() => redirectTo('https://github.com/TheLocagus')} className="main-ul__github">
                    <div>Github</div>
                </li>
                <li onClick={() => slideToElement(contactY)} className="main-ul__contact">
                    <div>Kontakt</div>
                </li>
            </ul>
        </nav>

    )
}