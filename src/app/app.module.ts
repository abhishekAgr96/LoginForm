import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { ThankComponent } from './thank/thank.component';
import { ReactiveFormsModule } from '@angular/forms';

const Routes=[
  {
    path:"",
    component:FormComponent
  },
  {
    path:"form",
    component:FormComponent
  },
  {
    path:"thank",
    component: ThankComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ThankComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  

 
 }
