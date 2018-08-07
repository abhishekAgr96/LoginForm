import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormDataService} from '../form-data.service';
import { DataClass } from '../data-class';


@Component({
  selector: 'app-thank',
  templateUrl: './thank.component.html',
  styleUrls: ['./thank.component.css']
})
export class ThankComponent implements OnInit {

  constructor(private formData:FormDataService, private route:Router,private classObj:DataClass) { }
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
   // console.log("edit form call");
    this.route.navigate(['/form']);
  }
  newForm(){
    this.route.navigate(['']);
  }
  
  
  ngOnInit() {
    this.classObj= this.formData.jsonObject;
  }

}
