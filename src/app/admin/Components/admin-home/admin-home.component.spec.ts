import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeComponent } from './admin-home.component';
import { ChartComponent } from './../chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { UserAuthService } from '../../../auth/Services/user.auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CatalogueListService } from '../../../catalogue/services/cataloglistservice';
import { ProductService } from '../../../catalogue/services/productservice';
import { StoresService } from '../../../home/Services/storesservice';

describe('AdminHomeComponent', () => {
  let component: AdminHomeComponent;
  let fixture: ComponentFixture<AdminHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChartsModule,
        HttpClientTestingModule],
      declarations: [ AdminHomeComponent , ChartComponent],
      providers: [UserAuthService, CatalogueListService, ProductService, StoresService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
