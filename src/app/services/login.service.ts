import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Store } from '@ngrx/store';
import { MainActions } from '../state/main.actions';
import { API_BASE_URL } from 'src/app/constants/api-params';
import { UserInfo } from 'src/app/models/user-info';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private store$: Store) { }

  getUserInfo(email: string, password: string): void {

    this.http.post<UserInfo>(`${API_BASE_URL}/api/login`, { email, password })
      .subscribe(res => {
        this.store$.dispatch(MainActions.setUserInfo({ userInfo: res }));
      });
  };
};