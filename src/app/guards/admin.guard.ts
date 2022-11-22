import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MainSelectors } from '../state/main.selectors';
import { UserInfo } from '../models/user-info';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  private isAdmin = false;

  constructor(private store$: Store) {
    this.store$.select(MainSelectors.userInfo).subscribe(resp => {
      this.isAdmin = resp?.role === "Admin";
    });
  };

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.isAdmin;
  };
};