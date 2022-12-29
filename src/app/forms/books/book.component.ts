import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  formtitle:string='Book registration Form';
  bookForm:FormGroup;

  constructor(private formbuilder:FormBuilder){

    this.bookForm=this.formbuilder.group({
      id:['1',[Validators.required,Validators.max(10)]],
      title:['ABCD',[Validators.required,Validators.minLength(4)]],
      author:this.formbuilder.group({

        name:['Amit',[Validators.required,Validators.minLength(4)]],
        email:['abc@gmail.com',[Validators.required,Validators.email]],
        
       }),
       dateOfPublishing:['2022-09-09',[Validators.required]]

    });
  }

    get id(){ 
      return this.bookForm.get("id");
    }
    get title(){ 
      return this.bookForm.get('title');
    }
    get name() { 
      return this.bookForm.get('author')?.get('name');
     }
    get email(){
      return this.bookForm.get('author')?.get('email'); 
    }
    get dateOfPublishing(){ 
      return this.bookForm.get('dateOfPublishing');
    }

  
  
  ngOnInit(): void {
    
  }



  onSubmit(){
    console.log(this.bookForm.value);
    
  }
}
