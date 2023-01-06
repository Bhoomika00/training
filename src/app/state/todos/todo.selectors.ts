import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as  AppState  from "../app.state";

import { TodoState } from "./todos.state";
export const todosDataState =  createFeatureSelector<TodoState>('todos');

export const getTodos =createSelector(todosDataState,state=>state.todos);

