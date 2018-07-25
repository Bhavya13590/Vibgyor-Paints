import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserprofileRoutingModule } from './userprofile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { MaterialModule } from '../../Shared/material.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserProfileService } from './services/userprofile.service';

@NgModule({
  imports: [
    CommonModule,
    UserprofileRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ProfileComponent],
  providers: [UserProfileService]
})
export class UserprofileModule { }
