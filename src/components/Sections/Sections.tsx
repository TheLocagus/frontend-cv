import React from 'react';
import {Tech} from "./Tech/Tech";
import {Projects} from "./Projects/Projects";
import {Contact} from "./Contact/Contact";
import {Banner} from "./Banner/Banner";

export const Sections = () => {

  return (
    <>
      <Banner/>
      <Tech/>
      <Projects/>
      <Contact/>
    </>
  )
}