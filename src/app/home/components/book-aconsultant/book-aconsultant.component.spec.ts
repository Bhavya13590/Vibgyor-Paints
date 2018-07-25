import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAConsultantComponent } from './book-aconsultant.component';
import { BookAConsultantService } from '../../Services/bookconsultantservice';
import { MaterialModule } from '../../../../Shared/material.module';
import { AddressComponent } from '../../../shared/components/address/address.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CityService } from '../../../shared/services/cityservice';

describe('BookAConsultantComponent', () => {
  let component: BookAConsultantComponent;
  let fixture: ComponentFixture<BookAConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, MaterialModule,
      HttpClientTestingModule],
      declarations: [ BookAConsultantComponent , AddressComponent],
      providers: [BookAConsultantService, CityService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
