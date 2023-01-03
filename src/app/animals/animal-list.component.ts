import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnimalService, Ianimal } from './animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animalList:Ianimal[]=[];  
  constructor(private service:AnimalService,private router:Router){}
    
  selectedAnimal!:Ianimal | null;
  href:string='';
     _numage=0;
    imageMargin:number=5;
    imageWidth:number=100;
    showImg:boolean=false;
    filterList:Ianimal[]=[];
    sub!:Subscription;
    errorMessage:string=''

    ngOnInit():void{
      //this.filterList=this.animalList
      this.href=this.router.url;
    console.log(this.href);
      this.sub=this.service.getAnimals().subscribe(
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
      
        this.service.changeSelectedAnimal(this.service.newAnimal());
            }
    

      addanimal(){
        console.log('in new animal entry');
      
        this.service.changeSelectedAnimal(this.service.newAnimal());
        console.log('back to newAnimal from service ');
      
         this.router.navigate([this.href,'addanimal']);
          //console.log(this.productService.newProduct());
      }
      
      animalSelected(animal:Ianimal):void{
        this.service.changeSelectedAnimal(animal);
        
       }
        /*getProductById(id:number):Ianimal{
          this.service.getAnimalById(id).subscribe(resp=>this.prod=resp);
          return this.prod;
        }*/

        deleteEntry(a:Ianimal):void{
          if(a && a.id){
      
            if(confirm(`Are you sure you want to delete ${a.name} details`)){
      
              this.service.deleteAnimal(a.id).subscribe(
                resp=>this.service.changeSelectedAnimal(null),
                err=>this.errorMessage=err
              );
            }
            else{
              //no need to delete the product
              this.service.changeSelectedAnimal(null)
            }
          }
      
        }
      

  
}
