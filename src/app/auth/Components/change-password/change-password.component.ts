import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserAuthService } from '../../Services/user.auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  passwordForm: FormGroup;
  usernameControl: FormControl;
  oldPwdControl: FormControl;
  newPwdControl: FormControl;
  password1: string;
  password2: string;
  username: string;
  pwd;
  user;
  constructor(private fb: FormBuilder, private userservice: UserAuthService) {
    this.usernameControl =  new FormControl('', Validators.required);
    this.oldPwdControl = new FormControl('', Validators.required);
    this.newPwdControl = new FormControl('', Validators.required);

    this.passwordForm = this.fb.group({
       'username': this.usernameControl,
        'password1': this.oldPwdControl,
        'password2': this.newPwdControl });
   }

  ngOnInit() {
  }

  Change() {
    alert(this.usernameControl.value);
      this.userservice.getUserFromApi().subscribe(x => {
        this.user = x.filter(item => item.username === this.usernameControl.value);
        this.pwd = this.user[0].password;
        if (this.pwd === this.oldPwdControl.value) {
          this.user[0].password = this.newPwdControl.value;
          this.userservice.editUser(this.user[0]);
          alert('Password Successfully Changed!!!!');
        } else {
          alert('Old Password entered is not matching!!!!');
        }
      });
  }
}
