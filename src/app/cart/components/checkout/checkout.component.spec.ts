import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../../shared/services/cartservice';
import { OrderService } from '../../../orders/services/order.service';
import { UserAuthService } from '../../../auth/Services/user.auth.service';
import { BadgeService } from '../../../shared/services/badge.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AddressComponent } from '../../../shared/components/address/address.component';
import { MaterialModule } from '../../../../Shared/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CityService } from '../../../shared/services/cityservice';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, MaterialModule, HttpClientTestingModule],
      declarations: [ CheckoutComponent , AddressComponent],
      providers: [CartService, OrderService, UserAuthService, BadgeService, CityService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
