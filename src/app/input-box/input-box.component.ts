import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styles: [`
    .ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class InputBoxComponent {
  PID = {
    extPatientId: ' ',
    intPatientId: ' ',
    name: 'John Doe',
    maidenName: '',
    birthday: ' ',
    sex: '',
    marital: ' ',
    address: ' ',
    mobileNum: ' ',
    homeNum: ' ',
    ssn: ' ',
    driverLicense: ' '

  }

  onSubmit(form: NgForm){
    console.log(form.value);
  }

}
