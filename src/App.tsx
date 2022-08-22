import React, {useRef} from "react";
import {Route, Routes} from "react-router-dom";
import './App.scss';
import {Navigation} from "./components/Navigation/Navigation";
import {AboutMe} from "./components/Header/AboutMe";
import {Footer} from "./components/Footer/Footer";
import {MainPageView} from "./views/MainPageView";
import {ErrorView} from "./views/ErrorView/ErrorView";

export const App = () => {

  const appRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const showY = (e: any) => {
    // console.log("Wartość Y kliknięta: ", e.pageY)
    // console.log("Wartość Y na aktualnym widoku ", e.clientY)
    // console.log("Wysokość ekranu", window.innerHeight)
    // console.log("Góra ekranu ", window.scrollY)
  }
    return (
        <div className="App" ref={appRef} onClick={showY}>
            <Navigation/>
            <Routes>
                <Route path='/' element={<MainPageView/>}/>
                <Route path='/error' element={<ErrorView/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}


