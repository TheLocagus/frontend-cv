import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {setBanner, setContacts, setProjects, setTechTitle} from "../../../actions/cvData";
import {LoadingView} from "../../../views/LoadingView/LoadingView";
import {Sections} from "../../Sections/Sections";
import {DataResponseType} from 'types';
import {frontUrl} from "../../../utils/urls";


export const MainPage = () => {

  const {projects, contacts, banner, techTitle, language} = useSelector((store: RootState) => store.cvData)
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const getValues = () => {
        return (async () => {
          if (language !== undefined){
            return await fetch(`${frontUrl}/api/lan/${language}`);
          } else {
            return await fetch(`${frontUrl}/api/`);
          }
        })
      }

      const getData = getValues();
      const data: DataResponseType = await (await getData()).json()

      if (data.success) {
        const {projects, contacts, banner, techTitle} = data;
        dispatch(setProjects(projects))
        dispatch(setContacts(contacts))
        dispatch(setBanner(banner.banner))
        dispatch(setTechTitle(techTitle))
      } else {
        // window.location.href = 'http://localhost:3000/error'
        window.location.href = `${frontUrl}/error`
      }
    })()
  }, [])

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