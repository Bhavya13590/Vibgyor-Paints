import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { UserAuthService } from '../../../auth/Services/user.auth.service';
import { UserProfileService } from '../../services/userprofile.service';
import { MaterialModule } from '../../../../Shared/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from '../../../shared/components/address/address.component';
import { CityService } from '../../../shared/services/cityservice';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, HttpClientTestingModule, RouterTestingModule,
        FormsModule, ReactiveFormsModule, BrowserAnimationsModule],
      declarations: [ ProfileComponent , AddressComponent],
      providers: [UserProfileService, UserAuthService, CityService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
