import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AssessmentReport } from "../models/assessment-report.model";
import { UserInfo } from "../models/user-info.model";
import { UserReport } from "../models/user-report.model";
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class MainApiService { 

  apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { };

  public getUserInfo(email: string, password: string): Observable<UserInfo> {
    return this.http.post<UserInfo>(`${this.apiBaseUrl}/api/login`, { email, password });
  };
  
  public getUserReports(): Observable<UserReport[]> {
    return this.http.get<UserReport[]>(`${this.apiBaseUrl}/api/userassessments`);
  };

  public getAssessmentReport(id: string): Observable<AssessmentReport> {
    return this.http.get<AssessmentReport>(`${this.apiBaseUrl}/api/userassessment/graph?id=${id}`);
  };

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiBaseUrl}/api/users`);
  };
};