import React, {useEffect, useRef} from 'react';
import './Contact.scss';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {ContactField} from "../../common/ContactField/ContactField";
import {setContactY, setProjectsY} from "../../../actions/cvData";
import {ToastContainer} from "react-toastify";

export const Contact = () => {

  const {contacts} = useSelector((store: RootState) => store.cvData)
  const dispatch = useDispatch();
  const contactsRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(()=> {
    const contactsRefY = contactsRef.current.offsetTop;
    dispatch(setContactY(contactsRefY));
  }, [])
  const generateContactPanels = () => contacts.contacts.map(contact => <ContactField value={contact.value} url={contact.url} imgName={contact.imgName} type={contact.type} id={contact.id} key={contact.id}/>)

  return (
    <section className='contact' ref={contactsRef}>
      <div className="contact__title">
        <h2>{contacts.title}</h2>
      </div>
      <div className="contact__details">
        {generateContactPanels()}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  )
}