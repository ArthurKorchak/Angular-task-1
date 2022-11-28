import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBarComponent } from './components/admin/admin-bar/admin-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { LoginFormComponent } from './_shared/login-form/login-form.component';
import { AdminGuard } from './_core/guards/admin.guard';
import { DashboardGuard } from './_core/guards/dashboard.guard';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [DashboardGuard] },
  { path: 'admin', component: AdminBarComponent, canActivate: [AdminGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
