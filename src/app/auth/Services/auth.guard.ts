import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { UserAuthService } from './user.auth.service';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
    private authService: UserAuthService,
    private router:  Router
    ) {
    console.log('AuthGaurd');
    }

    canActivate(
    next:  ActivatedRouteSnapshot,
    state:  RouterStateSnapshot):  Observable<boolean> | Promise<boolean> | boolean {
    if  (this.authService.isAuthenticated()) {
    return true;
    }

    // save the url
this.authService.redirectUrl =  state.url;
console.log('fetched url',  state.url);
// user is not authenticated
this.router.navigate(['/auth']);
return false;
}
}
