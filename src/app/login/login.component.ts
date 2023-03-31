import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { SharedData } from '../shareddata.service';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private svcData: SharedData, private svclogin: LoginService) {}

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(6),
    ]),
  });

  validateUser() {
    var user = this.form.controls['username'].value;
    var pass = this.form.controls['password'].value;

    var isvalid = this.svclogin.isUserValid(user, pass);

    /*if (user == 'user001' && pass == 'user001') {
      this.svcData.sendMessage('success');
    } else {
      this.svcData.sendMessage('failure');
    }*/
  }
}
