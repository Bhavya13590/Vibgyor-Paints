import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { CanActivate } from '@angular/router';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [{
  path: '',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'change',
  component: ChangePasswordComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AuthRoutingModule { }
