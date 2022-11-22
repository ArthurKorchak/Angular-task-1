import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainSelectors } from './state/main.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isAdmin = false;
  
  constructor(private store$: Store) { };
  
  ngOnInit(): void {
    this.store$.select(MainSelectors.userInfo).subscribe(resp => {
      this.isAdmin = resp?.role === "Admin";
    });
  };
};
