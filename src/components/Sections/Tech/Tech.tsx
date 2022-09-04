import React, {useEffect, useRef, useState} from 'react';

import './Tech.scss';
import {useDispatch, useSelector} from "react-redux";
import {setProjectsY, setTechY} from "../../../actions/cvData";
import {RootState} from "../../../store";

export const Tech = () => {
    const {techTitle} = useSelector((store: RootState) => store.cvData)

    const dispatch = useDispatch();

    const title = useRef() as React.MutableRefObject<HTMLInputElement>;
    const firstRow = useRef() as React.MutableRefObject<HTMLInputElement>;
    const secondRow = useRef() as React.MutableRefObject<HTMLInputElement>;
    const thirdRow = useRef() as React.MutableRefObject<HTMLInputElement>;

    const techRef = useRef() as React.MutableRefObject<HTMLInputElement>;



    const [titleY, setTitleY] = useState(0);
    const [firstRowY, setFirstRowY] = useState(0);
    const [secondRowY, setSecondRowY] = useState(0);
    const [thirdRowY, setThirdRowY] = useState(0);

    useEffect(()=> {
        const techRefY = techRef.current.offsetTop;
        dispatch(setTechY(techRefY));
    }, [])

    useEffect(()=>{
        const titleY = title.current.offsetTop;
        const firstRowY = firstRow.current.offsetTop;
        const secondRowY = secondRow.current.offsetTop;
        const thirdRowY = thirdRow.current.offsetTop;

        setTitleY(titleY);
        setFirstRowY(firstRowY);
        setSecondRowY(secondRowY);
        setThirdRowY(thirdRowY);
    }, [])

    useEffect(() => {
        if(firstRowY === 0){
            return;
        }
        window.addEventListener('scroll', slideElements)
    }, [firstRowY])

    const slideElements = () => {
        if(firstRowY === 0 || window.scrollY < titleY - window.innerHeight + 100 || window.scrollY > thirdRowY - 100){
            return;
        }

        if(window.scrollY > titleY - window.innerHeight + 200){
            title.current.style.transform = 'translateY(0)'
            title.current.style.opacity = '1'
        } else {
            title.current.style.transform = 'translateY(-50%)'
            title.current.style.opacity = '0'
        }

        if(window.scrollY > firstRowY - window.innerHeight + 200){
            firstRow.current.style.transform = 'translateX(0)'
        } else {
            firstRow.current.style.transform = 'translateX(-100%)'
        }

        if(window.scrollY > secondRowY - window.innerHeight + 200){
            secondRow.current.style.transform = 'translateX(0)'
        } else {
            secondRow.current.style.transform = 'translateX(100%)'
        }

        if(window.scrollY > thirdRowY - window.innerHeight + 200){
            thirdRow.current.style.opacity = '1'
        } else  {
            thirdRow.current.style.opacity = '0'
        }
    }


    return (
        <section className='section-tech' ref={techRef}>
            <div className="tech-title" ref={title}>
                <h2>{techTitle}</h2>
            </div>
            <div className='frontend' ref={firstRow}>
                <div className='tech'>
                    <div className="image"><img className='tech-icon' src={"/images/html5-150px.png"} alt=""/></div>
                </div>
                <div className='tech'>
                    <div className="image"><img className='tech-icon' src={"/images/css3-150px.png"} alt=""/></div>
                </div>
                <div className='tech'>
                    <div className="image"><img className='tech-icon' src={"/images/js-150px.png"} alt=""/></div>
                </div>
                <div className='tech'>
                    <div className="image"><img className='tech-icon' src={"/images/react-150px.png"} alt=""/></div>
                </div>
            </div>
            <div className='backend' ref={secondRow}>
                <div className='tech'>
                    <div className="image"><img className='tech-icon' src={"/images/node-245-150.png"} alt=""/></div>
                </div>
                <div className='tech'>
                    <div className="image"><img className='tech-icon' src={"/images/express-150px.png"} alt=""/></div>
                </div>
                <div className='tech'>
                    <div className="image"><img className='tech-icon' src={"/images/nest-150px.png"} alt=""/></div>
                </div>
                <div className='tech'>
                    <div className="image"><img className='tech-icon' src={"/images/ts-150px.png"} alt=""/></div>
                </div>
            </div>
            <div className='other' ref={thirdRow}>
                <div className='tech'>
                    <div className="image"><img className='tech-icon' src={"/images/typeorm-150px.png"} alt=""/></div>
                </div>
                <div className='tech'>
                    <div className="image"><img className='tech-icon' src={"/images/mysql-150px.png"} alt=""/></div>
                </div>
                <div className='tech'>
                    <div className="image"><img className='tech-icon' src={"/images/git-150px.png"} alt=""/></div>
                </div>
                <div className='tech'>
                    <div className="image"><img className='tech-icon' src={"/images/scrum-150px.png"} alt=""/></div>
                </div>
            </div>
        </section>
    )
}