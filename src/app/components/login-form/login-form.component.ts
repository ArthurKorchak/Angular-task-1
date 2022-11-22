import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginService } from 'src/app/services/login.service';
import { MainSelectors } from 'src/app/state/main.selectors';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
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

  submit(form: FormGroupDirective) {
    this.loginService.getUserInfo(form.value.mail, form.value.password);
  };

  ngOnInit(): void {
    this.store$.select(MainSelectors.loginError).subscribe(resp => {
      this.error = resp;
    });
    this.store$.select(MainSelectors.userInfo).subscribe(resp => {
      if (resp) this.router.navigate(['/dashboard']);
    });
  };
};
