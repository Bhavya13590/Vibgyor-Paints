import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { Address } from '../../../shared/services/address';
import { UserProfile } from '../../Interfaces/user.profile';
import { UserProfileService } from '../../services/userprofile.service';
import { UserAuthService } from '../../../auth/Services/user.auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('address') address;
  name: string;
  username: string;
  mobileno: number;
  contactPattern = '[0-9]{0,10}';
  profileForm: FormGroup;
  secondFormGroup: FormGroup;
  userProfile: UserProfile;

  constructor(private fb: FormBuilder, private userProfileService: UserProfileService,
    public snackBar: MatSnackBar, private router: Router, private authService: UserAuthService) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      mobileNo: ['']
    });

    this.secondFormGroup = this.fb.group({
      address: ['', Validators.required]
    });

    this.profileForm.get('name').setValue(this.authService.getUser().name);
    this.profileForm.get('username').setValue(this.authService.getUser().username);
    this.userProfileService.getUserProfileDetails(this.authService.getUser().username).subscribe(
      userProfile => {
        if (userProfile.length > 0) {
          this.userProfile = userProfile[0];
          if (this.userProfile !== null) {
            if (this.userProfile.address != null) {
              this.address.flatNo = this.userProfile.address.flatNo;
              this.address.street = this.userProfile.address.street;
              this.address.state.setValue(this.userProfile.address.state);
              this.address.city.setValue(this.userProfile.address.city);
              this.address.pinCode = this.userProfile.address.pin;
            }
            this.profileForm.get('mobileNo').setValue(this.userProfile.mobileNo);
          }
        }
      });
  }

  ngOnInit() {
  }

  next(id: number) {
    if (this.userProfile == null) {
      this.userProfile = {} as UserProfile;
    }
    this.userProfile.name = this.profileForm.get('name').value;
    this.userProfile.username = this.profileForm.get('username').value;
    this.userProfile.mobileNo = this.profileForm.get('mobileNo').value;
    if (this.userProfile.address == null) {
      this.userProfile.address = {} as Address;
    }
    this.userProfile.address.flatNo = this.address.flatNo;
    this.userProfile.address.street = this.address.street;
    this.userProfile.address.pin = this.address.pin;
    this.userProfile.address.city = this.address.city.value;
    this.userProfile.address.state = this.address.state.value;

    if (this.userProfile.id == null) {
      this.userProfileService.saveUserProfileDetails(this.userProfile).subscribe(x => {
        this.userProfileService.getUserProfileDetails(this.userProfile.username).subscribe(
          res => this.userProfile = res[0]
        );
        if (id === 2) {
          this.snackBar.open('Thank you for updating the profile', '', {
            duration: 2000,
          });
          this.router.navigate(['/']);
        }
      });
    } else {
      this.userProfileService.updateUserProfileDetails(this.userProfile).subscribe(
        res => {
          if (id === 2) {
            this.snackBar.open('Thank you for updating the profile', '', {
              duration: 2000,
            });
            this.router.navigate(['/']);
          }
        });
    }

  }


}
