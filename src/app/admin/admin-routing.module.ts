import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateeditComponent } from './Components/createedit/createedit.component';
import { UserTableComponent } from './Components/user-table/user-table.component';
import { CatalogueComponent } from './Components/catalogue/catalogue.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { CityListComponent } from './Components/city-list/city-list.component';
import { StoresListComponent } from './Components/stores-list/stores-list.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';

const routes: Routes = [{
  path : '',
  component : UserTableComponent
},
{
  path: 'adminhome/adminCat',
  component: CatalogueComponent
},
{
  path: 'adminhome/adminProduct',
  component: ProductListComponent
},
{
  path: 'city',
  component: CityListComponent
},
{
  path: 'adminhome/adminstore',
  component: StoresListComponent
},
{
  path: 'adminhome',
  component: AdminHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
