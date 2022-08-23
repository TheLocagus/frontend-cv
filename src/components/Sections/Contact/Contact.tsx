import React, {useEffect, useRef} from 'react';
import './Contact.scss';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {ContactField} from "../../common/ContactField/ContactField";
import {setContactY, setProjectsY} from "../../../actions/cvData";

export const Contact = () => {

  const {contacts} = useSelector((store: RootState) => store.cvData)
  const dispatch = useDispatch();
  const contactsRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(()=> {
    const contactsRefY = contactsRef.current.offsetTop;
    dispatch(setContactY(contactsRefY));
  }, [])
  const generateContactPanels = () => contacts.map(contact => <ContactField value={contact.value} url={contact.url} imgName={contact.imgName} type={contact.type} id={contact.id} key={contact.id}/>)

  return (
    <section className='contact' ref={contactsRef}>
      <div className="contact__title">
        <h2>Kontakt</h2>
      </div>
      <div className="contact__details">
        {generateContactPanels()}
      </div>
    </section>
  )
}