import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainSelectors } from './state/main.selectors';

@Component({
  selector: 'app-root',
  template: `
    <app-login-form *ngIf="!userRole"></app-login-form>
    <div class="page-content">
      <app-dashboard *ngIf="userRole"></app-dashboard>
      <app-admin-bar *ngIf="isUserAdmin"></app-admin-bar>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
    }

    .page-content{
      display: flex;
      justify-content: space-between;
      gap: 50px;
    }
  `]
})
export class AppComponent implements OnInit {

  public userRole = '';
  public isUserAdmin = false;
  
  constructor(private store$: Store) { };
  
  ngOnInit(): void {
    this.store$.select(MainSelectors.userInfo).subscribe(resp => {
      resp?.role ? this.userRole = resp.role : null;
      resp?.role === "Admin" ? this.isUserAdmin = true : null;
    });
  };
};
