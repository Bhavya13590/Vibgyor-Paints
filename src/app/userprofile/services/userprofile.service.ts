import { UserProfile } from '../Interfaces/user.profile';
import { User } from '../../auth/Interfaces/User';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient) { }

  getUserProfileDetails(username: string): Observable<UserProfile[]> {
    return this.http.get<UserProfile[]>(`${environment.apiEndPoint}/api/usersProfile?username=${username}`);
  }

  updateUserProfileDetails(userProfile: UserProfile) {
    return this.http.put(`${environment.apiEndPoint}/api/usersProfile/${userProfile.id}`, userProfile);
  }

  saveUserProfileDetails(userProfile: UserProfile) {
    return this.http.post(`${environment.apiEndPoint}/api/usersProfile`, userProfile);
  }

}
