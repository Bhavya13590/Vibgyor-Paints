import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../shared/services/cartservice';
import { Cart } from '../../../shared/interfaces/CartList';
import { UserAuthService } from '../../../auth/Services/user.auth.service';
import { BadgeService } from '../../../shared/services/badge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  items;
  login;
  subTotal = 0;
  cartItems: Cart[];
  username;
  constructor(private cart: CartService, private userauth: UserAuthService, private badge: BadgeService,
    private router: Router) {
    this.userauth.authStatus.subscribe(x => this.login = x);

  }

  ngOnInit() {
    if (this.login) {

      this.userauth.user$.subscribe(y => {
        this.username = y;
        this.cart.getCartListAll().subscribe(x => {
          this.cartItems = x.filter(item => item.user === this.username.username);
          this.cart.setCartItems(this.cartItems);
          // tslint:disable-next-line:prefer-const
          for (let x1 of this.cartItems) {
            this.subTotal = this.subTotal + x1.amount * x1.quantity;
          }
        });
      });

    } else {
      this.cartItems = JSON.parse(localStorage.getItem('cartdetails'));
      this.cart.setCartItems(this.cartItems);

      // tslint:disable-next-line:prefer-const
      for (let x1 of this.cartItems) {
        this.subTotal = this.subTotal + x1.amount * x1.quantity;
      }
    }

  }

  remove(detail) {
    // tslint:disable-next-line:prefer-const
    let id = detail.id;

    if (this.login) {
      this.cart.deleteItemFromCart(id).subscribe((res) => {
        console.log(res);
        this.cart.getCartListAll().subscribe(x => {
          this.cartItems = x.filter(item => item.user === this.username.username);

          this.badge.setBadgeCount(this.cartItems.length);
        });
        this.subTotal = this.subTotal - detail.amount * detail.quantity;
      });

    } else {
      // tslint:disable-next-line:prefer-const
      let cartArr: Cart[];
      cartArr = JSON.parse(localStorage.getItem('cartdetails'));
      for (let i = cartArr.length - 1; i >= 0; i--) {
        if (cartArr[i].id === id) {
          cartArr.splice(i, 1);
        }
      }
      this.subTotal = this.subTotal - detail.amount * detail.quantity;
      this.cartItems = cartArr;
      this.badge.setBadgeCount(cartArr.length);
      localStorage.setItem('cartdetails', JSON.stringify(cartArr));

    }
  }


  checkout() {
    // tslint:disable-next-line:prefer-const

   // if (this.login) {

      if (this.cartItems.length > 0) {
        this.router.navigate(['/cart/checkout']);
      } else {
        alert('Cart is Empty');
      }

    // } else {
    //   this.router.navigate(['/auth']);
    // }


  }

}
