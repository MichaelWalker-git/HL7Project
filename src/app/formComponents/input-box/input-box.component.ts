import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
var hl7    = require('simple-hl7');

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
  };

  parsedItem = '';

  onSubmit(form: NgForm) {
    event.preventDefault();
    var result = [];
    result.push(this.PID.table);
    delete this.PID.table;
    for (let prop in this.PID) {
      result.push(this.PID[prop])
    }
    var adt = new hl7.Message();
    adt.addSegment(result);
    adt.header.delimiters.segmentSeperator = '\n';
    var item = adt.toString().slice(9);
    this.parsedItem = item;
  }
}
