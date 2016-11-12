import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styles: [`
      .ng-valid[required], .ng-valid.required  {
        border-left: 5px solid #42A948; /* green */
      }
      
      .ng-invalid:not(form)  {
        border-left: 5px solid #a94442; /* red */
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
