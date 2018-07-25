import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../Interfaces/order';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orderDetails: Order[] = [];
  constructor(private orderservice: OrderService) {
    this.orderservice.getOrderDetails().subscribe(x => this.orderDetails = x);
   }

  ngOnInit() {
  }

}
