import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { CityService } from '../../services/cityservice';
import {FormGroup, FormBuilder} from '@angular/forms';
import { StateCity } from '../../services/StateCity';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
hNo;
street;

stateList: StateCity[] = [];
pin;
uniqueStates;
uniqueCities;
cityList;

cities: Observable<String[]>;
@ViewChild('stateRef')
stateRef: ElementRef;


stateGroupOptions: Observable<String[]>;
state: FormControl = new FormControl();
city: FormControl = new FormControl();
  constructor(private cityservice: CityService, private fb: FormBuilder) {
    this.cityservice.getStateCityList().subscribe(x => {
      this.stateList = x;
    });
  }

  ngOnInit() {
    // tslint:disable-next-line:no-non-null-assertion
    this.stateGroupOptions = this.state.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filterState(val))
    );


    this.cities = this.city.valueChanges
                       .pipe(
                         startWith(''),
                         map(val => this.filterCity(val))
                       );
  }

  filterState(val: string): string[] {
    this.uniqueStates =  Array.from(new Set(this.stateList.map(item => item.state)));
    if (this.uniqueStates  == null) {this.uniqueStates  = []; }
    this.uniqueCities = this.stateList.filter(y => y.state === val)
    .map(z => z.name);

   return this.uniqueStates.filter(option =>
     option.toLowerCase().includes(val.toLowerCase()));
  }

  filterCity(val: string): string[] {
    if (this.uniqueCities  == null) {this.uniqueCities  = []; }
   return this.uniqueCities.filter(option =>
     option.toLowerCase().includes(val.toLowerCase()));
  }



}
