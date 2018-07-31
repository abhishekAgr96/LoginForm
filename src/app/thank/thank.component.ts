import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank',
  templateUrl: './thank.component.html',
  styleUrls: ['./thank.component.css']
})
export class ThankComponent implements OnInit {

  constructor() { }
  
   formValue:string=JSON.parse( localStorage.getItem("json"));
  ngOnInit() {
  }

}
