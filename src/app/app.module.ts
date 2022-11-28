import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'
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
import { AdminBarComponent } from './components/admin/admin-bar/admin-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { LoginFormComponent } from './_shared/login-form/login-form.component';
import { mainReducer } from './_core/state/main.reducer';
import { ModalComponent } from './_shared/modal/modal.component';
import { DashboardModalComponent } from './components/dashboard/dashboard-modal/dashboard-modal.component';
import { AdminNavigationComponent } from './components/admin/admin-navigation/admin-navigation.component';
import { MainInterceptor } from './_core/interceptors/main.interceptor';
import { CanvasChartComponent } from './components/dashboard/canvas-chart/canvas-chart.component';
import { MainEffects } from './_core/state/main.effects';

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
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([MainEffects])
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
