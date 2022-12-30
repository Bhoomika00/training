import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { publishBehavior } from 'rxjs';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  formtitle:string='Book registration Form';
  bookForm!:FormGroup;

  constructor(private formbuilder:FormBuilder){}

    

    publishers():FormArray{
      return this.bookForm.get('publishers') as FormArray;
    }

    newPublisher():FormGroup{
      return this.formbuilder.group({
          pName:'',
          pEmail:''
      });
    }

    addPublisher(){
      this.publishers().push(this.newPublisher());
    }

    removePublisher(pindex:number){
      this.publishers().removeAt(pindex);
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
    this.bookForm=this.formbuilder.group({
      id:['1',[Validators.required,Validators.max(10)]],
      title:['ABCD',[Validators.required,Validators.minLength(4)]],
      author:this.formbuilder.group({

        name:['Amit',[Validators.required,Validators.minLength(4)]],
        email:['abc@gmail.com',[Validators.required,Validators.email]],
        
       }),
       dateOfPublishing:['2022-09-09',[Validators.required]],
       publishers:this.formbuilder.array([])

    });
  }



  onSubmit(){
    console.log(this.bookForm.value);
    
  }
}
