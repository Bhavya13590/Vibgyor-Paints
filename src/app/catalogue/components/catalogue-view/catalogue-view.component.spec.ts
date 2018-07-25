import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueViewComponent } from './catalogue-view.component';
import { MaterialModule } from '../../../../Shared/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from '../../services/productservice';
import { UserAuthService } from '../../../auth/Services/user.auth.service';
import { CartService } from '../../../shared/services/cartservice';
import { BadgeService } from '../../../shared/services/badge.service';
import { FormsModule } from '@angular/forms';

describe('CatalogueViewComponent', () => {
  let component: CatalogueViewComponent;
  let fixture: ComponentFixture<CatalogueViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, HttpClientTestingModule,
        FormsModule],
      declarations: [ CatalogueViewComponent ],
      providers: [ProductService , UserAuthService, CartService, BadgeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
