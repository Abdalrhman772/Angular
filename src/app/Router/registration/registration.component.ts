import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [],
})
export class RegistrationComponent {
  myFormValidation = new FormGroup({
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
    age: new FormControl('', [Validators.min(20), Validators.max(40), Validators.required]),
    email: new FormControl('', Validators.email),
  });

  validName: any;
  validEmail: any;
  validAge: any;
  checkValues() {
    this.validName = this.myFormValidation.controls['name'].valid;
    this.validAge = this.myFormValidation.controls['age'].valid;
    this.validEmail = this.myFormValidation.controls['email'].valid;
  }
}
