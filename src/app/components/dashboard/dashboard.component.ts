import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
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
export class DashboardComponent implements OnInit, OnDestroy {

  public userReports: UserReport[] | undefined = undefined;
  private subscription = Subscription.EMPTY;

  constructor(
    private userDataService: UserDataService,
    private modal: ModalComponent,
    private store$: Store
  ) { };

  modalHandler(event: any): void {
    const eventID = event.currentTarget.id;
    this.modal.openDialog(DashboardModalComponent, {
      targetID: eventID,
      report: this.userReports?.find(item => item.id === +eventID)
    });
  };

  ngOnInit(): void {
    this.userDataService.getUserReports();
    this.subscription = this.store$.select(MainSelectors.userReports).subscribe(resp => {
      this.userReports = resp;
    });
  };

  ngOnDestroy(): void { 
    this.subscription.unsubscribe();
  };
};
