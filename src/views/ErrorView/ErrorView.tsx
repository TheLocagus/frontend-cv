import React from 'react';

import './ErrorView.scss';
export const ErrorView = () => {

  return (
    <div className='error-view'>
      <h1>Wystąpił nieoczekiwany błąd.</h1>
      <h2>Wróć do strony głównej. <a href="/">Kliknij tutaj.</a></h2>
    </div>
  )
}