import { createReducer, on } from '@ngrx/store';
import { AssessmentReport } from 'src/app/models/assessment-report';
import { UserInfo } from 'src/app/models/user-info';
import { UserReport } from 'src/app/models/user-report';
import { User } from '../models/user';
import { MainActions } from './main.actions';

export interface AppState {
  loginError: boolean,
  userInfo: UserInfo | undefined,
  userReports: UserReport[] | undefined,
  assessmentReport: AssessmentReport | undefined,
  users: User[] | undefined
};

const initialState: AppState = {
  loginError: false,
  userInfo: undefined,
  userReports: undefined,
  assessmentReport: undefined,
  users: undefined
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
  })),

  on(MainActions.setUsers, (state, { users }) => ({
    ...state,
    users
  }))
);