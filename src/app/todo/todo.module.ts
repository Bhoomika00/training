import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './todo-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoRoutingModule } from './todo-routing.module';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from '../state/todos/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from '../state/todos/todo.effects';



@NgModule({
  declarations: [
    TodoPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TodoRoutingModule,
    StoreModule.forFeature('todos',todoReducer),
    EffectsModule.forFeature(TodoEffects)

  ]
})
export class TodoModule { }
