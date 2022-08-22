import React from 'react';
import { DynamicButtonEnum } from 'types';

import './ContactField.scss';
interface Props {
  imgName: string;
  type: DynamicButtonEnum;
  value: string;
  url: string;
  id: string;
}

export const ContactField = ({imgName, type, value, url}: Props) => {

  const copyText = (value: string) => {
    navigator.clipboard.writeText(value)
    alert("Skopiowano")
  }

  return (
    <div className="contact__details__panel">
      <div className='contact__details__panel__icon'>
        <img src={`/images/contact-icons/${imgName}`} alt=""/>
      </div>
      <div className='contact__details__panel__data'>
        {
          type === 'a'
            ? <a href={url}>{value}</a>
            : <button onClick={() => copyText(value)}>{value}</button>
        }
      </div>
    </div>

  )
}