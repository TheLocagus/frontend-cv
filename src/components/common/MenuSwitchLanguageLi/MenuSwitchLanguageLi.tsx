import React from 'react';
import {redirectTo} from "../../../utils/redirectTo";
import {AiOutlineLink} from "react-icons/ai";

interface Props {
  languageUrl: string;
  title: string
}
export const MenuSwitchLanguageLi = ({languageUrl, title}: Props) => {

  return (
    <li onClick={() => redirectTo(languageUrl)} className="main-ul__language">
      <div>
        <AiOutlineLink className='link-icon'/>
        {title}
      </div>
    </li>
  )
}