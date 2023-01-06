import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalService, Ianimal } from './animal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-animal-add',
  templateUrl: './animal-add.component.html',
  styleUrls: ['./animal-add.component.css']
})
export class AnimalAddComponent implements OnInit{

  addanimal!:FormGroup;
  sub!:Subscription;
  animal!:Ianimal | null;
  pageTitle:string='Edit the entry';
  errorMessage:string='';
  
  constructor(private formbuilder:FormBuilder,private router:Router,private service:AnimalService){}

  ngOnInit(): void {

    this.addanimal=this.formbuilder.group({
    id:[],
    name: ['Abc',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    breifdesc: ['some information',[Validators.required]],
    age: [0,[Validators.required]],
    imageUrl: ['',Validators.required]
  });

  this.sub=this.service.selectedAnimalChanges$.subscribe(selani=>this.displayAnimal(selani));

  }

  displayAnimal(animalparam:Ianimal |null):void{

    this.animal = animalparam;
    if(this.animal){
 
     this.addanimal.reset();
 
     if(this.animal.id==0){
       this.pageTitle='Add entry';
     }
     else{
 
       this.pageTitle=`Edit entry: ${this.animal.name}`;
 
     } 
  //update the data on the form
  this.addanimal.patchValue({
   id:this.animal?.id,
    name:this.animal?.name,
    breifdesc: this.animal?.breifdesc,
    age: this.animal?.age,
    imageUrl:this.animal?.imageUrl    
    
 
  })
 
 
    }
 
   }

   
   saveAnimal(OriginalAnimal:Ianimal):void{
    if(this.addanimal.valid){
      if(this.addanimal.dirty){
        
        const animal={...OriginalAnimal,...this.addanimal.value};

        if(animal.id===0){
        this.service.createAnimal(animal).subscribe(
          (resp)=>this.service.changeSelectedAnimal(resp),
          (err)=>this.errorMessage=err
        );
        }
        else{
          this.service.updateAnimal(animal).subscribe(
            resp=>this.service.changeSelectedAnimal(resp),
            err=>this.errorMessage=err      );

        }

     }
    }

    this.router.navigate(['animal'])

   }


   

 
}




