import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AdminBarComponent } from './components/admin-bar/admin-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { mainReducer } from './state/main.reducer';
import { ModalComponent } from './components/modal/modal.component';
import { DashboardModalComponent } from './components/dashboard-modal/dashboard-modal.component';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminBarComponent,
    DashboardComponent,
    LoginFormComponent,
    ModalComponent,
    DashboardModalComponent,
    AdminNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({ main: mainReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
