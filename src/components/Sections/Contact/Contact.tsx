import React from 'react';
import './Contact.scss';

export const Contact = () => {

  const copyText = (value: string) => {
    navigator.clipboard.writeText(value)
    alert("Skopiowano")
  }

  return (
    <section className='contact'>
      <div className="contact__title">
        <h2>Kontakt</h2>
      </div>
      <div className="contact__details">
        <div className="contact__details__panel">
          <div className='contact__details__panel__icon'>
            <img src={'/images/contact-icons/messenger.png'} alt=""/>
          </div>
          <div className='contact__details__panel__data'>
            <a href="/">Bartosz Kołsut</a>
          </div>
        </div>
        <div className="contact__details__panel">
          <div className='contact__details__panel__icon'>
            <img src={'/images/contact-icons/email.png'} alt=""/>
          </div>
          <div className='contact__details__panel__data'>
            <a href="/">bartek_kolsut1@wp.pl</a>
          </div>
        </div>
        <div className="contact__details__panel">
          <div className='contact__details__panel__icon'>
            <img src={'/images/contact-icons/phone.png'} alt=""/>
          </div>
          <div className='contact__details__panel__data'>
            <button onClick={() => copyText('727617762')}>727617762</button>
          </div>
        </div>
        <div className="contact__details__panel">
          <div className='contact__details__panel__icon'>
            <img src={'/images/contact-icons/github.png'} alt=""/>
          </div>
          <div className='contact__details__panel__data'>
            <a href="/">TheLocagus</a>

          </div>
        </div>
      </div>
    </section>
  )
}