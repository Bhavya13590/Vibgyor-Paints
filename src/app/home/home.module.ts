import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BannerComponent } from './components/banner/banner.component';
import { BookAConsultantComponent } from './components/book-aconsultant/book-aconsultant.component';
import { StoreLocatorComponent } from './components/store-locator/store-locator.component';
import { MaterialModule } from '../../Shared/material.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BookAConsultantService } from './Services/bookconsultantservice';
import { StoresService } from './Services/storesservice';
import { CatalogueModule } from './../catalogue/catalogue.module';
import {FileUploadModule} from 'primeng/fileupload';
import {GrowlModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CatalogueModule,
    FileUploadModule,
    GrowlModule
  ],
  declarations: [AboutUsComponent,
     ContactUsComponent,
     BannerComponent,
    BookAConsultantComponent,
     StoreLocatorComponent
    ],
    providers: [BookAConsultantService,
      StoresService],
})
export class HomeModule { }
