import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { MainActions } from '../state/main.actions';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private store$: Store) { };

  public getUserInfo(email: string, password: string): void {
    this.store$.dispatch(MainActions.userInfo({ email, password }));
  };
};