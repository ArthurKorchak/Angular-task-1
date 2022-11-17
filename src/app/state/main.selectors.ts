import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './main.reducer';

export namespace MainSelectors {
  export const allState = createFeatureSelector<AppState>('main');

  export const userInfo = createSelector(allState, state => state.userInfo);

  export const userReports = createSelector(allState, state => state.userReports);

  export const dashboard = createSelector(allState, state => state.assessmentReport);
}
