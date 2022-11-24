import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Store } from '@ngrx/store';
import { MainActions } from '../state/main.actions';
import { API_BASE_URL } from 'src/app/core/constants/api-params';
import { UserInfo } from 'src/app/core/models/user-info';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private store$: Store) { };

  public getUserInfo(email: string, password: string): void {
    this.store$.dispatch(MainActions.setLoginError({ loginError: false }));
    this.http.post<UserInfo>(`${API_BASE_URL}/api/login`, { email, password })
      .subscribe({
        next: (data) => this.store$.dispatch(MainActions.setUserInfo({ userInfo: data })),
        error: () => this.store$.dispatch(MainActions.setLoginError({ loginError: true })),
      });
  };
};