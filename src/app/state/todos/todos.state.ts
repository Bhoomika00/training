

import { ITodo } from 'src/app/todo/todo-interface';
import * as AppState from '../../state/app.state';

// Extends the app state to include the Todo feature.
// This is required because Todos are lazy loaded.
// So the reference to TodoState cannot be added to app.state.ts directly.

export interface State extends AppState.State {
  todos: TodoState;
}
export interface TodoState{
 todos:ITodo[],
 error:string,
 status:'pending'|'loading'|'success'|'error';
}

export const initialState:TodoState={
  todos:[],
  error:'',
  status:'pending'
}