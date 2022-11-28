import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from "rxjs";

import { MainApiService } from "../api/main.api.service";
import { MainActions } from "./main.actions";
import { UserInfo } from "../models/user-info.model";
import { UserReport } from "../models/user-report.model";
import { AssessmentReport } from "../models/assessment-report.model";
import { User } from "../models/user.model";

@Injectable()
export class MainEffects {

  constructor(
    private actions$: Actions,
    private mainApiService: MainApiService
  ) { };

  userInfo$ = createEffect(() => this.actions$.pipe(
    ofType(MainActions.userInfo),
    switchMap(({ email, password }) => this.mainApiService.getUserInfo(email, password).pipe(
      map((userInfo: UserInfo) => MainActions.userInfoSuccess({ userInfo })),
      catchError(() => of(MainActions.userInfoFailure())),
    ))
  ));

  userReports$ = createEffect(() => this.actions$.pipe(
    ofType(MainActions.userReports),
    switchMap(() => this.mainApiService.getUserReports().pipe(
      map((userReports: UserReport[]) => MainActions.userReportsSuccess({ userReports })),
      catchError(() => {
        alert('Application error!');
        return of(MainActions.userReportsFailure());
      }),
    ))
  ));
  
  assessmentReport$ = createEffect(() => this.actions$.pipe(
    ofType(MainActions.assessmentReport),
    switchMap(({ id }) => this.mainApiService.getAssessmentReport(id).pipe(
      map((assessmentReport: AssessmentReport) => MainActions.assessmentReportSuccess({ assessmentReport })),
      catchError(() => {
        alert('Application error!');
        return of(MainActions.assessmentReportFailure());
      }),
    ))
  ));

  users$ = createEffect(() => this.actions$.pipe(
    ofType(MainActions.users),
    switchMap(() => this.mainApiService.getUsers().pipe(
      map((users: User[]) => MainActions.usersSuccess({ users })),
      catchError(() => {
        alert('Application error!');
        return of(MainActions.usersFailure());
      }),
    ))
  ));
};