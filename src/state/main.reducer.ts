import { createReducer, on } from '@ngrx/store';
import { Dashboard } from 'src/models/dashboard';
import { UserInfo } from 'src/models/user-info';
import { UserReport } from 'src/models/user-report';
import { MainActions } from './main.actions';

export interface AppState {
  userInfo: UserInfo | null,
  userReports: UserReport[],
  dashboard: Dashboard | null,
};

const initialState: AppState = {
  userInfo: null,
  userReports: [],
  dashboard: null,
};

export const mainReducer = createReducer(
  initialState,
  on(MainActions.setUserInfo, (state, { userInfo }) => ({
    ...state,
    userInfo
  })),

  on(MainActions.setUserReports, (state, { userReports }) => ({
    ...state,
    userReports
  })),

  on(MainActions.setDashboard, (state, { dashboard }) => ({
    ...state,
    dashboard
  }))
);