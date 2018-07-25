import { Component, OnInit } from '@angular/core';
import { StoresService } from '../../Services/storesservice';
import { Address } from '../../../shared/services/address';
import { AddressComponent } from '../../../shared/components/address/address.component';
import { Observable } from 'rxjs';
import { Input } from '@angular/core';
import { CityService } from '../../../shared/services/cityservice';
import { startWith } from 'rxjs/operators';
import { map } from 'rxjs/internal/operators/map';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-store-locator',
  templateUrl: './store-locator.component.html',
  styleUrls: ['./store-locator.component.css']
})
export class StoreLocatorComponent implements OnInit {

  storeDetails: Address[] = [];
  // tslint:disable-next-line:no-input-rename

  cities;
  cityControl: FormControl = new FormControl();
  uniqueCity ;
  filteredOptions;
  add = [];
  constructor(private store: StoresService, private city: CityService) { }

  ngOnInit() {

    this.store.getStores().subscribe(x => {this.storeDetails = x;
    this.add = this.storeDetails;
  });
     this.city.getStateCityList().subscribe(x => {
       this.cities = x;
       this.uniqueCity =  Array.from(new Set(this.cities.map(item => item.name)));
      });


     this.filteredOptions = this.cityControl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filter(val))
    );
  }

  filter(val): string[] {
    if (this.uniqueCity  == null) {this.uniqueCity  = [];
     }
     // tslint:disable-next-line:prefer-const
     if (val === '') {
          this.add = this.storeDetails;
     } else {
     this.add = this.storeDetails.filter(x => x.city === val);
     }
   return this.uniqueCity .filter(option =>
     option.toLowerCase().includes(val.toLowerCase()));
  }

}
