import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { MaterialModule } from '../../Shared/material.module';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { OrderService } from '../orders/services/order.service';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [CartViewComponent, CheckoutComponent],
  providers: [OrderService]
})
export class CartModule { }
