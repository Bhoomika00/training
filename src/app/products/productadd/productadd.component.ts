import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'shared/product-service.service';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router,
     private productService:ProductService ) { }

  addProduct!: FormGroup;

  ngOnInit() {
    this.addProduct = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],

    });

  }

  onSubmit() {
    this.productService.createProduct(this.addProduct.value)
      .subscribe( data => {console.log(data);
        this.router.navigate(['']);
      });
  }

}
