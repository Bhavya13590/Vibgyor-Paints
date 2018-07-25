import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { UserAuthService } from '../../auth/Services/user.auth.service';
import { BadgeService } from '../../shared/services/badge.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../Shared/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule,
        HttpClientTestingModule],
      declarations: [ NavComponent ],
      providers: [UserAuthService , BadgeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
