import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MaterialModule } from '../../../Shared/material.module';
import { NavComponent } from '../nav/nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserAuthService } from '../../auth/Services/user.auth.service';
import { BadgeService } from '../../shared/services/badge.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule , RouterTestingModule, HttpClientTestingModule],
      declarations: [ HeaderComponent, NavComponent ],
      providers: [UserAuthService , BadgeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
