import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimalAddComponent } from './animal-add.component';
import { AnimalListComponent } from './animal-list.component';
import { AnimalRoutingModule } from './animal-routing.module';
//import { Store, StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [AnimalAddComponent,
    AnimalListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,AnimalRoutingModule
    //StoreModule.forFeature()
    
  ]
})
export class AnimalModule { }
