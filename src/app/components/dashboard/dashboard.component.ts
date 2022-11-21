import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserReport } from 'src/app/models/user-report';
import { UserDataService } from 'src/app/services/user-data.service';
import { MainSelectors } from 'src/app/state/main.selectors';

@Component({
  selector: 'app-dashboard',
  template: `
    <ul class="container">
      <li *ngFor="let report of userReports">
        <mat-card>
          <mat-card-content>
            <div class="text-data">
              <p class="title">{{report.name}}</p>
              <p>Users resolved: {{report.users_resolved}}</p>
              <p>Status: {{report.active ? 'Active' : 'Outdated'}}</p>
            </div>
            <img class="img-data" src={{report.image_url}} alt="report.name">
          </mat-card-content>
        </mat-card>
      </li>
    </ul>
    <div class="modal">

    </div>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public selectedUserReport: UserReport | null = null;
  public userReports: UserReport[] = [];
  public isModalShow = false;

  constructor(private userDataService: UserDataService, private store$: Store) { }

  ngOnInit(): void {
    this.userDataService.getUserReports();
    this.store$.select(MainSelectors.userReports).subscribe(resp => {
      this.userReports = resp;
    });
  };

};
