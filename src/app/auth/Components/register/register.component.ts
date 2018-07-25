import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from '../../Interfaces/User';
import { UserAuthService } from '../../Services/user.auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  nameControl: FormControl;
  usernameControl: FormControl;
  passwordControl: FormControl;
  username: string;
  password: string;
  name: string;

  registerUser = new User;
  constructor(private fb: FormBuilder, private userservice: UserAuthService) {

    this.nameControl = new FormControl('', Validators.required);
    this.usernameControl = new FormControl('', Validators.required);
    this.passwordControl = new FormControl('', Validators.required);

    this.registerForm = this.fb.group({
        'name': this.nameControl,
        'username': this.usernameControl,
        'password': this.passwordControl });
  }

  ngOnInit() {

  }
  register() {
    if (this.registerForm.valid) {
        this.registerUser.username = this.usernameControl.value;
        this.registerUser.password = this.passwordControl.value;
        this.registerUser.name = this.nameControl.value;
        this.registerUser.roles = ['user'];
        this.userservice.register(this.registerUser);
        alert('User successfully registered');
    } else {
      alert('Username/Password is Blank!!!');
    }

  }

}
