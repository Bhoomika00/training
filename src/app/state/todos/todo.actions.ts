import { createAction, props } from "@ngrx/store";
import { ITodo } from "src/app/todo/todo-interface";



export const addTodo = createAction(
'[Todo Page]  Add Todo',
 props<{content:string}>()

);

export const removeTodo = createAction(
  '[Todo Page] Remove Todo',
  props<{id:string}>()
);


export const loadTodos =createAction('[Todo Page] Load Todos');

export const LoadTodoSuccess =createAction('[Todo API] Todo Load Success',
props<{todos:ITodo[]}>());

export const LoadTodoFailure =createAction('[Todo API] Todo Load Failure',
props<{error:string}>());
