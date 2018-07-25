import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueListComponent } from './components/catalogue-list/catalogue-list.component';
import { CatalogueViewComponent } from './components/catalogue-view/catalogue-view.component';
import { MaterialModule } from '../../Shared/material.module';
import { CatalogueListService } from './services/cataloglistservice';
import { CatalogueProductsComponent } from './components/catalogue-products/catalogue-products.component';
import { ProductService } from './services/productservice';
import { FormsModule } from '@angular/forms';
import { FareEstimatorDialogComponent } from './components/fare-estimator-dialog/fare-estimator-dialog.component';
import { UserAuthService } from '../auth/Services/user.auth.service';
import { BadgeService } from '../shared/services/badge.service';

@NgModule({
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [CatalogueListComponent, CatalogueViewComponent, CatalogueProductsComponent, FareEstimatorDialogComponent],
  providers: [CatalogueListService,
  ProductService,
  UserAuthService,
  BadgeService
],
  exports: [],
  entryComponents: [ FareEstimatorDialogComponent ]
})
export class CatalogueModule { }
