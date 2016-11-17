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
  today = new Date().toJSON().slice(0,19);

  PV1 = {
    table: 'PV1',
    setId: '',
    admitDateTime: this.today,
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
    this.PV1.attendDr = this.PV1.attendDr + " " + this.PV1.refDr +  " " + this.PV1.consultDr;
    delete this.PV1.refDr;
    delete this.PV1.consultDr;
    console.log("PV1", this.PV1);
    for (let prop in this.PV1) {
      var instance = this.PV1[prop];
      if(prop === 'tempLoc' || prop === 'attendDr') {
        console.log("INSIDE", prop)
        instance = instance.replace(/ /g , '^');
      }
      result.push(this.PV1[prop])
    }
    console.log(result);
    var adt = new hl7.Message();
    adt.addSegment(result);
    adt.header.delimiters.segmentSeperator = '\n';
    var item = adt.toString().slice(9).replace(/,/g , '|');
    this.parsedItem = item;
  }
}
