import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { StateCity } from '../../../shared/services/StateCity';
import { CityService } from '../../../shared/services/cityservice';

@Component({
  selector: 'app-editcity',
  templateUrl: './editcity.component.html',
  styleUrls: ['./editcity.component.css']
})
export class EditcityComponent implements OnInit {

  cityListForm: FormGroup;
  cityControl: FormControl;
  stateControl: FormControl;
  city;
  state;
  newCity = {} as StateCity;


  constructor(private builder: FormBuilder, public dialogRef: MatDialogRef<EditcityComponent>,
  private cityService: CityService) {
    this.cityControl = new FormControl('', Validators.required);
    this.stateControl = new FormControl('', Validators.required);

    this.cityListForm = this.builder.group({
      'city': this.cityControl,
      'state': this.stateControl,
   });
   }

  ngOnInit() {

    this.cityControl
        .valueChanges
        .subscribe (value => {
          this.city = value;
        });

        this.stateControl
        .valueChanges
        .subscribe (value => {
          this.state = value;
        });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveChanges() {
    this.newCity.name = this.city;
    this.newCity.state = this.state;
    this.cityService.postStateCityList(this.newCity).subscribe((res) => {
      console.log(res);
    });
    this.dialogRef.close();
  }

}
