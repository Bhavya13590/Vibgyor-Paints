import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateeditComponent } from './createedit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../../Shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef , MatDialog , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserAuthService } from '../../../auth/Services/user.auth.service';

describe('CreateeditComponent', () => {
  let component: CreateeditComponent;
  let fixture: ComponentFixture<CreateeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        MaterialModule,
        MatDialogModule,
        FormsModule, ReactiveFormsModule],
      declarations: [ CreateeditComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    UserAuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
