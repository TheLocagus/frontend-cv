import React, {useEffect} from 'react';
import {AboutMe} from "../components/Header/AboutMe";
import {Sections} from "../components/Sections/Sections";
import {DataResponseType} from 'types';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {setContacts, setProjects} from "../actions/cvData";

export const MainPageView = () => {
  const {projects, contacts} = useSelector((store: RootState) => store.cvData)
  const dispatch = useDispatch();
    useEffect(() => {
      (async () => {
        const res = await fetch('http://localhost:3001/api');
        const data: DataResponseType = await res.json();
        console.log(data)
        if (data.success) {
          dispatch(setProjects(data.projects.projects))
          dispatch(setContacts(data.contacts.contacts))

        } else {
          window.location.href = 'http://localhost:3000/error'
        }
      })()
    }, [])

    return (
        <main>
            <AboutMe/>
            <Sections/>
        </main>
    )
}