import { createAction, props } from '@ngrx/store';
import { Dashboard } from 'src/models/dashboard';
import { UserInfo } from 'src/models/user-info';
import { UserReport } from 'src/models/user-report';

export namespace MainActions {
  export const setUserInfo = createAction(
    'SET_USER_INFO',
    props<{ userInfo: UserInfo }>()
  );

  export const setUserReports = createAction(
    'SET_USER_REPORTS',
    props<{ userReports: UserReport[] }>()
  );

  export const setDashboard = createAction(
    'SET_DASHBOARD',
    props<{ dashboard: Dashboard }>()
  );
};