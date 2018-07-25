import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cart } from '../interfaces/CartList';
import { catchError, map, tap } from 'rxjs/operators';
import { RequestOptions, Headers } from '@angular/http';
import { UserAuthService } from '../../auth/Services/user.auth.service';
import { HttpResponse } from '@angular/common/http';
import { BadgeService } from './badge.service';
import { User } from '../../auth/Interfaces/User';
import { environment } from 'src/environments/environment';


@Injectable()
export class CartService {

  private CartUrl = `${environment.apiEndPoint}/api/cart`;

  cartitems = new BehaviorSubject<Cart[]>(null);

  constructor(
    private http: HttpClient, private userauth: UserAuthService, private badge: BadgeService) { }

  getCartList(id) {

    return this.http.get<Cart[]>(`${environment.apiEndPoint}/api/cart?prodId=${id}`);
  }

  getCartListAll() {

    // tslint:disable-next-line:prefer-const
    let data = this.http.get<Cart[]>(`${environment.apiEndPoint}/api/cart`);
    return data;
  }


  addcart(details) {
    // tslint:disable-next-line:prefer-const
    let cartArray = details;
    // tslint:disable-next-line:prefer-const
    let firstEntry = true;
    let login;
     cartArray.user = this.userauth.user.username;
    // tslint:disable-next-line:prefer-const
    let errorMessage: string;
    this.userauth.authStatus.subscribe(x => login = x);
    if (login) {
      // tslint:disable-next-line:prefer-const
      let cartArray1 = [];
      this.getCartList(cartArray.prodId).subscribe(x => {
        cartArray1 = x.filter(item => item.user === this.userauth.user.username);

        this.isProductAddedToCart(cartArray.prodId, this.userauth.user.username)
          .subscribe(result => {
            if (result.length > 0) {
              firstEntry = false;

              cartArray1[0].quantity = cartArray1[0].quantity +
                cartArray.quantity;
              this.putCartList(cartArray1[0]);
            } else {
              cartArray.id = '';
              // tslint:disable-next-line:prefer-const
              this.setCartList(cartArray);
              firstEntry = false;
            }
          });

      }
      );

    } else {

      let cartArray1: Cart[] = [];
      cartArray1 = JSON.parse(localStorage.getItem('cartdetails'));
     // cartArray1.user = this.userauth.user.username;
      if (cartArray1 == null) {
        cartArray1 = [];
      }
      if (cartArray1.length > 0) {

        for (let i = cartArray1.length - 1; i >= 0; i--) {
          if (cartArray1[i].name === cartArray.name) {
            firstEntry = false;
            cartArray1[i].quantity = parseInt(cartArray1[i].quantity.toString(), 35) +
              parseInt(cartArray.quantity.toString(), 35);
          }

        }
        if (firstEntry) {
          cartArray.id = cartArray1.length + 1;
          cartArray1.push(cartArray);
        }
      } else {
        cartArray.id = cartArray1.length + 1;
        cartArray1.push(cartArray);
      }

      this.badge.setBadgeCount(cartArray1.length);
      localStorage.setItem('cartdetails', JSON.stringify(cartArray1));
    }

  }

  setCartList(detail) {
    let array;
    this.http.post(this.CartUrl, detail).subscribe((res) => {
      console.log(res);
        this.getCartListAll().subscribe(x => {
          array = x.filter(item => item.user === this.userauth.user.username);
          this.badge.setBadgeCount(array.length);
        });

    });
  }

  putCartList(detail) {
    // tslint:disable-next-line:prefer-const
    let id = detail.id;

    this.http.put(`${environment.apiEndPoint}/api/cart/${id}`, detail).subscribe((res) => {
      console.log(res);
    });
  }
  deleteItemFromCart(id) {
    return this.http.delete(`${environment.apiEndPoint}/api/cart/${id}`);
  }

  setCartItems(cart) {
    this.cartitems.next(cart);
  }

  getCartItems() {
    //  return this.cartItemsOb;
    return this.cartitems;
  }

  isProductAddedToCart(prodId: number, user): Observable<any> {
    // return this.http.get(`${environment.apiEndPoint}/api/exist/cart/prodId/${prodId}`);
    return this.http.get(`${environment.apiEndPoint}/api/cart?${prodId = prodId}&${user = user}`);
  }

}
