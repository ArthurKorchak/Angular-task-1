import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { CsvService } from 'src/app/services/download-csv.service';
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
  public usersToDownload: string[] = [];
  public isDownloadPossible = false;

  constructor(
    private userDataService: UserDataService,
    private csvService: CsvService,
    private store$: Store
  ) { };

  checkboxHandler(event: any) {
    if (!this.usersToDownload.includes(event.target.id)) {
      this.usersToDownload.push(event.target.id);
    } else {
      this.usersToDownload = this.usersToDownload.filter(item => item !== event.target.id);
    };
    this.usersToDownload.length > 0 ? this.isDownloadPossible = true : this.isDownloadPossible = false;
  };

  download() {
    this.csvService.downloadFile(this.users?.filter(item => this.usersToDownload.includes(item.email)), 'Users');
  };

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
