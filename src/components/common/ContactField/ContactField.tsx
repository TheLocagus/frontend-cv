import React from 'react';

interface Props {
  imageName: string;
  type: 'a' | 'button';
  value: string;
}

export const ContactField = ({imageName, type, value}: Props) => {

  return (
    <div className="contact__details__panel">
      <div className='contact__details__panel__icon'>
        <img src={`/images/contact-icons/${imageName}`} alt=""/>
      </div>
      <div className='contact__details__panel__data'>
        {
          type === 'a'
            ? <a href="/">{value}</a>
            : <button>{value}</button>
        }
      </div>
    </div>

  )
}