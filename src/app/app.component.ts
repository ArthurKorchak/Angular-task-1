import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainSelectors } from './state/main.selectors';

@Component({
  selector: 'app-root',
  template: `
    <app-login-form *ngIf="!userRole"></app-login-form>
    <app-dashboard *ngIf="userRole"></app-dashboard>
    <app-admin-bar *ngIf="isUserAdmin"></app-admin-bar>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  public userRole = '';
  public isUserAdmin = false;
  
  constructor(private store$: Store) { };
  
  ngOnInit(): void {
    this.store$.select(MainSelectors.userInfo).subscribe(resp => {
      this.userRole = resp.role;
      if (resp.role === "Admin") {
        this.isUserAdmin = true;
      };
    });
  };
};
