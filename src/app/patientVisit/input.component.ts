import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [`
    .ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class InputComponent {

  onSubmit(form: NgForm){
    console.log(form.value);
  }



}
