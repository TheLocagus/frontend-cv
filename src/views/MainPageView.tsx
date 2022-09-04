import React from 'react';
import {useParams} from "react-router-dom";
import {MainPage} from "../components/common/MainPage/MainPage";
import {useDispatch} from "react-redux";
import {setLanguage} from "../actions/cvData";
import { LanguageEnum } from 'types';

export const MainPageView = () => {
  const dispatch = useDispatch();
  const param = useParams()
  const {lan} = param

  if (lan === undefined || (lan !== LanguageEnum.english && lan !== LanguageEnum.polish)){
    dispatch(setLanguage(LanguageEnum.english))
  } else {
    dispatch(setLanguage(lan))
  }

  return <MainPage/>
}

