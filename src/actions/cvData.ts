import {BannerInterface, ContactInterface, ContactResponseInterface,
  LanguageEnum, MenuInterface, ProjectInterface, ProjectResponseInterface } from "types";
import {CvDataAction} from "../action-types/cvData";

export const setProjects = (projects: ProjectResponseInterface) => ({
  type: CvDataAction.SET_PROJECTS,
  payload: projects,
})

export const setContacts = (contacts: ContactResponseInterface) => ({
  type: CvDataAction.SET_CONTACTS,
  payload: contacts,
})

export const setMenu = (menu: MenuInterface[]) => ({
  type: CvDataAction.SET_MENU,
  payload: menu,
})

export const setBanner = (banner: BannerInterface) => ({
  type: CvDataAction.SET_BANNER,
  payload: banner,
})

export const setTechTitle = (techTitle: string) => ({
  type: CvDataAction.SET_TECH_TITLE,
  payload: techTitle,
})

export const setProjectsY = (projectsY: number) => ({
  type: CvDataAction.SET_PROJECTS_Y,
  payload: projectsY,
})

export const setTechY = (techY: number) => ({
  type: CvDataAction.SET_TECH_Y,
  payload: techY,
})

export const setContactY = (contactY: number) => ({
  type: CvDataAction.SET_CONTACT_Y,
  payload: contactY,
})

export const setLanguage = (language: LanguageEnum) => ({
  type: CvDataAction.SET_LANGUAGE,
  payload: language,
})