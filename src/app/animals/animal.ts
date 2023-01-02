import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from "rxjs";

export interface Ianimal {
        id: number,
        name: string,
        breifdesc: string,
        age: number,
        imageUrl: string

}
//------service--------
@Injectable({
        providedIn:'root'
    })
export class AnimalService {
        private url='api/animals';
        animals:Ianimal[]=[];
        foundIndex:number=0;


        //behaviourail subj to only emit recent value of observable.
        private selectedAnimalSource=new BehaviorSubject<Ianimal | null>(null);
        
         selectedAnimalChanges$=this.selectedAnimalSource.asObservable();

        constructor( private http:HttpClient){ }

        errorHandler=(err:any)=>{

                let errorMessage:string;
                //a client side error or network error then ErrorEvent object will be thrown
             
                if(err.error instanceof ErrorEvent)
                  {
             
                    errorMessage = `An error has occured ${err.error.message}`
                  }
                  else{
             
                   errorMessage =  `Backend error code ${err.status} ${err.body.error}`;
             
                  }
                  console.log(err);
                  return throwError(errorMessage);
             
             
               }
             
             


         getAnimals():Observable<Ianimal[]> {
                 return this.http.get<Ianimal[]>(this.url).pipe(
                         tap(data=>{console.log('in getanimals() of service')
                                 
                                 console.log(data);
                                 this.animals=data;
                     }),
                         catchError(this.errorHandler)
                     );
                 
                 }

            
        changeSelectedAnimal(selectedAnimal:Ianimal | null):void{
                console.log('in change selected before next');
                this.selectedAnimalSource.next(selectedAnimal);
                console.log('in change selected after next');
              }
        
              newAnimal():Ianimal{
                
                  return {
              
                       id:0,
                      name:'',
                      breifdesc:'',
                      age:0,
                      imageUrl:'\\assets\\images\\animal.jpg',
                };
        }
                      
              
                createAnimal(animal:Ianimal):Observable<Ianimal>{
                        
                       const headers= new HttpHeaders({'Content-Type':'application/json'});
                         const newAnimal={...animal,id:null};
                       console.log(`in create method  ${this.url}`)
                   
                         return     this.http.post<Ianimal>(this.url,newAnimal,{headers})
                         .pipe(
                           tap(data=>{
                   
                            console.log('in create new Animal'+ JSON.stringify(data));
                            this.animals.push(data);
                        },
                        catchError(this.errorHandler)
                        )
                      )
                  }

                  deleteAnimal(id:number):Observable<{}>{
                        const headers= new HttpHeaders({'Content-Type':'application/json'});
                    
                        //@DeleteMapping deleteAll delete url/id  /api/products/111
                        const url= `${this.url}/${id}`;
                    
                        return this.http.delete<Ianimal>(url,{headers})
                        .pipe(
                          tap(data=>{
                            console.log('deleted prd'+id);
                           const foundIndex = this.animals.findIndex(item=>item.id===id);
                           
                           if(foundIndex > -1)
                           this.animals.splice(foundIndex,1);
                    
                    
                          },
                          catchError(this.errorHandler))
                    
                    
                        );
                }


                getAnimalById(id:number):Observable<Ianimal>{
                        return this.getAnimals().pipe(
                          tap(()=>{console.log('fetch product'+id);
                           this.foundIndex =this.animals.findIndex(item=>item.id ==id);
                          if(this.foundIndex > -1){
                            this.animals[this.foundIndex];
                              }
                          }),
                          map(()=>this.animals[this.foundIndex]),
                          catchError(this.errorHandler)
                          );
                        }
                    
                    
                    
                        updateAnimal(animal:Ianimal):Observable<Ianimal>{
                                const headers= new HttpHeaders({'Content-Type':'application/json'});
                            
                                //put http method
                                const url= `${this.url}/${animal.id}`;
                            
                                
                                return this.http.put<Ianimal>(url,animal, {headers}).pipe(
                            
                                tap(()=>{console.log('update product'+animal.id);
                                const foundIndex =this.animals.findIndex(item=>item.id === animal.id);
                                if(foundIndex > -1){
                                  this.animals[foundIndex]=animal;
                                    }
                                }),
                                map(()=>animal),
                                catchError(this.errorHandler)
                                );
                            
                        }
                            
                            
                            
                            
                            
                            
                            
                    
                       
                    
                    
                    
                    
                    
                    
                    
                            
                   
              
              
        



      

}