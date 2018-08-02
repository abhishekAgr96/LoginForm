import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Validators } from '@angular/forms';
import { FormControl , FormGroup } from '@angular/forms';
import {FormDataService} from '../form-data.service';
import {  DataClass } from '../data-class';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  constructor(private formData:FormDataService,private route:Router,private classObj:DataClass) { }
  title = 'reactiveForm';
  checkPass:boolean=false;

  myFormGroup=new FormGroup({
      fname:new FormControl('',[
        Validators.required,
        Validators.pattern("[a-zA-Z]*")
      ]),
      lname:new FormControl('',[
        Validators.required,
        Validators.pattern("[a-zA-Z]*")
      ]),
      gender:new FormControl('',[
        Validators.required,
        Validators.pattern("(M)|(m)|(F)|(f)")
      ]),
      contactNo:new FormControl('',[
        Validators.required,
        Validators.minLength(10),
        Validators.pattern("[0-9]+")
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~`!@#$%^&*()_-{}<>,./?:;'+=]).{8,16}")
      ]),
 
      confirmPassword:new FormControl('',[Validators.required]),

      empId:new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
          Validators.pattern("[0-9]+")
      ])
    }
  );
 
  checkPassword(){

    if(this.myFormGroup.value.password !== this.myFormGroup.value.confirmPassword)
    {
        this.checkPass=false;
    }
    else{
      this.checkPass=true;
    }
    console.log(this.checkPass);
  }


  onSubmit(){
    this.formData.jsonObject =this.myFormGroup.value;
  
        this.classObj=this.myFormGroup.value
        console.log(this.classObj);
        this.route.navigate(['/thank']);
  }

    // formValue:dataClass; 

  ngOnInit(){
    if(this.formData.jsonObject && this.route.url==='/form'){
      this.classObj= this.formData.jsonObject;
     console.log(this.formData.jsonObject);
    this.myFormGroup.patchValue({
      fname:this.classObj.fname,
      lname:this.classObj.lname,
      contactNo:this.classObj.contactNo,
      gender:this.classObj.gender,
      password:this.classObj.password,
      confirmPassword:this.classObj.confirmPassword,
      empId:this.classObj.empId
    });
  }
 
}
}