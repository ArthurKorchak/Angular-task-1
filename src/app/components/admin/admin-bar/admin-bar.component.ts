import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/_core/models/user.model';
import { CsvService } from 'src/app/_core/services/download-csv.service';
import { UserDataService } from 'src/app/_core/services/user-data.service';
import { MainSelectors } from 'src/app/_core/state/main.selectors';

@Component({
  selector: 'app-admin-bar',
  templateUrl: './admin-bar.component.html',
  styleUrls: ['./admin-bar.component.scss']
})
export class AdminBarComponent implements OnInit, OnDestroy {

  private subscription = Subscription.EMPTY;
  public users: User[] | undefined = undefined;
  public usersToDownload: string[] = [];
  public isDownloadPossible = false;

  constructor(
    private userDataService: UserDataService,
    private csvService: CsvService,
    private store$: Store
  ) { };

  public ngOnInit(): void {
    this.userDataService.getUsers();
    this.subscription = this.store$.select(MainSelectors.users).subscribe(resp => {
      this.users = resp;
    });
  };

  public ngOnDestroy(): void { 
    this.subscription.unsubscribe();
  };

  public checkboxHandler(event: any): void {
    !this.usersToDownload.includes(event.target.id)
      ? this.usersToDownload.push(event.target.id)
      : this.usersToDownload = this.usersToDownload.filter(item => item !== event.target.id);
    
    this.usersToDownload.length > 0
      ? this.isDownloadPossible = true
      : this.isDownloadPossible = false;
  };

  public download(): void {
    if (this.users) this.csvService.downloadFile(this.users.filter(item => this.usersToDownload.includes(item.email)), 'Users');
  };
};
