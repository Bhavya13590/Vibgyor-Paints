import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListComponent } from './products-list.component';
import { RouterTestingModule } from '@angular/router/testing';

import { CartService } from '../../shared/services/cartservice';
import { MaterialModule } from '../../../Shared/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// tslint:disable-next-line:import-spacing
import { UserAuthService }  from   '../../auth/Services/user.auth.service';
import { BadgeService } from '../../shared/services/badge.service';
import { CatalogueListService } from '../../catalogue/services/cataloglistservice';
import { ProductService } from '../../catalogue/services/productservice';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FilterPipe } from '../Pipes/filterpipe';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule , MaterialModule , HttpClientTestingModule, InfiniteScrollModule],
      declarations: [ ProductsListComponent , FilterPipe],
      providers: [CatalogueListService , ProductService , CartService , UserAuthService, BadgeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
