import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { Iproduct } from 'src/app/products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url='/api/products'
  products:Iproduct[]=[];

  private selectedProductSource= new BehaviorSubject<Iproduct | null >(null);
  
  selectedProductChanges$=this.selectedProductSource.asObservable(); //this is observable

  constructor(private http:HttpClient) { }

  //all products
  getproducts():Observable<Iproduct[]>{

    return this.http.get<Iproduct[]>(this.url).pipe(
      tap(data=>{console.log(data);
          this.products=data;
  }),
      catchError(this.errorHandler)
    );

  }

  changeSelectedProduct(selectedProduct:Iproduct | null):void{
    //console.log('in changed selected');
    this.selectedProductSource.next(selectedProduct);
    console.log(selectedProduct);
  
  }
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
 
 
   // a method newProduct which acts like a constructor of creating a new Product
   //what is name of the method -- newProduct
   //how many args --zero args
   //return type IProduct
 
   newProduct():Iproduct{
   //logic should focus on sending back a IProduct
     return {
 
          id:0,
         name:'',
         category:'',
         price:0,
         imageurl:'',
         rating:0,
         qty:0
 
     };
    }
     createProduct(product:Iproduct):Observable<Iproduct>{
      //headers variable to set request headers
     const headers= new HttpHeaders({'Content-Type':'application/json'});
 
         //newProduct spread across product
       const newProduct={...product,id:null};
 
 
       //return logic starts here
       //http .post method
       //generics method -- IProduct
       //args --3 url , newProduct ,headers
       //this.url -- declared in the class outside the functions
       return     this.http.post<Iproduct>(this.url,newProduct,{headers})
       .pipe(
         tap(data=>{
 
          console.log('in create new product'+ JSON.stringify(data));
          //pushing the new data new Product to the products array
          this.products.push(data);
 
         },
         catchError(this.errorHandler)
         )
       )
   }
   //delete  api/events --- delete mapping api/events/1
 
   deleteProduct(id:number):Observable<{}>{
     const headers= new HttpHeaders({'Content-Type':'application/json'});
 
     //@DeleteMapping deleteAll delete url/id  /api/products/111
     const url= `${this.url}/${id}`;
 
     return this.http.delete<Iproduct>(url,{headers})
     .pipe(
       tap(data=>{
         console.log('deleted prd'+id);
        const foundIndex = this.products.findIndex(item=>item.id===id);
        //if product id is not found means index returned will be -1
        if(foundIndex > -1)
        this.products.splice(foundIndex,1);
 
 
       },
       catchError(this.errorHandler))
 
 
     );
 
 
 
 
 
   }
 
 
 
 
   //update a product
   // means two steps -- one when the user selects a particular data from the list and clicks on edit button
   //you can render a new component ProductEditComponent --form with all the required fields
   // name price qty
   //ngOnInit -- it should get the values of the selectedProduct  from the ProductListComponent
   //in that form , pre fill the data from the db with the selected product
   //user will modify
   //user will submit  ,this new product data will be used in http put with the id
 
    updateProduct(product:Iproduct):Observable<Iproduct>{
     const headers= new HttpHeaders({'Content-Type':'application/json'});
 
     //put http method
     const url= `${this.url}/${product.id}`;
 
     //logic to call http put method to update the product on the given url
     return this.http.put<Iproduct>(url,product, {headers}).pipe(
 
     tap(()=>{console.log('update product'+product.id);
     const foundIndex =this.products.findIndex(item=>item.id === product.id);
     if(foundIndex > -1){
       this.products[foundIndex]=product;
         }
     }),
     map(()=>product),
     catchError(this.errorHandler)
     );
 
 
 
 
 
 
    }
 
 
   
  
  
}
