import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardpageComponent } from '../app/scene/dashboardpage/dashboardpage.component';
import { SignuppageComponent } from '../app/scene/signuppage/signuppage.component';
import { LoginpageComponent } from '../app/scene/loginpage/loginpage.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'signup', component: SignuppageComponent },
  {
    path: 'dashboard',
    component: DashboardpageComponent,
    canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
