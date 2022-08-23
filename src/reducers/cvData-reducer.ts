import {ContactInterface, ProjectInterface} from "types";
import {CvDataAction} from "../action-types/cvData";

export interface CvDataState {
  projects: ProjectInterface[];
  contacts: ContactInterface[];
  projectsY: number;
  techY: number;
  contactY: number;
}

const initialState: CvDataState = {
  projects: [],
  contacts: [],
  projectsY: 0,
  techY: 0,
  contactY: 0,
}

interface SetProjects {
  type: CvDataAction.SET_PROJECTS,
  payload: ProjectInterface[],
}

interface SetContacts {
  type: CvDataAction.SET_CONTACTS,
  payload: ContactInterface[],
}

interface SetProjectsY {
  type: CvDataAction.SET_PROJECTS_Y,
  payload: number,
}
interface SetTechY {
  type: CvDataAction.SET_TECH_Y,
  payload: number,
}
interface SetContactY {
  type: CvDataAction.SET_CONTACT_Y,
  payload: number,
}

type Action = SetProjects | SetContacts | SetProjectsY | SetTechY | SetContactY;

export default (state: CvDataState = initialState, action: Action) => {
  switch(action.type){
    case CvDataAction.SET_PROJECTS: {
      return {
        ...state,
        projects: action.payload
      }
    }
    case CvDataAction.SET_CONTACTS: {
      return {
        ...state,
        contacts: action.payload
      }
    }
    case CvDataAction.SET_PROJECTS_Y: {
      return {
        ...state,
        projectsY: action.payload
      }
    }
    case CvDataAction.SET_TECH_Y: {
      return {
        ...state,
        techY: action.payload
      }
    }
    case CvDataAction.SET_CONTACT_Y: {
      return {
        ...state,
        contactY: action.payload
      }
    }
    default: return state;
  }
}