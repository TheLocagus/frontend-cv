import React from 'react'
import {Menu} from "./Menu/Menu";

import './Navigation.scss';
import {frontUrl} from "../../utils/urls";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import { LanguageEnum } from 'types';

export const Navigation = () => {

  const {language} = useSelector((store: RootState) => store.cvData)

  const moveToMain = () => {
    language === LanguageEnum.english ? window.location.href = `${frontUrl}/eng` : window.location.href =`${frontUrl}/pl`;
  }
    return (
        <header>
            <div className="logo" onClick={moveToMain}>
                <p>CV Bartosz Kołsut</p>
            </div>
            <Menu/>
        </header>
    )
}