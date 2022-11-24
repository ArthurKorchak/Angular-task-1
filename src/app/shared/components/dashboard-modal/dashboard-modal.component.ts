import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AssessmentReport } from 'src/app/core/models/assessment-report';
import { UserDataService } from 'src/app/core/services/user-data.service';
import { MainSelectors } from 'src/app/core/state/main.selectors';
import { DialogData } from 'src/app/core/models/dialog-data';
import { UserReport } from 'src/app/core/models/user-report';

@Component({
  selector: 'app-dashboard-modal',
  templateUrl: './dashboard-modal.component.html',
  styleUrls: ['./dashboard-modal.component.scss']
})
export class DashboardModalComponent implements OnInit, OnDestroy {

  private subscription = Subscription.EMPTY;
  public assessmentReport: AssessmentReport | undefined = undefined;
  public report: UserReport = this.data.report;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private userDataService: UserDataService,
    private store$: Store
  ) { };

  public ngOnInit(): void {
    this.userDataService.getAssessmentReport(this.data.targetID);
    this.subscription = this.store$.select(MainSelectors.assessmentReport).subscribe(resp => {
      if (resp) this.assessmentReport = resp;
    });
  };
  
  public ngOnDestroy(): void { 
    this.subscription.unsubscribe();
  };
};