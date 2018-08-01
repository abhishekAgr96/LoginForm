import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-thank',
  templateUrl: './thank.component.html',
  styleUrls: ['./thank.component.css']
})
export class ThankComponent implements OnInit {

  constructor(private route:Router) { }
type:string="text";
  
showHidePassword(){
    console.log("eye call");
    if(this.type=="text"){
      this.type="password";
    }
    else{
      this.type="text";
    }
  }

  editForm(){
    console.log("edit form call");
    this.route.navigate(['/form']);
  }
  
  formValue:string=JSON.parse( localStorage.getItem("json"));
  ngOnInit() {
  }

}
