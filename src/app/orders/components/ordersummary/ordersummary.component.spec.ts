import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersummaryComponent } from './ordersummary.component';
import { RouterTestingModule } from '@angular/router/testing';
import { OrderService } from '../../services/order.service';
import { CartService } from '../../../shared/services/cartservice';
import { MaterialModule } from '../../../../Shared/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserAuthService } from '../../../auth/Services/user.auth.service';
import { BadgeService } from '../../../shared/services/badge.service';

describe('OrdersummaryComponent', () => {
  let component: OrdersummaryComponent;
  let fixture: ComponentFixture<OrdersummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule, HttpClientTestingModule],
      declarations: [ OrdersummaryComponent ],
      providers: [OrderService , CartService, UserAuthService, BadgeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
