import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: 'input.component.html',
  styles: [`
      .ng-valid[required], .ng-valid.required  {
        border-left: 5px solid #42A948; /* green */
      }
      
      .ng-invalid:not(form)  {
        border-left: 5px solid #a94442; /* red */
      }
  `]
})
export class InputComponent {
  PV1 = {
    table: 'PID',
    setId: '',
    admitDateTime: '',
    dischargeDateTime: '',
    bedStatus: '',
    patientClass: '',
    patientLoc: '',
    admType: '',
    readmitNum: '',
    patLoc: '',
    attendDr: '',
    refDr: '',
    consultDr: '',
    hospServ: '',
    tempLoc: '',
    admitDr: '',
    patientType: '',
    visitNum: ''
  };

  onSubmit(form: NgForm){
    var result = [];
    for(var prop in form.value.PIData){
      var entry = form.value.PIData[prop];
      if(!entry){
        result.push(' ' +  "||");
      }
      result.push(form.value.PIData[prop] + "||")
    }
  }


}
