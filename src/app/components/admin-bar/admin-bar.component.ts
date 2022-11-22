import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserDataService } from 'src/app/services/user-data.service';
import { MainSelectors } from 'src/app/state/main.selectors';

@Component({
  selector: 'app-admin-bar',
  templateUrl: './admin-bar.component.html',
  styleUrls: ['./admin-bar.component.scss']
})
export class AdminBarComponent implements OnInit, OnDestroy {

  public users: User[] | undefined = undefined;
  private subscription = Subscription.EMPTY;

  constructor(private userDataService: UserDataService, private store$: Store) { };

  ngOnInit(): void {
    this.userDataService.getUsers();
    this.subscription = this.store$.select(MainSelectors.users).subscribe(resp => {
      this.users = resp;
    });
  };

  ngOnDestroy(): void { 
    this.subscription.unsubscribe();
  };
};
