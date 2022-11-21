import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserReport } from 'src/app/models/user-report';
import { UserDataService } from 'src/app/services/user-data.service';
import { MainSelectors } from 'src/app/state/main.selectors';
import { DashboardModalComponent } from '../dashboard-modal/dashboard-modal.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public userReports: UserReport[] | undefined = undefined;

  constructor(
    private userDataService: UserDataService,
    private modal: ModalComponent,
    private store$: Store
  ) { };

  modalHandler(event: any): void {
    const targetID = event.currentTarget.id;
    this.userDataService.getAssessmentReport(targetID);
    this.modal.openDialog(DashboardModalComponent);
  };

  ngOnInit(): void {
    this.userDataService.getUserReports();
    this.store$.select(MainSelectors.userReports).subscribe(resp => {
      this.userReports = resp;
    });
  };
};
