import {BannerInterface, ContactInterface, ContactResponseInterface, LanguageEnum, MenuInterface, ProjectInterface, ProjectResponseInterface} from "types";
import {CvDataAction} from "../action-types/cvData";

export interface CvDataState {
  projects: ProjectResponseInterface;
  contacts: ContactResponseInterface;
  menu: MenuInterface[];
  banner: BannerInterface;
  techTitle: string;
  projectsY: number;
  techY: number;
  contactY: number;
  language: LanguageEnum;
}

const initialState: CvDataState = {
  projects: {
    title: 'My projects',
    projects: [],
  },
  contacts: {
    title: 'Contact',
    contacts: [],
  },
  menu: [],
  banner: {
    id: 0,
    name:'',
    firstParagraph:'',
    secondParagraph: '',
    title: '',
    language: LanguageEnum.polish,
  },
  techTitle: '',
  projectsY: 0,
  techY: 0,
  contactY: 0,
  language: LanguageEnum.polish
}

interface SetProjects {
  type: CvDataAction.SET_PROJECTS,
  payload: ProjectResponseInterface,
}

interface SetContacts {
  type: CvDataAction.SET_CONTACTS,
  payload: ContactResponseInterface,
}

interface SetMenu {
  type: CvDataAction.SET_MENU,
  payload:MenuInterface[],
}

interface SetBanner {
  type: CvDataAction.SET_BANNER,
  payload: BannerInterface,
}

interface SetTechTitle {
  type: CvDataAction.SET_TECH_TITLE,
  payload: string,
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

interface SetLanguage {
  type: CvDataAction.SET_LANGUAGE,
  payload: LanguageEnum,
}

type Action = SetProjects | SetContacts | SetProjectsY | SetTechY | SetContactY | SetMenu | SetBanner | SetTechTitle | SetLanguage;

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
    case CvDataAction.SET_MENU: {
      return {
        ...state,
        menu: action.payload
      }
    }
    case CvDataAction.SET_BANNER: {
      return {
        ...state,
        banner: action.payload
      }
    }
    case CvDataAction.SET_TECH_TITLE: {
      return {
        ...state,
        techTitle: action.payload
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
    case CvDataAction.SET_LANGUAGE: {
      return {
        ...state,
        language: action.payload
      }
    }
    default: return state;
  }
}