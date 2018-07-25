import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../auth/Services/user.auth.service';
import { BadgeService } from '../../shared/services/badge.service';
import { User } from '../../auth/Interfaces/User';
import { CartService } from '../../shared/services/cartservice';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  badgeCount = 0;
  login;
  role: User['roles'];
admin = false;
  constructor(private userauth: UserAuthService, private badge: BadgeService, private cart: CartService) {
    this.userauth.authStatus.subscribe(x => {this.login = x;
    });
    this.userauth.role.subscribe(x => {this.role = x;
    this.admin = this.role.includes('admin');
    });
   }

  ngOnInit() {
    // let badgeLen;
    // this.cart.getCartListAll().subscribe(x => {
    //   badgeLen = x.filter(y => y.user === this.userauth.user.username);
    //   this.badge.setBadgeCount(badgeLen.length);
    // });
       this.badge.getBadgeCount().subscribe(x => this.badgeCount = x);


  }

  logout() {
    this.badge.setBadgeCount(0);
    this.userauth.logout();
  }

}
