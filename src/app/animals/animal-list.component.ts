import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { State } from '../state/animals/animal.state';
import { AnimalService, Ianimal } from './animal.service';
import * as AnimalActions from '../state/animals/animal.actions'
import { getAnimals, getCurrentAnimal, getError } from '../state/animals/animal.selector';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animalList:Ianimal[]=[];  
  constructor(private service:AnimalService,private store:Store<State>,private router:Router){}
    
  selectedAnimal!:Ianimal | null;
  href:string='';
     _numage=0;
    imageMargin:number=5;
    imageWidth:number=100;
    showImg:boolean=false;
    filterList:Ianimal[]=[];
    sub!:Subscription;
    errorMessage:string=''

    //***for ngrx 
    animals$!:Observable<Ianimal[]>;
  selectedAnimal$!:Observable<any>;
  errorMessage$!: Observable<string>;

    ngOnInit():void{
      //this.filterList=this.animalList
      this.href=this.router.url;
    console.log(this.href);
      //this is using service
      /* this.sub=this.service.getAnimals().subscribe(
        (response)=>{
          console.log('in ngonint')
          console.log(response);
          this.animalList=response;
          this.filterList=this.animalList;
        },
        err=>{this.errorMessage=err;
          console.log(err);
         }

      );

      this.service.selectedAnimalChanges$.
      subscribe(currentAnimal=>{this.selectedAnimal=currentAnimal;
      console.log(this.selectedAnimal);
      });

      
 */

      this.animals$ = this.store.select(getAnimals);
       this.animals$.subscribe(resp=>this.filterList=resp);
      
       this.errorMessage$ = this.store.select(getError);
   
       this.store.dispatch(AnimalActions.loadAnimals());
   
       
       this.selectedAnimal$ = this.store.select(getCurrentAnimal);
   
    }
    


    get numage():number{
      return  this._numage;
 }

 set numage(val:number){

   this._numage=val;
   
   console.log('in setter ',val);
   this.filterList=this.filterData(val);
   console.log('in setter',this.filterList);
   
 }

    
      imageVisibility():void{
        this.showImg=!this.showImg
      }
      filterData(val:number):Ianimal[]{
        val=this.numage;
        return this.animalList.filter((animal:Ianimal)=>animal.age==val);
      
      
      
      }

      newAnimalEntry():void{
        console.log('in new animal entry');
      
        //this.service.changeSelectedAnimal(this.service.newAnimal()); //using service
        this.store.dispatch(AnimalActions.initializeCurrentAnimal());
        this.router.navigate([this.href,'addAnimal']);
            }
    

      /* addanimal(){
        console.log('in new animal entry');
      
        //this.service.changeSelectedAnimal(this.service.newAnimal()); //using service
        
        console.log('back to newAnimal from service ');
      
         
          //console.log(this.productService.newProduct());
      }
       */
      animalSelected(animal:Ianimal):void{
        //this.service.changeSelectedAnimal(animal);  //using service
        this.store.dispatch(AnimalActions.setCurrentAnimal({currentAnimalId:animal.id}));
        
       }
        
        deleteEntry(a:Ianimal):void{
          if(a && a.id){
      
            if(confirm(`Are you sure you want to delete ${a.name} details`)){
              //using service
              /* this.service.deleteAnimal(a.id).subscribe(
                resp=>this.service.changeSelectedAnimal(null),
                err=>this.errorMessage=err
              ); */
              this.store.dispatch(AnimalActions.deleteAnimal({ animalId: a.id }));  //using ngrx
            }
            else{
              //no need to delete the product
              //this.service.changeSelectedAnimal(null)  //using service

              this.store.dispatch(AnimalActions.clearCurrentAnimal()); //using ngrx
            }
          }
      
        }
      

  
}
