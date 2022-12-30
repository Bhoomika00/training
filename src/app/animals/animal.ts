import { Injectable } from "@angular/core";

export interface Ianimal {
        id: number,
        name: string,
        breifdesc: string,
        age: number,
        imageUrl: string

}

@Injectable({
        providedIn:'root'
    })
export class AnimalService {

        public getAnimals() {
                let animalList: Ianimal[] = [

                        {
                                id: 101,
                                name: 'Peacock',
                                breifdesc: 'This is the peacock',
                                age: 8,

                                imageUrl: '../../assets/images/p.jpg'

                        },
                        {
                                id: 102,
                                name: 'Crocodile',
                                breifdesc: 'This is crocodile',
                                age: 9,

                                imageUrl: '../../assets/images/crocodile.jpg'

                        },
                        {
                                id: 103,
                                name: 'Turtle',
                                breifdesc: 'This is the turtle',
                                age: 2,
                                imageUrl: '../../assets/images/t.jpg'

                        },
                ]
                return animalList;

        }

        getAnimalbyId(id:number){

                let animal:Ianimal[]=this.getAnimals();
                return animal.find(e=>e.id==id);
              }


}