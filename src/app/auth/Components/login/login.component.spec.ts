import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider  } from 'angular5-social-login';
import { UserAuthService } from '../../Services/user.auth.service';
import { CartService } from '../../../shared/services/cartservice';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../Shared/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SocialLoginModule } from 'angular5-social-login';
import { SocialUser } from 'angular5-social-login';
import { Observable } from 'rxjs';
import { BadgeService } from '../../../shared/services/badge.service';

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
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
        MaterialModule,
        RouterTestingModule,
        SocialLoginModule,
        HttpClientTestingModule],
      declarations: [ LoginComponent ],
      providers: [AuthService, UserAuthService, CartService, BadgeService,
        {provide: AuthService, useClass: MockAuth}]
    })
    .compileComponents();
  }));

  const socialUser =  {
    id:  'test',
    email:  'bhavya.bc@mindtree.com',
    token:  'test',
    image:  'image.png',
    name:  'Bhavya',
    provider:  'faceBook',
    idToken:  ''
    };

    class MockAuth {
      public authState =  Observable.of(socialUser);
      signIn():  Promise<SocialUser> {
      return new Promise<SocialUser>((resolve,  reject) => {

      // tslint:disable-next-line:no-shadowed-variable
      // tslint:disable-next-line:no-unused-expression
      socialUser1 => {
      if  ('error') { reject('error'); } else { resolve(socialUser1); }
      };
    }); }

  }

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
