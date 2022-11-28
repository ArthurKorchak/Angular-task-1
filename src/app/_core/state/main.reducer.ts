import { createReducer, on } from '@ngrx/store';
import { AssessmentReport } from 'src/app/_core/models/assessment-report.model';
import { UserInfo } from 'src/app/_core/models/user-info.model';
import { UserReport } from 'src/app/_core/models/user-report.model';
import { User } from '../models/user.model';
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

  on(MainActions.userInfo, (state) => ({ ...state, loginError: false })),
  on(MainActions.userInfoSuccess, (state, { userInfo }) => ({ ...state, userInfo })),
  on(MainActions.userInfoFailure, (state) => ({ ...state, loginError: true })),

  on(MainActions.userReportsSuccess, (state, { userReports }) => ({ ...state, userReports })),
  on(MainActions.userReportsFailure, (state) => ({ ...state, userReports: undefined})),

  on(MainActions.assessmentReportSuccess, (state, { assessmentReport }) => ({ ...state, assessmentReport })),
  on(MainActions.assessmentReportFailure, (state) => ({ ...state, assessmentReport: undefined })),

  on(MainActions.usersSuccess, (state, { users }) => ({ ...state, users })),
  on(MainActions.usersFailure, (state) => ({ ...state, users: undefined }))
);