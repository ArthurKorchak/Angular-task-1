import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainSelectors } from './state/main.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public userRole = '';
  public isAdmin = false;
  public isAdminBarShowing = false;
  
  constructor(private store$: Store) { };
  
  ngOnInit(): void {
    this.store$.select(MainSelectors.currentView).subscribe(resp => {
      this.isAdminBarShowing = resp === "admin";
    });
    this.store$.select(MainSelectors.userInfo).subscribe(resp => {
      resp?.role ? this.userRole = resp.role : null;
      this.isAdmin = resp?.role === "Admin";
    });
  };
};
