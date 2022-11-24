import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/core/services/login.service';
import { MainSelectors } from 'src/app/core/state/main.selectors';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {
  
  private subscriptions = new Subscription();
  public form: FormGroup = new FormGroup({
    mail: new FormControl(''),
    password: new FormControl(''),
  });
  public error = false;
  
  constructor(
    private loginService: LoginService,
    private store$: Store,
    private router: Router
  ) { };

  public ngOnInit(): void {
    this.subscriptions.add(this.store$.select(MainSelectors.loginError).subscribe(resp => {
      this.error = resp;
    }));
    this.subscriptions.add(this.store$.select(MainSelectors.userInfo).subscribe(resp => {
      if (resp) this.router.navigate(['dashboard']);
    }));
  };

  public ngOnDestroy(): void { 
    this.subscriptions.unsubscribe();
  };

  public submit(form: FormGroupDirective): void {
    this.loginService.getUserInfo(form.value.mail, form.value.password);
  };
};
