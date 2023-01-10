import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrls: ['./empform.component.css']
})
export class EmpformComponent implements OnInit {
  empForm!:FormGroup;
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.empForm=this.fb.group({
      name:['',[Validators.required,Validators.minLength(2)]],
      dept:['',[Validators.required]],
      experience:['',[Validators.required]],
      joiningDate:['',[Validators.required]],
    });
    
  }
  
  onSubmit(){
    console.log(this.empForm.value);
  }

  public myError = (controlName: string, errorName: string) =>{
    return this.empForm.controls[controlName].hasError(errorName);
    }

}
