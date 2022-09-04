import React from 'react';
import {redirectTo} from "../../../utils/redirectTo";

interface Props {
  languageUrl: string;
  title: string
}
export const MenuSwitchLanguageLi = ({languageUrl, title}: Props) => {

  return (
    <li onClick={() => redirectTo(languageUrl)} className="main-ul__language">
      <div>
        {title}
      </div>
    </li>
  )
}