import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../../../shared/interfaces/CartList';
import { Order } from '../../Interfaces/order';
import { OrderService } from '../../services/order.service';
import { CartService } from '../../../shared/services/cartservice';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit {
  cartItems: Cart[];
  name;
  orderdetails: Order[] = [];
  amount = 0;
  constructor(private route: ActivatedRoute, private orderservice: OrderService, private cart: CartService) {
    this.route.params.subscribe(params => {
      if (params.data) {
        this.orderservice.getOrderDetailsById(params.data).subscribe(x => {
          this.orderdetails = x;
          // tslint:disable-next-line:prefer-const
          for (let a of this.orderdetails[0].item) {
            this.amount = this.amount + a.amount;
          }
        });
      }
    });
  }

  ngOnInit() {



}
}
