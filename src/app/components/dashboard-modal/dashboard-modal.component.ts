import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AssessmentReport } from 'src/app/models/assessment-report';
import { UserDataService } from 'src/app/services/user-data.service';
import { MainSelectors } from 'src/app/state/main.selectors';

@Component({
  selector: 'app-dashboard-modal',
  templateUrl: './dashboard-modal.component.html',
  styles: []
})
export class DashboardModalComponent {

  public assessmentReport: AssessmentReport | undefined = undefined;

  constructor(private userDataService: UserDataService, private store$: Store) { };

  ngOnInit(): void {
    this.userDataService.getUserReports();
    this.store$.select(MainSelectors.assessmentReport).subscribe(resp => {
      this.assessmentReport = resp;
    });
  };
};