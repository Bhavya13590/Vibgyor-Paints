import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { User } from '../../../auth/Interfaces/User';
import { UserAuthService } from '../../../auth/Services/user.auth.service';

@Component({
  selector: 'app-createedit',
  templateUrl: './createedit.component.html',
  styleUrls: ['./createedit.component.css']
})
export class CreateeditComponent implements OnInit {

details;
  createEdit: FormGroup;
  usernameControl: FormControl;
  passwordControl: FormControl;
  nameControl: FormControl;
  username: string;
  password: string;
  name: string;
  dataFromtable = new User();
  role;
  roleControl: FormControl;

  roles = ['admin', 'user', 'staff'];
userDetails = new User();

  constructor(private builder: FormBuilder, public dialogRef: MatDialogRef<CreateeditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userauth: UserAuthService) {
      this.dataFromtable = data.details;
      this.usernameControl = new FormControl('', Validators.required);
      this.passwordControl = new FormControl('', Validators.required);
      this.nameControl = new FormControl('', Validators.required);
      this.roleControl = new FormControl('', Validators.required);

    this.createEdit = this.builder.group({
        'username': this.usernameControl,
        'password': this.passwordControl,
      'name': this.nameControl,
    'role': this.roleControl });


  }

  ngOnInit() {

    this.usernameControl
        .valueChanges
        .subscribe ( value => {

          if (this.usernameControl.valid) {
            this.username = value;
          }
        });

        this.passwordControl
        .valueChanges
        .subscribe (value => {
          this.password = value;
        });

        this.nameControl
        .valueChanges
        .subscribe (value => {
          this.name = value;
        });

        this.roleControl
        .valueChanges
        .subscribe (value => {
          this.role = value;
        });

        if (this.dataFromtable != null) {
        this.nameControl.setValue(this.dataFromtable.name);
        this.usernameControl.setValue(this.dataFromtable.username);
        this.passwordControl.setValue(this.dataFromtable.password);
        this.roleControl.setValue(this.dataFromtable.roles);
        }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveChanges() {

    if (this.dataFromtable === null) {
      this.userDetails.name = this.name;
      this.userDetails.username = this.username;
      this.userDetails.password = this.password;
      this.userDetails.roles = this.role;
      this.userauth.register(this.userDetails);
      this.dialogRef.close();
    } else {
      this.userDetails.name = this.name;
      this.userDetails.username = this.username;
      this.userDetails.password = this.password;
      this.userDetails.roles = this.role;
      this.userDetails.id = this.dataFromtable.id;
      this.userauth.editUser(this.userDetails);
      this.dialogRef.close();
    }
  }

}
