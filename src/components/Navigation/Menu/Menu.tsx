import React from 'react';

import './Menu.scss';

export const Menu = () => {

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
                <li className="main-ul__projects">
                    <div>Projekty \/</div>
                    <ul className="dropdown main-ul__projects_dropdown">
                        <li className="projects-preview">Projekty</li>
                        <li className="main-ul__projects-details">
                            <div>Lista projektów {`>`} </div>
                            <ul className="dropdown main-ul__projects-details_dropdown">
                                <li>Kalkulator kalorii</li>
                                <li>MegaK - Head Hunters</li>
                            </ul>
                        </li>
                    </ul>
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