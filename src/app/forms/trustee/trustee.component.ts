import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Itrustee} from './trustee'

export class country{
  id:string='';
  name:string='';

  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }

}

@Component({
  selector: 'app-trustee',
  templateUrl: './trustee.component.html',
  styleUrls: ['./trustee.component.css']
})
export class TrusteeComponent implements OnInit{
  @ViewChild('trusteeForm',{})trusteeForm!:NgForm;
  trustee!:Itrustee;
  ngOnInit(): void {
    this.trustee={
      id:1,
      name:'ABC',
      gender:'Male',
      country:'India',
      passport:'t1233',
      issueDate:'2022-09-09',
      dependents:0
    };
    setTimeout(()=>{
      this.trusteeForm.setValue(this.trustee);
    })

  }

  countries:country[]=[
    new country("1","India"),
    new country("2","Japan"),
    new country("3",'Korea')
  ];

  onSubmit(form:any){
    console.log(form.value);
    form.resetForm();
  }

  //changecountry()
  changeCountry(){
    this.trusteeForm.controls['country'].setValue("1");
   }
   
}
