import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { UserDataService } from 'src/app/services/user-data.service';
import { MainSelectors } from 'src/app/state/main.selectors';

@Component({
  selector: 'app-admin-bar',
  templateUrl: './admin-bar.component.html',
  styleUrls: ['./admin-bar.component.scss']
})
export class AdminBarComponent implements OnInit {

  public users: User[] | undefined = undefined;

  constructor(private userDataService: UserDataService, private store$: Store) { };

  ngOnInit(): void {
    this.userDataService.getUsers();
    this.store$.select(MainSelectors.users).subscribe(resp => {
      this.users = resp;
    });
  };
};
