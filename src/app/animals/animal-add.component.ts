import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalService, Ianimal } from './animal.service';
import { Observable, Subscription, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../state/animals/animal.state';
import { getCurrentAnimal } from '../state/animals/animal.selector';
import * as AnimalActions from '../state/animals/animal.actions'
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-animal-add',
  templateUrl: './animal-add.component.html',
  styleUrls: ['./animal-add.component.css'],
  
})
export class AnimalAddComponent implements OnInit{

  addanimal!:FormGroup;
  sub!:Subscription;
  animal!:Ianimal | null | undefined;
  pageTitle:string='Edit the entry';
  errorMessage:string='';

  animal$!:Observable<Ianimal | null | undefined>;
  
  constructor(private store:Store<State>,private formbuilder:FormBuilder,private router:Router,private service:AnimalService){}

  ngOnInit(): void {

    this.addanimal=this.formbuilder.group({
    id:[],
    name: ['Abc',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    breifdesc: ['some information',[Validators.required]],
    age: [0,[Validators.required]],
    imageUrl: ['',Validators.required]
  });

  //this.sub=this.service.selectedAnimalChanges$.subscribe(selani=>this.displayAnimal(selani)); //suing service

  this.animal$ = this.store.select(getCurrentAnimal)
 .pipe(
  tap(currentAnimal=>this.displayAnimal(currentAnimal))
);
this.animal$.subscribe(resp=>this.animal=resp);
console.log('selected current product in ng onit add product ',this.animal);


  }

  displayAnimal(animalparam:Ianimal | null | undefined):void{

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
          //using service
        /* this.service.createAnimal(animal).subscribe(
          (resp)=>this.service.changeSelectedAnimal(resp),
          (err)=>this.errorMessage=err
        ); */

        this.store.dispatch(AnimalActions.createAnimal({animal})); //using ngrx
        }
        else{
          //using service
          /* this.service.updateAnimal(animal).subscribe(
            resp=>this.service.changeSelectedAnimal(resp),
            err=>this.errorMessage=err      );
 */
            this.store.dispatch(AnimalActions.updateAnimal({animal})); //using ngrx

        }

     }
    }

    this.router.navigate(['animals'])

   }

   

   

 
}




