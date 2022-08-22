import {ContactInterface, ProjectInterface } from "types";
import {CvDataAction} from "../action-types/cvData";

export const setProjects = (projects: ProjectInterface[]) => ({
  type: CvDataAction.SET_PROJECTS,
  payload: projects,
})

export const setContacts = (contacts: ContactInterface[]) => ({
  type: CvDataAction.SET_CONTACTS,
  payload: contacts,
})

export const setProjectsY = (projectsY: number) => ({
  type: CvDataAction.SET_PROJECTS_Y,
  payload: projectsY,
})