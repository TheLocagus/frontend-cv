import React from 'react';

import './Menu.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../../store";

export const Menu = () => {
    const {projectsY} = useSelector((store: RootState) => store.cvData)
    const slideToElement = () => {
        window.scrollTo({
            top: projectsY,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <nav className="menu-container">
            <ul className="main-ul">
                <li className="main-ul__about-me">
                    <div>O mnie \/</div>
                    <ul className="dropdown main-ul__about-me_dropdown">
                        <li>O mnie</li>
                        <li>Technologie</li>
                    </ul>
                </li>
                <li onClick={() => slideToElement()} className="main-ul__projects">
                    Projekty
                </li>
                <li className="main-ul__github">
                    <div>Github</div>
                </li>
                <li className="main-ul__contact">
                    <div>Kontakt</div>
                </li>
            </ul>
        </nav>

    )
}