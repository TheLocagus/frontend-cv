import React from 'react';

import './LoadingView.scss';
export const LoadingView = () => {

  return (
    <div className='loading-view'>
      <h1>Trwa ładowanie</h1>
      <h2>Proszę czekać <span className='loading-view__span'></span></h2>
    </div>
  )
}