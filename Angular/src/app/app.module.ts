import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// imports the NumericTextBoxModule for the NumericTextBox component
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
// import the LinearGaugeModule for the LinearGauge component
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NumericTextBoxModule,
    LinearGaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
