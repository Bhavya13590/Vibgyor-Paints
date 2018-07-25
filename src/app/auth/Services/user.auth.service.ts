import { User } from '../Interfaces/User';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// TODO: Injector for cyclic dependencies


// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { CartService } from '../../shared/services/cartservice';
import { BadgeService } from '../../shared/services/badge.service';


@Injectable()
export class UserAuthService {

  user: User = new User();

  user$: BehaviorSubject<User>;

  storage: Storage = window.localStorage;

  // FIXME: interceptors, cyclic dependencies

  constructor(private httpClient: HttpClient) {

    this.authStatus =   new BehaviorSubject(this.isAuthenticated());
    this.user = this.getUser();
    this.user$ = new BehaviorSubject(this.user);
    this.role = new BehaviorSubject(this.user.roles);
  }

  public redirectUrl: string;
  authStatus: BehaviorSubject<boolean>;
 role: BehaviorSubject<User['roles']>;


  isAuthenticated() {
    const token = this.storage.getItem('token');

    if (token) {
      return true;
    }

    return false;
  }

  getToken() {
    return this.storage.getItem('token');
  }

  getUser() {
    // tslint:disable-next-line:prefer-const
    let userJson = this.storage.getItem('user');
    if (userJson) {
      return JSON.parse(userJson);
    } else { return new User(); }
  }

  hasRole(role: string) {
    // includes from ES7
    return this.getUser().roles.includes(role);
  }

  login(username: string, password: string): Observable<any> {
    const data = {
      username: username,
      password: password
    };

    return this.httpClient
               .post(environment.authEndPoint, data)
               .map ( (data1: any) => {
                 // data has token, roles
                 console.log('DAta ', data1);
                 this.user = data1.identity;

                 this.user$.next(this.user);

                 this.storage.setItem('user', JSON.stringify(this.user));

                 console.log('User', this.user);
                 this.storage.setItem('token', data1.token);
                 this.authStatus.next(true);
                 this.role.next(this.user.roles);
                 console.log('status', this.authStatus);
                 return data;
               });

  }

  register(user) {
      return this.httpClient.post(`${environment.apiEndPoint}/api/users`, user).subscribe((res) => {
        console.log(res);
      });
  }

  editUser(user) {
    // tslint:disable-next-line:prefer-const
    let id = user.id;
    return this.httpClient.put(`${environment.apiEndPoint}/api/users/${id}`, user).subscribe((res) => {
      console.log(res);
    });
  }

  deleteuser(id) {
        return this.httpClient.delete(`${environment.apiEndPoint}/api/users/${id}`);
  }


  getUserFromApi(): Observable<User[]> {

   return this.httpClient.get<User[]>(`${environment.apiEndPoint}/api/users`);
  }

  logout() {
    this.storage.clear();
    this.authStatus.next(false);
    this.role.next([]);
    this.user = new User();
    this.user$.next(this.user);
  }
}
