import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import{
  FormsModule,
  ReactiveFormsModule
}from '@angular/forms';
import { Form101Component } from './form101/form101.component';
import { DetailComponent } from './detail/detail.component'

@NgModule({
  declarations: [
    AppComponent,
    Form101Component,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
