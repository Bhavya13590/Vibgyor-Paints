import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartViewComponent } from './cart-view.component';
import { CartService } from '../../../shared/services/cartservice';
import { UserAuthService } from '../../../auth/Services/user.auth.service';
import { BadgeService } from '../../../shared/services/badge.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../Shared/material.module';

describe('CartViewComponent', () => {
  let component: CartViewComponent;
  let fixture: ComponentFixture<CartViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientTestingModule,
        MaterialModule,
        FormsModule, ReactiveFormsModule
      ],
      declarations: [ CartViewComponent],
      providers: [CartService, UserAuthService, BadgeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
