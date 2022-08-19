import React from 'react';

import './Banners.scss';

export const Banner = () => {

    return (
        <>
            <div className="banner">
                <div className="title">
                    <h1>O mnie</h1>
                </div>
                <div className="content">
                    <p className='first-part'>Witam, nazywam się Bartosz Kołsut i chcę zostać Junior Javascript Developerem.</p>
                    <p className='second-part'>Posiadam fullstackowe zaplecze technologiczne dzięki czemu uważam, że odnajdę się zarówno na froncie jak i na backendzie. </p>
                    <p className='third-part'>Oczywiście nie jestem ekspertem, jeszcze wiele nauki przede mną, a nigdzie się tak nie rozwinę jak w środowisku doświadczonych programistów!</p>
                </div>
            </div>
        </>

    )
}