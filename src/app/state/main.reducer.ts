import { createReducer, on } from '@ngrx/store';
import { AssessmentReport } from 'src/app/models/assessment-report';
import { UserInfo } from 'src/app/models/user-info';
import { UserReport } from 'src/app/models/user-report';
import { MainActions } from './main.actions';

export interface AppState {
  loginError: boolean,
  userInfo: UserInfo ,
  userReports: UserReport[],
  assessmentReport: AssessmentReport,
};

const initialState: AppState = {
  loginError: false,
  userInfo: {
    first_name: '',
    last_name: '',
    role: '',
    token: ''
  },
  userReports: [],
  assessmentReport: {
    data: {
      Agreeableness: 0,
      Drive: 0,
      Luck: 0,
      Openess: 0
    },
    type: ''
  },
};

export const mainReducer = createReducer(
  initialState,
  on(MainActions.setLoginError, (state, { loginError }) => ({
    ...state,
    loginError
  })),

  on(MainActions.setUserInfo, (state, { userInfo }) => ({
    ...state,
    userInfo
  })),

  on(MainActions.setUserReports, (state, { userReports }) => ({
    ...state,
    userReports
  })),

  on(MainActions.setAssessmentReport, (state, { assessmentReport }) => ({
    ...state,
    assessmentReport
  }))
);