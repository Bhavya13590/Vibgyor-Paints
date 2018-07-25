import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersummaryComponent } from './components/ordersummary/ordersummary.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';

const routes: Routes = [{
  path: '',
  component: OrdersummaryComponent
},
{
  path: 'history',
  component: OrderHistoryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
