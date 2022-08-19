import React from 'react'
import {Menu} from "./Menu/Menu";

import './Navigation.scss';

export const Navigation = () => {
    return (
        <header>
            <div className="logo">
                <p>CV Bartosz Kołsut</p>
            </div>
            <Menu/>
        </header>
    )
}