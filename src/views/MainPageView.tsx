import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {MainPage} from "../components/common/MainPage/MainPage";
import {useDispatch, useSelector} from "react-redux";
import {setLanguage} from "../actions/cvData";
import { LanguageEnum } from 'types';
import {RootState} from "../store";

export const MainPageView = () => {
  const {language} = useSelector((store: RootState) => store.cvData)
  const dispatch = useDispatch();
  const param = useParams()
  const {lan} = param;

  useEffect(()=>{
    if (lan === undefined || (lan !== LanguageEnum.english && lan !== LanguageEnum.polish)){
      dispatch(setLanguage(LanguageEnum.english))
    } else {
      dispatch(setLanguage(lan))
    }
  }, [])

  return <MainPage/>
}

