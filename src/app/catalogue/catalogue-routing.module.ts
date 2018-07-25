import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueListComponent } from './components/catalogue-list/catalogue-list.component';
import { CatalogueProductsComponent } from './components/catalogue-products/catalogue-products.component';
import { CatalogueViewComponent } from './components/catalogue-view/catalogue-view.component';

const routes: Routes = [{
  path: '',
 component: CatalogueListComponent
},
{
  path: 'products',
 component: CatalogueProductsComponent
},
{
  path: 'products/view',
 component: CatalogueViewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }
