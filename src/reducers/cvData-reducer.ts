import {ContactInterface, ProjectInterface} from "types";
import {CvDataAction} from "../action-types/cvData";

export interface CvDataState {
  projects: ProjectInterface[];
  contacts: ContactInterface[];
}

const initialState: CvDataState = {
  projects: [],
  contacts: [],
}

interface SetProjects {
  type: CvDataAction.SET_PROJECTS,
  payload: ProjectInterface[],
}

interface SetContacts {
  type: CvDataAction.SET_CONTACTS,
  payload: ContactInterface[],
}

type Action = SetProjects | SetContacts;

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
    default: return state;
  }
}