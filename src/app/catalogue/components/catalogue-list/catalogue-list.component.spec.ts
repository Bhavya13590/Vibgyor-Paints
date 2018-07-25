import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueListComponent } from './catalogue-list.component';
import { MaterialModule } from '../../../../Shared/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CatalogueListService } from '../../services/cataloglistservice';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CatalogueListComponent', () => {
  let component: CatalogueListComponent;
  let fixture: ComponentFixture<CatalogueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule,
        RouterTestingModule,
        HttpClientTestingModule],
      declarations: [ CatalogueListComponent ],
      providers: [CatalogueListService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
