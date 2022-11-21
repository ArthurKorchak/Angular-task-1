import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Store } from '@ngrx/store';
import { MainActions } from 'src/app/state/main.actions';
import { API_BASE_URL } from 'src/app/constants/api-params';
import { MainSelectors } from 'src/app/state/main.selectors';
import { UserReport } from 'src/app/models/user-report';
import { AssessmentReport } from 'src/app/models/assessment-report';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private token = '';

  constructor(private http: HttpClient, private store$: Store) {
    this.store$.select(MainSelectors.userInfo).subscribe(resp => {
      resp?.token ? this.token = resp.token : null;
    });
  };

  getUserReports(): void {
    const headers = new HttpHeaders({ 'X-Token': this.token });

    this.http.get<UserReport[]>(`${API_BASE_URL}/api/userassessments`, { headers })
      .subscribe(res => {
        this.store$.dispatch(MainActions.setUserReports({ userReports: res }));
      });
  };

  getAssessmentReport(id: string): void {
    const headers = new HttpHeaders({ 'X-Token': this.token });

    this.store$.dispatch(MainActions.setAssessmentReport({ assessmentReport: {
      data: {
        Agreeableness: 0,
        Drive: 0,
        Luck: 0,
        Openess: 0
      },
      type: "bar"
    }}));
    this.http.get<AssessmentReport>(`${API_BASE_URL}/api/userassessment/graph?id=${id}`, { headers })
      .subscribe(res => {
        this.store$.dispatch(MainActions.setAssessmentReport({ assessmentReport: res }));
      });
  };

  getUsers(): void {
    const headers = new HttpHeaders({ 'X-Token': this.token });

    this.http.get<User[]>(`${API_BASE_URL}/api/users`, { headers })
      .subscribe(res => {
        this.store$.dispatch(MainActions.setUsers({ users: res }));
      });
  };
};