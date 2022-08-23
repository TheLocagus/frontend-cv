import React, {useEffect} from 'react';
import {Sections} from "../components/Sections/Sections";
import {DataResponseType} from 'types';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {setContacts, setProjects} from "../actions/cvData";
import {LoadingView} from "./LoadingView/LoadingView";

export const MainPageView = () => {
  const {projects, contacts} = useSelector((store: RootState) => store.cvData)
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const res = await fetch('https://bkolsutjs-cv.networkmanager.pl/api');
      // const res = await fetch('http://bkolsutjs-cv.networkmanager.pl/api');
      const data: DataResponseType = await res.json();
      console.log(data)
      if (data.success) {
        dispatch(setProjects(data.projects.projects))
        dispatch(setContacts(data.contacts.contacts))

      } else {
        // window.location.href = 'http://localhost:3000/error'
        window.location.href = 'https://bkolsutjs-cv.networkmanager.pl/error'
      }
    })()
  }, [])

  if (projects.length === 0 && contacts.length === 0) {
    return <LoadingView/>
  }

  return (
    <Sections/>
  )
}