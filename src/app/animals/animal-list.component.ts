import { Component, OnInit } from '@angular/core';
import { Ianimal } from './animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

    ngOnInit():void{
      this.filterList=this.animalList
    }
    _numage=0;
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

    animalList:Ianimal[]=[
      
      {
    id:101,
    name:'Peacock',
    breifdesc:'This is the peacock',
    age:8,
    
    imageUrl:'../../assets/images/p.jpg'

    },
    {
      id:102,
      name:'Crocodile',
      breifdesc:'This is crocodile',
      age:9,
      
      imageUrl:'../../assets/images/crocodile.jpg'
  
      },
      {
        id:103,
        name:'Turtle',
        breifdesc:'This is the turtle',
        age:2,
        imageUrl:'../../assets/images/t.jpg'
    
        },
      ]

      imageVisibility():void{
        this.showImg=!this.showImg
      }
      filterData(val:number):Ianimal[]{
        val=this.numage;
        return this.animalList.filter((animal:Ianimal)=>animal.age==val);
      
      
      
      }

    
}
