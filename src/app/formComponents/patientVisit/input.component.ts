import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
var hl7    = require('simple-hl7');

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
    table: 'PV1',
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

  parsedItem = '';

  onSubmit(form: NgForm) {
    event.preventDefault();
    var result = [];
    result.push(this.PV1.table);
    delete this.PV1.table;
    for (let prop in this.PV1) {
      result.push(this.PV1[prop])
    }
    var adt = new hl7.Message();
    adt.addSegment(result);
    adt.header.delimiters.segmentSeperator = '\n';
    var item = adt.toString().slice(9);
    this.parsedItem = item;
  }
}
