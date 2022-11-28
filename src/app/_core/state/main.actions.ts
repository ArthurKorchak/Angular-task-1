import { createAction, props } from '@ngrx/store';

import { AssessmentReport } from 'src/app/_core/models/assessment-report.model';
import { UserInfo } from 'src/app/_core/models/user-info.model';
import { UserReport } from 'src/app/_core/models/user-report.model';
import { User } from '../models/user.model';

export namespace MainActions {

  export const userInfo = createAction('USER_INFO', props<{ email: string, password: string }>());
  export const userInfoSuccess = createAction('USER_INFO_SUCCESS', props<{ userInfo: UserInfo }>());
  export const userInfoFailure = createAction('USER_INFO_FAILURE');

  export const userReports = createAction('USER_REPORTS');
  export const userReportsSuccess = createAction('USER_REPORTS_SUCCESS', props<{ userReports: UserReport[] }>());
  export const userReportsFailure = createAction('USER_REPORTS_FAILURE');

  export const assessmentReport = createAction('ASSESSMENT_REPORT', props<{ id: string }>());
  export const assessmentReportSuccess = createAction('ASSESSMENT_REPORT_SUCCESS', props<{ assessmentReport: AssessmentReport }>());
  export const assessmentReportFailure = createAction('ASSESSMENT_REPORT_FAILURE');

  export const users = createAction('USERS');
  export const usersSuccess = createAction('USERS_SUCCESS', props<{ users: User[] }>());
  export const usersFailure = createAction('USERS_FAILURE');
};