import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueProductsComponent } from './catalogue-products.component';
import { MaterialModule } from '../../../../Shared/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BadgeService } from '../../../shared/services/badge.service';
import { ProductService } from '../../services/productservice';
import { UserAuthService } from '../../../auth/Services/user.auth.service';
import { CartService } from '../../../shared/services/cartservice';

describe('CatalogueProductsComponent', () => {
  let component: CatalogueProductsComponent;
  let fixture: ComponentFixture<CatalogueProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [ CatalogueProductsComponent ],
      providers: [ProductService , UserAuthService, CartService, BadgeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
