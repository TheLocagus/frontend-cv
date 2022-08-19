import React from "react";
import {Route, Routes} from "react-router-dom";
import './App.scss';
import {Navigation} from "./components/Navigation/Navigation";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {MainPageView} from "./views/MainPageView";

export const App = () => {
    return (
        <div className="App">
            <Navigation/>
            <Routes>
                <Route path='/' element={<MainPageView/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}


