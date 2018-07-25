import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStoresComponent } from './edit-stores.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoresService } from '../../../home/Services/storesservice';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../Shared/material.module';

describe('EditStoresComponent', () => {
  let component: EditStoresComponent;
  let fixture: ComponentFixture<EditStoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        FormsModule, ReactiveFormsModule,
      MaterialModule],
      declarations: [ EditStoresComponent ],
      providers: [StoresService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
