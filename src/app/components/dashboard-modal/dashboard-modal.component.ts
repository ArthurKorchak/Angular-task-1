import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AssessmentReport } from 'src/app/models/assessment-report';
import { UserDataService } from 'src/app/services/user-data.service';
import { MainSelectors } from 'src/app/state/main.selectors';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/dialog-data';
import { Subscription } from 'rxjs';
import { UserReport } from 'src/app/models/user-report';

@Component({
  selector: 'app-dashboard-modal',
  templateUrl: './dashboard-modal.component.html',
  styleUrls: ['./dashboard-modal.component.scss']
})
export class DashboardModalComponent implements OnInit, OnDestroy {

  public assessmentReport: AssessmentReport | undefined = undefined;
  public report: UserReport = this.data.report;
  private subscription = Subscription.EMPTY;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private userDataService: UserDataService,
    private store$: Store
  ) { };

  ngOnInit(): void {
    this.userDataService.getAssessmentReport(this.data.targetID);
    this.subscription = this.store$.select(MainSelectors.assessmentReport).subscribe(resp => {
      if (resp) this.assessmentReport = resp;
    });
  };
  
  ngOnDestroy(): void { 
    this.subscription.unsubscribe();
  };
};