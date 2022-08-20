import React from 'react';
import {AboutMe} from "../components/Header/AboutMe";
import {Sections} from "../components/Sections/Sections";

export const MainPageView = () => {

    return (
        <main>
            <AboutMe/>
            <Sections/>
        </main>
    )
}