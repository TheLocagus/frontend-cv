import React from 'react';

import './Menu.scss';

export const Menu = () => {

    return (
        <nav className="menu-container">
            <ul className="main-ul">
                <li className="about-me">
                    <div>O mnie \/</div>
                    <ul className="dropdown about-me_dropdown">
                        <li>O mnie</li>
                        <li>Technologie</li>
                    </ul>
                </li>
                <li className="projects">
                    <div>Projekty \/</div>
                    <ul className="dropdown projects_dropdown">
                        <li className="projects-preview">Projekty</li>
                        <li className="projects-details">
                            <div>Lista projektów {`>`} </div>
                            <ul className="dropdown projects-details_dropdown">
                                <li>Kalkulator kalorii</li>
                                <li>MegaK - Head Hunters</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="github">
                    <div>Github</div>
                </li>
                <li className="contact">
                    <div>Kontakt \/</div>
                    <ul className="dropdown contact_dropdown">
                        <li>Linkedin</li>
                        <li>Messenger</li>
                        <li>Telefon</li>
                    </ul>
                </li>
            </ul>
        </nav>

    )
}