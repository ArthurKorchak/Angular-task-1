import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { MainActions } from 'src/app/_core/state/main.actions';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private store$: Store) { };

  public getUserReports(): void {
    this.store$.dispatch(MainActions.userReports());
  };

  public getAssessmentReport(id: string): void {
    this.store$.dispatch(MainActions.assessmentReport({ id }));
  };

  public getUsers(): void {
    this.store$.dispatch(MainActions.users());
  };
};