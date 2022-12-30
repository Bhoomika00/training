import { Component, OnInit } from '@angular/core';
import { AnimalService, Ianimal } from './animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animalList:Ianimal[]=[];  
  constructor(private service:AnimalService){}
    ngOnInit():void{
      //this.filterList=this.animalList
      this.animalList=this.service.getAnimals();

    }
    /* _numage=0;
    imageMargin:number=5;
    imageWidth:number=100;
    showImg:boolean=false;
    filterList:Ianimal[]=[];
    


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

 */    
}
