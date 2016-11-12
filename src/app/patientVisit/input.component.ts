import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
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
    setId: '',
    admitDateTime: '',
    dischargeDateTime: '',
    bedStatus: '',
    patientClass: '',
    patientLoc: '',
    admType: '',
    readmitNum: '',

  }

  onSubmit(form: NgForm){
    console.log(form.value);
  }



}
