import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { MaterialModule } from '../../Shared/material.module';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './Pipes/filterpipe';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    FormsModule,
    InfiniteScrollModule
  ],
  declarations: [ProductsListComponent, FilterPipe],
})
export class ProductModule { }
