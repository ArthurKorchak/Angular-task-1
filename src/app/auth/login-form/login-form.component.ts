import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MainSelectors } from 'src/app/_core/state/main.selectors';
import { MainActions } from "../../_core/state/main.actions";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {
  
  private subscriptions = new Subscription();
  public form: FormGroup = new FormGroup({
    mail: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });
  public error = false;
  
  constructor(
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
    this.store$.dispatch(MainActions.userInfo({ email: form.value.mail, password: form.value.password }));
  };
};
