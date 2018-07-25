import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MaterialModule } from '../../../../Shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcityComponent } from './editcity.component';
import { CityService } from '../../../shared/services/cityservice';

describe('EditcityComponent', () => {
  let component: EditcityComponent;
  let fixture: ComponentFixture<EditcityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcityComponent ],
      imports : [ReactiveFormsModule, MaterialModule, HttpClientModule],
      providers : [CityService,
        { provide:  MAT_DIALOG_DATA,  useValue:  {} },
        { provide:  MatDialogRef,  useValue:  {} }
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
