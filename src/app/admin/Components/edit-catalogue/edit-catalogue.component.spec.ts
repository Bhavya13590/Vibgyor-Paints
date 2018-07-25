import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCatalogueComponent } from './edit-catalogue.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../../Shared/material.module';
import { CatalogueListService } from '../../../catalogue/services/cataloglistservice';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EditCatalogueComponent', () => {
  let component: EditCatalogueComponent;
  let fixture: ComponentFixture<EditCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        MaterialModule,
        FormsModule, ReactiveFormsModule],
      declarations: [ EditCatalogueComponent ],
      providers: [CatalogueListService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
