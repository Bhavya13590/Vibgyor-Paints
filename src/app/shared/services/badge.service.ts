import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class BadgeService {

   badgeCount = new BehaviorSubject<number>(0);
   abc = 0 ;
  constructor(
    private http: HttpClient) { }

  setBadgeCount(count) {
      this.abc = count ;
     this.badgeCount.next(this.abc);
  }

  getBadgeCount() {
    return this.badgeCount;
  }



}
