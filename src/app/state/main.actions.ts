import { createAction, props } from '@ngrx/store';
import { AssessmentReport } from 'src/app/models/assessment-report';
import { UserInfo } from 'src/app/models/user-info';
import { UserReport } from 'src/app/models/user-report';
import { User } from '../models/user';

export namespace MainActions {
  export const setLoginError = createAction(
    'SET_LOGIN_ERROR',
    props<{ loginError: boolean }>()
  );

  export const setView = createAction(
    'SET_VIEW',
    props<{ currentView: string }>()
  );

  export const setUserInfo = createAction(
    'SET_USER_INFO',
    props<{ userInfo: UserInfo }>()
  );

  export const setUserReports = createAction(
    'SET_USER_REPORTS',
    props<{ userReports: UserReport[] }>()
  );

  export const setAssessmentReport = createAction(
    'SET_ASSESSMENT_REPORT',
    props<{ assessmentReport: AssessmentReport | undefined}>()
  );

  export const setUsers = createAction(
    'SET_USERS',
    props<{ users: User[] }>()
  );
};