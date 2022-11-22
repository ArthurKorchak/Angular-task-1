import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MainSelectors } from './state/main.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public isAdmin = false;
  private subscription = Subscription.EMPTY;
  
  constructor(private store$: Store) { };
  
  ngOnInit(): void {
    this.subscription = this.store$.select(MainSelectors.userInfo).subscribe(resp => {
      this.isAdmin = resp?.role === "Admin";
    });
  };

  ngOnDestroy(): void { 
    this.subscription.unsubscribe();
  };
};
