import React from 'react';
import './Contact.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {ContactField} from "../../common/ContactField/ContactField";

export const Contact = () => {

  const {contacts} = useSelector((store: RootState) => store.cvData)

  const generateContactPanels = () => contacts.map(contact => <ContactField value={contact.value} url={contact.url} imgName={contact.imgName} type={contact.type} id={contact.id} key={contact.id}/>)

  return (
    <section className='contact'>
      <div className="contact__title">
        <h2>Kontakt</h2>
      </div>
      <div className="contact__details">
        {generateContactPanels()}
      </div>
    </section>
  )
}