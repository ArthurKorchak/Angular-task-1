import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from './main.reducer';

export namespace MainSelectors {
  export const allState = createFeatureSelector<AppState>('main');

  export const loginError = createSelector(allState, state => state.loginError);

  export const userInfo = createSelector(allState, state => state.userInfo);

  export const userReports = createSelector(allState, state => state.userReports);

  export const assessmentReport = createSelector(allState, state => state.assessmentReport);

  export const users = createSelector(allState, state => state.users);
};
