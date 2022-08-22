import {ContactInterface, ProjectInterface} from "types";
import {CvDataAction} from "../action-types/cvData";

export interface CvDataState {
  projects: ProjectInterface[];
  contacts: ContactInterface[];
  projectsY: number;
}

const initialState: CvDataState = {
  projects: [],
  contacts: [],
  projectsY: 0,
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

type Action = SetProjects | SetContacts | SetProjectsY;

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
    default: return state;
  }
}