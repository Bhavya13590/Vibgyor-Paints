import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Address } from '../../../shared/services/address';
import { AddressComponent } from '../../../shared/components/address/address.component';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../../../shared/interfaces/CartList';
import { Router } from '@angular/router';
import { Order } from '../../../orders/Interfaces/order';
import { CartService } from '../../../shared/services/cartservice';
import { OrderService } from '../../../orders/services/order.service';
import { UserAuthService } from '../../../auth/Services/user.auth.service';
import { BadgeService } from '../../../shared/services/badge.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit  {
name;
address = {} as Address ;
@ViewChild('billAdd') billAdd;
@ViewChild('shipAdd') shipAdd;

orderDetails = {} as Order;
username;
refOrder;
ordAdd: Order[];

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private router: Router, private cart: CartService,
  private orderservice: OrderService, private userauth: UserAuthService, private badge: BadgeService) {
      this.userauth.user$.subscribe(x => {this.username = x;
      this.name = this.username.username;
      this.orderservice.getOrderDetailsByName(this.username.username).subscribe(z => {
        this.ordAdd = z;
        this.billAdd.hNo = this.ordAdd[0].address.flatNo;
        this.billAdd.street = this.ordAdd[0].address.street;
        this.billAdd.pin = this.ordAdd[0].address.pin;
        this.billAdd.state.setValue(this.ordAdd[0].address.state) ;
        this.billAdd.city.setValue(this.ordAdd[0].address.city);
      });
      });
   }

  ngOnInit() {

  }

  copyAddress(event) {
if (event.checked) {
   this.shipAdd.hNo = this.billAdd.hNo;
   this.shipAdd.street = this.billAdd.street;
   this.shipAdd.pin = this.billAdd.pin;
   this.shipAdd.state.setValue(this.billAdd.state.value) ;
   this.shipAdd.city.setValue(this.billAdd.city.value);
} else {
  this.shipAdd.hNo = '';
   this.shipAdd.street = '';
   this.shipAdd.pin = '';
   this.shipAdd.state.setValue('') ;
   this.shipAdd.city.setValue('');

}
  }

  checkout() {
    this.cart.cartitems.subscribe(x => {this.orderDetails.item = x;
  });
    this.address.flatNo = this.shipAdd.hNo;
    this.address.street = this.shipAdd.street;
    this.address.pin = this.shipAdd.pin;
    this.address.state = this.shipAdd.state.value;
    this.address.city = this.shipAdd.city.value;
    this.orderDetails.name = this.name;
    this.orderDetails.address = this.address;



    let array;
   this.cart.getCartListAll().subscribe(x => {
     array = x.filter(y => y.user === this.username.username);
     // tslint:disable-next-line:prefer-const
     for (let z of array) {
     this.cart.deleteItemFromCart(z.id).subscribe((res) => {
      console.log(res);
    });
  }
  this.badge.setBadgeCount(0);

    });

    this.orderservice.postOrders(this.orderDetails).subscribe(x => {
      this.refOrder = x;
      this.router.navigate(['/order', { data: this.refOrder.id } ]);
    });



  }


}
