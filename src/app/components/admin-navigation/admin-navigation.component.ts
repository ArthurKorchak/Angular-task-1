import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainActions } from 'src/app/state/main.actions';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.scss']
})
export class AdminNavigationComponent {

  constructor(private store$: Store) { };

  navigateHandler(event: any): void {
    this.store$.dispatch(MainActions.setView({ currentView: event.currentTarget.id }));
  };
};
