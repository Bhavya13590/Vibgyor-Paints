import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './home/components/banner/banner.component';
import { AboutUsComponent } from './home/components/about-us/about-us.component';

const routes: Routes = [
    {
    path: 'catalogue',
    loadChildren: 'src/app/catalogue/catalogue.module#CatalogueModule'
  },
  {
    path: 'auth',
    loadChildren: 'src/app/auth/auth.module#AuthModule'
  },
  {
    path: 'cart',
    loadChildren: 'src/app/cart/cart.module#CartModule'
  },
  {
    path: 'order',
    loadChildren: 'src/app/orders/orders.module#OrdersModule'
  },
  {
    path: 'product',
    loadChildren: 'src/app/product/product.module#ProductModule'
  },
  {
    path: 'adminhome/create',
    loadChildren: 'src/app/admin/admin.module#AdminModule'
  },
  {
    path: 'profile',
    loadChildren: 'src/app/userprofile/userprofile.module#UserprofileModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
