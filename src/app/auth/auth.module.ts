import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { MaterialModule } from '../../Shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService, SocialLoginModule } from 'angular5-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular5-social-login';
import { UserAuthService } from './Services/user.auth.service';
import { RegisterComponent } from './Components/register/register.component';
import { ModuleWithProviders } from '@angular/core';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('412645745810795')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  declarations: [LoginComponent, RegisterComponent, ChangePasswordComponent],

})
export class AuthModule {
  static forRoot():  ModuleWithProviders {
    return {
    ngModule:  AuthModule,
    providers:  [
    UserAuthService,
    AuthService,
   //  AuthGuard,
    {
    provide:  AuthServiceConfig,
    useFactory:  provideConfig,
    }]
    };
    }

    static forChild() {
    return {
    ngModule:  AuthModule
    };
    }
}
