import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AdminBarComponent } from './shared/components/admin-bar/admin-bar.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { LoginFormComponent } from './shared/components/login-form/login-form.component';
import { mainReducer } from './core/state/main.reducer';
import { ModalComponent } from './shared/components/modal/modal.component';
import { DashboardModalComponent } from './shared/components/dashboard-modal/dashboard-modal.component';
import { AdminNavigationComponent } from './shared/components/admin-navigation/admin-navigation.component';
import { MainInterceptor } from './core/interceptors/main.interceptor';
import { CanvasChartComponent } from './shared/components/canvas-chart/canvas-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminBarComponent,
    DashboardComponent,
    LoginFormComponent,
    ModalComponent,
    DashboardModalComponent,
    AdminNavigationComponent,
    CanvasChartComponent
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
  providers: [
    ModalComponent,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
