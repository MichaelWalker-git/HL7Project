import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
var message = require ('./../message');

@Component({
  selector: 'app-input-box',
  templateUrl: 'input-box.component.html',
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
    table: 'PID',
    extPatientId: '',
    intPatientId: '',
    name: '',
    maidenName: '',
    birthday: '',
    sex: '',
    marital: '',
    address: '',
    mobileNum: '',
    homeNum: '',
    ssn: '',
    driverLicense: ''

  }

  onSubmit(form: NgForm){
    event.preventDefault();
    var result = [];
    for(let prop in form.value.PIData){
      result.push(form.value.PIData[prop])
    }
    console.log("What?")
    var final = new message(result);
    console.log(final);


  }

}
