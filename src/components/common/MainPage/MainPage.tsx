import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {setBanner, setContacts, setMenu, setProjects, setTechTitle} from "../../../actions/cvData";
import {LoadingView} from "../../../views/LoadingView/LoadingView";
import {Sections} from "../../Sections/Sections";
import {DataResponseType} from 'types';


export const MainPage = () => {

  const {projects, contacts, menu, banner, techTitle, language} = useSelector((store: RootState) => store.cvData)
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const getValues = () => {
        return (async () => {
          if (language !== undefined){
            // return await fetch('https://bkolsutjs-cv.networkmanager.pl/api/lan/${language}');
            return await fetch(`http://localhost:3001/api/lan/${language}`);
          } else {
            return await fetch(`http://localhost:3001/api/`);
            // return await fetch(`http://bkolsutjs-cv.networkmanager.pl/api/`);
          }
        })
      }

      const getData = getValues();
      const data: DataResponseType = await (await getData()).json()

      if (data.success) {
        const {projects, contacts, menu, banner, techTitle} = data;
        dispatch(setProjects(projects))
        dispatch(setContacts(contacts))
        dispatch(setMenu(menu.menu))
        dispatch(setBanner(banner.banner))
        dispatch(setTechTitle(techTitle))
      } else {
        // window.location.href = 'http://localhost:3000/error'
        // window.location.href = 'https://bkolsutjs-cv.networkmanager.pl/error'
      }
    })()
  }, [])

  if (
    projects.projects.length === 0
    ||
    contacts.contacts.length === 0
    ||
    menu.length === 0
    ||
    banner.id === 0
    ||
    techTitle.length === 0
  ) {
    return <LoadingView/>
  }

  return (
    <Sections/>
  )
}