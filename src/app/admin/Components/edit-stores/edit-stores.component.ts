import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Address } from '../../../shared/services/address';
import { StoresService } from '../../../home/Services/storesservice';

@Component({
  selector: 'app-edit-stores',
  templateUrl: './edit-stores.component.html',
  styleUrls: ['./edit-stores.component.css']
})
export class EditStoresComponent implements OnInit {

  editStore: FormGroup;

  flatControl: FormControl;
  streetControl: FormControl;
  stateControl: FormControl;
  cityControl: FormControl;
  pinControl: FormControl;
  flat;
  street;
  state;
  city;
  pin;
  storeAddress;
  edittedStore = {} as Address;


  constructor(private builder: FormBuilder, public dialogRef: MatDialogRef<EditStoresComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private storeService: StoresService) {
    this.storeAddress = data.details;

    this.flatControl = new FormControl('', Validators.required);
    this.streetControl = new FormControl('', Validators.required);
    this.stateControl = new FormControl('', Validators.required);
    this.cityControl = new FormControl('', Validators.required);
    this.pinControl = new FormControl('', Validators.required);

    this.editStore = this.builder.group({
      'flat': this.flatControl,
      'street': this.streetControl,
      'state': this.stateControl,
      'city': this.cityControl,
      'pin': this.pinControl
    });

  }

  ngOnInit() {
    this.flatControl
    .valueChanges
    .subscribe (value => {
      this.flat = value;
    });

    this.streetControl
    .valueChanges
    .subscribe (value => {
      this.street = value;
    });

    this.stateControl
    .valueChanges
    .subscribe (value => {
      this.state = value;
    });

    this.cityControl
    .valueChanges
    .subscribe (value => {
      this.city = value;
    });

    this.pinControl
    .valueChanges
    .subscribe (value => {
      this.pin = value;
    });

    if (this.storeAddress != null) {
      this.flatControl.setValue(this.storeAddress.flatNo);
      this.streetControl.setValue(this.storeAddress.street);
      this.stateControl.setValue(this.storeAddress.state);
      this.cityControl.setValue(this.storeAddress.city);
      this.pinControl.setValue(this.storeAddress.pin);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveChanges() {
    if (this.storeAddress === null) {
      this.edittedStore.flatNo = this.flat;
      this.edittedStore.street = this.street;
      this.edittedStore.state = this.state;
      this.edittedStore.city = this.city;
      this.edittedStore.pin = this.pin;
        this.storeService.postStores(this.edittedStore).subscribe((res) => {
         console.log(res);
        });
        this.dialogRef.close();

    } else {
      this.edittedStore.flatNo = this.flat;
      this.edittedStore.street = this.street;
      this.edittedStore.state = this.state;
      this.edittedStore.city = this.city;
      this.edittedStore.pin = this.pin;
      this.edittedStore.id = this.storeAddress.id;
        this.storeService.updateStores(this.edittedStore).subscribe((res) => {
          console.log(res);
         });
         this.dialogRef.close();
    }
  }

}
