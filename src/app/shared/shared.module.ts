import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AddressComponent } from './components/address/address.component';
import { MaterialModule } from '../../Shared/material.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { CityService } from './services/cityservice';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CartService } from './services/cartservice';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [CityService, CartService],
  declarations: [AddressComponent],
  exports: [AddressComponent]
})
export class SharedModule { }
