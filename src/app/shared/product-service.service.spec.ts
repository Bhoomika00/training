import { getTestBed, inject, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { ProductService } from './product-service.service';
import { Iproduct } from '../products/product';
import { of } from 'rxjs';

describe('ProductService', () => {
  let service:ProductService;

  let injector: TestBed;

  let httpMock: HttpTestingController;

  let dummyList:Iproduct[]=[];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports:[HttpClientTestingModule],
      providers: [ ProductService ]
    })
    .compileComponents();

    service=TestBed.get(ProductService);
    injector = getTestBed();

    httpMock = injector.get(HttpTestingController);
     dummyList=[
      {
      "id": 101,
        "name":"Shirts",
        
        "category":"Clothing",
        "price": 500,
        "rating": 3.5,
        "imageurl":"../../assets/images/shirt.jpg",
        "qty": 0
      },
      {"id": 102,
      "name":"Pizza",
      
      "category":"Food",
      "price": 300,
      "rating": 5,
      "imageurl":"../../assets/images/pizza.jpg",
      "qty": 0
      },
      {
      "id": 501,
        "name": "Laptop",
        
        "category":"Electronics",
        "price": 50000,
        "rating": 4,
        "imageurl":"../../assets/images/laptop.jpg",
        "qty": 0
      }
      
  ];

  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
  it('should check getProduct() for all products', () => {
    inject([HttpTestingController,ProductService],
        (httpMock:HttpTestingController,service:ProductService)=>
        {
    

    service.getProducts().subscribe(response=>expect(dummyList).toEqual(response));
    
    const mockReq=httpMock.expectOne(service.url);
    expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(dummyList);

      httpMock.verify();
})
  });


  it('should get product by id',()=>{
    let response:Iproduct;
    
   let dummyItem ={

    
      "id": 504,
        "name":"Mobile",
        
        "category":"Electronics",
        "price": 10000,
        "rating": 4.5,
        "imageurl":"../../assets/images/mobile.jpg",
        "qty": 0
      
   };

    const fn=spyOn(service, 'getProductById').and.returnValue(of(dummyItem));

    service.getProductById(504).subscribe(res=>{response=res;expect(response).toEqual(dummyItem);});

   expect(fn).toHaveBeenCalled();

});

it('should test create product function',()=>{

  let dummyItem ={

    
    id: 504,
      name:"Mobile",
      
      category:"Electronics",
      price: 10000,
      rating: 4.5,
      imageurl:"../../assets/images/mobile.jpg",
      qty: 0
    
 };

 
 dummyList=[...dummyList,dummyItem];
 service.createProduct(dummyItem).subscribe(resp=>expect(resp).toEqual(dummyItem) )
 
 expect(dummyList.length).toEqual(4);

 const req = httpMock.expectOne(service.url);
 expect(req.request.method).toBe('POST');
 req.flush(dummyItem );

 

   
});

it('should check update function',()=>{
  let item= {
    "id": 101,
      "name":"Shirts",
      
      "category":"Clothing",
      "price": 600,
      "rating": 4.5,
      "imageurl":"../../assets/images/shirt.jpg",
      "qty": 0
    };

    service.updateProduct(item).subscribe(resp=>expect(resp).toEqual(item) )


    const req = httpMock.expectOne(`${service.url}/${item.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush({item });
});

})















/* it('should check delete product function',()=>{
  //let response:Iproduct;
   let dummyItem ={

    
    id: 504,
      name:"Mobile",
      
      category:"Electronics",
      price: 10000,
      rating: 4.5,
      imageurl:"../../assets/images/mobile.jpg",
      qty: 0
    
 };
 dummyList=[...dummyList,dummyItem];
 //so the size of dummylist becomes 4.
 
 service.deleteProduct(`${dummyItem.id}`).subscribe(res=>{expect(res).toEqual(504);});
 
 expect(dummyList.length).toEqual(3);
 
 

 const req = httpMock.expectOne(`${service.url}/${dummyItem.id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(dummyList );
  


});
 */



