import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimalAddComponent } from './animal-add.component';
import { AnimalListComponent } from './animal-list.component';
import { AnimalRoutingModule } from './animal-routing.module';
import { animalReducer } from '../state/animals/animal.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AnimalEffects } from '../state/animals/animal.effects';
import { MaterialModule } from '../material UI module/material-module.module';




@NgModule({
  declarations: [AnimalAddComponent,
    AnimalListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,AnimalRoutingModule,
    MaterialModule,
    StoreModule.forFeature('animals',animalReducer),
    EffectsModule.forFeature(AnimalEffects)
    
  ]
})
export class AnimalModule { }
