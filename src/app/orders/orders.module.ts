import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersummaryComponent } from './components/ordersummary/ordersummary.component';
import { OrderService } from './services/order.service';
import { MaterialModule } from '../../Shared/material.module';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import {AccordionModule} from 'primeng/accordion';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MaterialModule,
    AccordionModule
  ],
  declarations: [OrdersummaryComponent, OrderHistoryComponent],
  providers: [OrderService]
})
export class OrdersModule { }
