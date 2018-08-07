import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { ThankComponent } from './thank/thank.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormDataService} from './form-data.service';
import {DataClass} from './data-class';
import { WrongPathComponent } from './wrong-path/wrong-path.component';

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
  },
  {
    path:"**",
    component:WrongPathComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ThankComponent,
    WrongPathComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [
    FormDataService,
    DataClass
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
