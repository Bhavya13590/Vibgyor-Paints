import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComponent } from './chart.component';
import { ChartsModule } from 'ng2-charts';
import { ProductService } from '../../../catalogue/services/productservice';
import { CatalogueListService } from '../../../catalogue/services/cataloglistservice';
import { StoresService } from '../../../home/Services/storesservice';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserAuthService } from '../../../auth/Services/user.auth.service';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChartsModule,
        HttpClientTestingModule],
      declarations: [ ChartComponent ],
      providers: [CatalogueListService, ProductService, StoresService, UserAuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
