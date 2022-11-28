import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MainSelectors } from './_core/state/main.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscription = Subscription.EMPTY;
  public isAdmin = false;
  
  constructor(private store$: Store) { };
  
  public ngOnInit(): void {
    this.subscription = this.store$.select(MainSelectors.userInfo).subscribe(resp => {
      this.isAdmin = resp?.role === "Admin";
    });
  };

  public ngOnDestroy(): void { 
    this.subscription.unsubscribe();
  };
};
