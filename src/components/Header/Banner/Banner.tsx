import React from 'react';

import './Banners.scss';

export const Banner = () => {

  return (
    <>
      <div className="banner" style={{backgroundImage: 'url(programmer-background.png)'}}>
        <div className="content" >
          <div className='first-part'><p>Bartosz Kołsut</p></div>
          <div className='second-part'><p>Przyszły Junior Javascript Developer</p></div>
          <div className='third-part'><p>Marzę o pracy w zespole, gdzie będę mógł się rozwijać i kształcić by każdego dnia stawać się coraz lepszy w tym co robię.{"\n"} Uwielbiam rozwiązywać problemy i chętnie poznaję nowe technologie.</p></div>
          <div className='fourth-part'><p>Mój stack to React+TS na froncie i Express/Nest+TS na backendzie.{"\n"} Wierzę, że dzięki temu odnajdę się na obu płaszczyznach, być może nawet jako fullstack.</p></div>
        </div>
      </div>
    </>
  )
}