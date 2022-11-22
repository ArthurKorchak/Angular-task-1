import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MainSelectors } from '../state/main.selectors';
import { UserInfo } from '../models/user-info';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {

  private userInfo: UserInfo | undefined;

  constructor(private router: Router, private store$: Store) {
    this.store$.select(MainSelectors.userInfo).subscribe(resp => {
      this.userInfo = resp;
    });
  };

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (!this.userInfo) {
      this.router.navigate(['']);
      return false;
    };
    
    return true;
  };
};