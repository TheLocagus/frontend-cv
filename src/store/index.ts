import {combineReducers, createStore} from "redux";
import cvDataReducer from "../reducers/cvData-reducer";


const rootReducer = combineReducers({
  cvData: cvDataReducer
})

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>