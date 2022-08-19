import React from 'react';

import './SectionOne.scss';

export const SectionOne = () => {

    return (
        <section className='section-tech'>
            <div className="tech-title">
                <h2>Stack technologiczny</h2>
            </div>
            <div className='frontend'>
                <div className='tech'>
                    <div className="image"><img src={require("../../../images/html5-150px.png")} alt=""/></div>
                    <div className="name"></div>
                </div>
                <div className='tech'>
                    <div className="image"><img src={require("../../../images/css3-150px.png")} alt=""/></div>
                    <div className="name"></div>
                </div>
                <div className='tech'>
                    <div className="image"><img src={require("../../../images/js-150px.png")} alt=""/></div>
                    <div className="name"></div>
                </div>
                <div className='tech'>
                    <div className="image"><img src={require("../../../images/react-150px.png")} alt=""/></div>

                    <div className="name"></div>
                </div>
            </div>
            <div className='backend'>
                <div className='tech'>
                    <div className="image"><img src={require("../../../images/node-245-150.png")} alt=""/></div>
                    <div className="name"></div>
                </div>
                <div className='tech'>
                    <div className="image"><img src={require("../../../images/express-150px.png")} alt=""/></div>
                    <div className="name"></div>
                </div>
                <div className='tech'>
                    <div className="image"><img src={require("../../../images/nest-150px.png")} alt=""/></div>
                    <div className="name"></div>
                </div>
                <div className='tech'>
                    <div className="image"><img src={require("../../../images/ts-150px.png")} alt=""/></div>
                    <div className="name"></div>
                </div>
            </div>
            <div className='other'>
                <div className='tech'>
                    <div className="image"><img src={require("../../../images/typeorm-150px.png")} alt=""/></div>
                    <div className="name"></div>
                </div>
                <div className='tech'>
                    <div className="image"><img src={require("../../../images/mysql-150px.png")} alt=""/></div>
                    <div className="name"></div>
                </div>
                <div className='tech'>
                    <div className="image"><img src={require("../../../images/git-150px.png")} alt=""/></div>
                    <div className="name"></div>
                </div>
                <div className='tech'>
                    <div className="image"><img src={require("../../../images/scrum-150px.png")} alt=""/></div>
                    <div className="name"></div>
                </div>
            </div>
        </section>
    )
}