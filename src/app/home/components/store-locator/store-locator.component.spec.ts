import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreLocatorComponent } from './store-locator.component';
import { MaterialModule } from '../../../../Shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoresService } from '../../Services/storesservice';
import { CityService } from '../../../shared/services/cityservice';

describe('StoreLocatorComponent', () => {
  let component: StoreLocatorComponent;
  let fixture: ComponentFixture<StoreLocatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, FormsModule, ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [ StoreLocatorComponent ],
      providers: [StoresService, CityService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
