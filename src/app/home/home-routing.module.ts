import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BannerComponent } from './components/banner/banner.component';
import { BookAConsultantComponent } from './components/book-aconsultant/book-aconsultant.component';
import { StoreLocatorComponent } from './components/store-locator/store-locator.component';
import { CatalogueModule } from './../catalogue/catalogue.module';


const routes: Routes = [
  {
    path: '',
    component: BannerComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
{
  path: 'contact',
  component: ContactUsComponent
},
{
  path: 'book',
  component: BookAConsultantComponent
},
{
  path: 'store',
  component: StoreLocatorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
