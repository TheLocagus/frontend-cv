import React from 'react';

import './LoadingView.scss';
export const LoadingView = () => {

  return (
    <div className='loading-view'>
      <h1>Trwa ładowanie</h1>
      <div className="spinner-border m-5" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}