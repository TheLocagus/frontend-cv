import React from 'react';
import {redirectTo} from "../../../utils/redirectTo";
import {AiOutlineLink} from "react-icons/ai";

interface Props {
  languageUrl: string;
  title: string;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const MenuSwitchLanguageLi = ({languageUrl, title, isMenuOpen, setIsMenuOpen}: Props) => {


  return (
    <li onClick={() => redirectTo(languageUrl, isMenuOpen, setIsMenuOpen)} className="main-ul__language">
      <div>
        <AiOutlineLink className='link-icon'/>
        {title}
      </div>
    </li>
  )
}