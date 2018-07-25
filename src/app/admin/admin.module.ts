import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateeditComponent } from './Components/createedit/createedit.component';
import { MaterialModule } from '../../Shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserTableComponent } from './Components/user-table/user-table.component';
import { CatalogueComponent } from './Components/catalogue/catalogue.component';
import { EditCatalogueComponent } from './Components/edit-catalogue/edit-catalogue.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductEditComponent } from './Components/product-edit/product-edit.component';
import { CityListComponent } from './Components/city-list/city-list.component';
import { EditcityComponent } from './Components/editcity/editcity.component';
import { StoresListComponent } from './Components/stores-list/stores-list.component';
import { EditStoresComponent } from './Components/edit-stores/edit-stores.component';
import { ChartComponent } from './Components/chart/chart.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  declarations: [CreateeditComponent, UserTableComponent, CatalogueComponent,
     EditCatalogueComponent, ProductListComponent, ProductEditComponent, CityListComponent,
      EditcityComponent, StoresListComponent, EditStoresComponent, ChartComponent, AdminHomeComponent],
  entryComponents: [CreateeditComponent, EditCatalogueComponent, ProductEditComponent, EditcityComponent, EditStoresComponent]
})
export class AdminModule { }
