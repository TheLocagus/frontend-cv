import React from 'react';
import { DynamicButtonEnum } from 'types';

import './ContactField.scss';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {redirectTo} from "../../../utils/redirectTo";
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
          type === 'redirect'
            ? <>
              <span className='orange'>{`>`}</span><button onClick={() => redirectTo(url)}>{value}</button>
            </>
            : (<>
              <span className='orange'>{`>`}</span><button onClick={() => copyText(value)}>{value}</button>
              </>)
        }
      </div>
    </div>

  )
}