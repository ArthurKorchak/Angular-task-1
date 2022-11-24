import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MainSelectors } from '../state/main.selectors';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  private isAdmin = false;

  constructor(private router: Router, private store$: Store) {
    this.store$.select(MainSelectors.userInfo).subscribe(resp => {
      this.isAdmin = resp?.role === "Admin";
    });
  };

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    if (!this.isAdmin) {
      this.router.navigate(['']);
      return false;
    };
    
    return true;
  };
};