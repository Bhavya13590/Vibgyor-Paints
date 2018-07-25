import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AuthGuard } from '../auth/Services/auth.guard';

const routes: Routes = [{
  path: '',
  component: CartViewComponent
},
{
  path: 'checkout',
  component: CheckoutComponent, canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
