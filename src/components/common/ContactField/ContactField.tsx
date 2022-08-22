import React from 'react';
import { DynamicButtonEnum } from 'types';

import './ContactField.scss';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
interface Props {
  imgName: string;
  type: DynamicButtonEnum;
  value: string;
  url: string;
  id: string;
}

export const ContactField = ({imgName, type, value, url}: Props) => {

  const notify = () => toast.info('Skopiowano!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const copyText = (value: string) => {
    navigator.clipboard.writeText(value)
    notify();
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
            : (<>
              <button onClick={() => copyText(value)}>{value}</button>
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
              /></>)
        }
      </div>
    </div>

  )
}