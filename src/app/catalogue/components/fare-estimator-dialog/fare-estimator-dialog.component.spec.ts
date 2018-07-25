import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FareEstimatorDialogComponent } from './fare-estimator-dialog.component';
import { MaterialModule } from '../../../../Shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

describe('FareEstimatorDialogComponent', () => {
  let component: FareEstimatorDialogComponent;
  let fixture: ComponentFixture<FareEstimatorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, ReactiveFormsModule,
        FormsModule],
      declarations: [ FareEstimatorDialogComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FareEstimatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
