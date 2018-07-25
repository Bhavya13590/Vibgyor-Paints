import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl,  FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { BookConsultant } from '../../Interfaces/bookConsultant';
import { BookAConsultantService } from '../../Services/bookconsultantservice';
import { Address } from '../../../shared/services/address';


@Component({
  selector: 'app-book-aconsultant',
  templateUrl: './book-aconsultant.component.html',
  styleUrls: ['./book-aconsultant.component.css']
})
export class BookAConsultantComponent implements OnInit {
  consultant: FormGroup;

  @ViewChild('address') address;

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  contactPattern = '[0-9]{0,10}';


  constructor(private fb: FormBuilder, private serv: BookAConsultantService) {

    this.consultant = this.fb.group({
      name: ['', Validators.required ],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      contact: ['', [Validators.required , Validators.pattern(this.contactPattern)]],
      address: ['', Validators.required]
    });


   }

  ngOnInit() {

  }

  bookAConsultant() {
    if (this.address.hNo && this.address.street && this.address.state && this.address.city &&
    this.address.pin) {
    // tslint:disable-next-line:prefer-const
    let bookDetails = {} as BookConsultant;
    bookDetails.Name =  this.consultant.controls['name'].value;
    bookDetails.Email = this.consultant.controls['email'].value;
    bookDetails.contact = this.consultant.controls['contact'].value;
    bookDetails.address = {} as Address;
   bookDetails.address.flatNo = this.address.hNo;
   bookDetails.address.street = this.address.street;
   bookDetails.address.state = this.address.state.value;
   bookDetails.address.city = this.address.city.value;
   bookDetails.address.pin = this.address.pin;
   bookDetails.status = 'Pending';
   this.serv.bookAConsultant(bookDetails);
   alert(' Booked Consultant Successfully!!!!!!!!');
  } else {
    alert('Address Incomplete, Kindly enter the complete address');
  }
}

}
