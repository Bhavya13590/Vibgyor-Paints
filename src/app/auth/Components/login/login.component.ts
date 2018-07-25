import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialUser } from 'angular5-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular5-social-login';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'angular5-social-login';
import { UserAuthService } from '../../Services/user.auth.service';
import { HttpResponse } from '@angular/common/http';
import { BadgeService } from '../../../shared/services/badge.service';
import { CartService } from '../../../shared/services/cartservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  // loggedIn = 'false';

  loginForm: FormGroup;
  usernameControl: FormControl;
  passwordControl: FormControl;
  username: string;
  password: string;

  errorMessage: string;

  creds = [];
  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder,
    private userauth: UserAuthService, private cart: CartService, private badge: BadgeService) {
    this.usernameControl = new FormControl('', Validators.required);
    this.passwordControl = new FormControl('', Validators.required);

    this.loginForm = this.fb.group({
      'username': this.usernameControl,
      'password': this.passwordControl
    });

  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });

    this.usernameControl
      .valueChanges
      .subscribe(value => {
        console.log(value);
        console.log('Valid ', this.usernameControl.valid);

        if (this.usernameControl.valid) {
          this.username = value;
        }
      });

    this.passwordControl
      .valueChanges
      .subscribe(value => {
        this.password = value;
      });

  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((res) => {
      this.user = res;
      this.userauth.user.name = this.user.name;

      window.localStorage.setItem('user', JSON.stringify(this.user));
      window.localStorage.setItem('token', this.user.idToken);
      this.userauth.authStatus.next(true);
      this.userauth.role.next(['user']);
    });

    this.router.navigateByUrl(this.userauth.redirectUrl || '/');
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((res) => {
      this.user = res;
      this.userauth.user.name = this.user.name;

      window.localStorage.setItem('user', JSON.stringify(this.user));
      window.localStorage.setItem('token', this.user.idToken);
      this.userauth.authStatus.next(true);
      this.userauth.role.next(['user']);
    });
    this.router.navigateByUrl(this.userauth.redirectUrl || '/');
  }

  signOut(): void {
    this.authService.signOut();
  }

  login() {

    console.log(this.loginForm.value.username, this.loginForm.value.password);

    this.userauth
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(data => {
        // go to home page after login
        let badgeLen;
        this.cart.getCartListAll().subscribe(x => {
          badgeLen = x.filter(y => y.user === this.userauth.user.username);
          this.badge.setBadgeCount(badgeLen.length);
        });
        // tslint:disable-next-line:prefer-const
        let array = [];
        array = JSON.parse(localStorage.getItem('cartdetails'));
        if (array == null) {
          if (this.userauth.hasRole('admin')) {
            this.router.navigateByUrl('adminhome');
          } else {
            this.router.navigateByUrl(this.userauth.redirectUrl || '/');
          }
        } else {
          // tslint:disable-next-line:prefer-const
          for (let x of array) {
            x.user = this.username;
            this.cart.addcart(x);
          }
          if (this.userauth.hasRole('admin')) {
            this.router.navigateByUrl('adminhome');
          } else {
            this.router.navigateByUrl(this.userauth.redirectUrl || '/');
          }
        }
      },

        (errorResponse: HttpResponse<any>) => {
          if (errorResponse.status === 0) {
            this.errorMessage = 'Server not reachable';
          }

          if (errorResponse.status >= 400) {
            alert('Username / Password is incorrect !!');
            this.errorMessage = `Error ${errorResponse.status} ${errorResponse.statusText}`;
          }

        });



  }
}
