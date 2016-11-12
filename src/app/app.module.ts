import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputBoxComponent } from './formComponents/input-box/input-box.component';
import { InputComponent } from './formComponents/patientVisit/input.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBoxComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
