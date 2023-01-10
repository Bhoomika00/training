import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { StarComponent } from '../star/star.component';
import { ProductRoutingModule } from './product-routing.module';
import { StoreModule } from '@ngrx/store';
import { productReducer } from '../state/products/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from '../state/products/product.effects';



@NgModule({
  declarations: [ProductListComponent,ProductaddComponent,StarComponent],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    ProductRoutingModule,
    StoreModule.forFeature('products',productReducer),
    EffectsModule.forFeature(ProductEffects)
    
  ]
})
export class ProductModule { }
