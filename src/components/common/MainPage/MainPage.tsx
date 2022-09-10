import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {setBanner, setContacts, setProjects, setTechTitle} from "../../../actions/cvData";
import {LoadingView} from "../../../views/LoadingView/LoadingView";
import {Sections} from "../../Sections/Sections";
import {DataResponseType} from 'types';
import {apiUrl, frontUrl} from "../../../utils/urls";


export const MainPage = () => {

  const {projects, contacts, banner, techTitle, language} = useSelector((store: RootState) => store.cvData)
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      if (language !== undefined && language !== null) {
        const res = await fetch(`${apiUrl}/lan/${language}`);

        const data: DataResponseType = await res.json()

        if (data.success) {
          const {projects, contacts, banner, techTitle} = data;
          dispatch(setProjects(projects))
          dispatch(setContacts(contacts))
          dispatch(setBanner(banner.banner))
          dispatch(setTechTitle(techTitle))
        } else {
          window.location.href = `${frontUrl}/error`
        }
      }
    })()
  }, [language])

  if (
    projects.projects.length === 0
    ||
    contacts.contacts.length === 0
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